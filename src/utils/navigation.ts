import fs from 'fs';
import path from 'path';
import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

export interface NavItem {
  title: string;
  slug: string;
  order: number;
  active?: boolean;
}

export interface NavFolder {
  title: string;
  folderName: string;
  order: number;
  icon?: string;
  items: NavItem[];
}

export interface NavigationTree {
  rootItem: NavItem | null;
  folders: NavFolder[];
}

const DEFAULT_FOLDER_ICONS: Record<string, string> = {
  'mach-1-goi-ten': '🔍',
  'mach-2-xay-nen-tang': '🧱',
  'mach-3-hanh-dong-nho': '⚡',
  'mach-4-nhan-ra-gia-tri': '💎',
  'mach-5-thanh-duong-the-tuc': '🏛️',
};

export function withBase(urlPath: string, lang: Lang = 'vi'): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  let cleanPath = urlPath.startsWith('/') ? urlPath.slice(1) : urlPath;

  if (lang === 'en') {
    if (!cleanPath || cleanPath === 'index' || cleanPath === 'en') {
      return `${cleanBase}en`;
    }
    if (cleanPath.startsWith('en/')) {
      return `${cleanBase}${cleanPath}`;
    }
    return `${cleanBase}en/${cleanPath}`;
  }

  // lang === 'vi'
  if (cleanPath.startsWith('en/')) {
    cleanPath = cleanPath.replace(/^en\//, '');
  } else if (cleanPath === 'en') {
    cleanPath = '';
  }

  if (!cleanPath || cleanPath === 'index') return cleanBase;
  return `${cleanBase}${cleanPath}`;
}

export async function getNavigationTree(lang: Lang = 'vi', currentSlug?: string): Promise<NavigationTree> {
  const collectionName = lang === 'en' ? 'endogenism-en' : 'endogenism';
  const contentDir = lang === 'en' ? './endogenism-en' : './endogenism';

  const allEntries = await getCollection(collectionName as any);

  // Read root _meta.json
  const rootMetaPath = path.resolve(`${contentDir}/_meta.json`);
  let rootMeta: any = { order: {} };
  if (fs.existsSync(rootMetaPath)) {
    try {
      rootMeta = JSON.parse(fs.readFileSync(rootMetaPath, 'utf-8'));
    } catch (e) {
      console.error(`Error parsing root _meta.json for ${lang}`, e);
    }
  }

  const rootOrder = rootMeta.order || {};

  // Group entries by parent directory
  const rootItems: any[] = [];
  const folderEntriesMap: Record<string, any[]> = {};

  allEntries.forEach((entry: any) => {
    const parts = entry.id.split('/');
    if (parts.length === 1) {
      rootItems.push(entry);
    } else {
      const folderName = parts[0];
      if (!folderEntriesMap[folderName]) {
        folderEntriesMap[folderName] = [];
      }
      folderEntriesMap[folderName].push(entry);
    }
  });

  // 1. Process Root Item (index.md)
  let rootItem: NavItem | null = null;
  const indexEntry = rootItems.find(item => item.id === 'index');
  if (indexEntry) {
    rootItem = {
      title: indexEntry.data.title,
      slug: withBase('/', lang),
      order: rootOrder['index.md'] || 1,
      active: currentSlug === '' || currentSlug === 'index' || (lang === 'en' && currentSlug === 'en'),
    };
  }

  // 2. Process Folders
  const folders: NavFolder[] = [];
  const foldersToProcess = Object.keys(rootOrder).filter(key => key !== 'index.md');

  for (const folderName of foldersToProcess) {
    const folderPath = path.resolve(`${contentDir}/${folderName}`);
    if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
      continue;
    }

    // Read folder's _meta.json
    const folderMetaPath = path.join(folderPath, '_meta.json');
    let folderMeta: any = { title: folderName, order: {} };
    if (fs.existsSync(folderMetaPath)) {
      try {
        folderMeta = JSON.parse(fs.readFileSync(folderMetaPath, 'utf-8'));
      } catch (e) {
        console.error(`Error parsing _meta.json in ${folderName}`, e);
      }
    }

    const folderOrder = folderMeta.order || {};
    const entries = folderEntriesMap[folderName] || [];

    // Map entries to NavItems
    const items: NavItem[] = entries.map(entry => {
      const entryFilename = path.basename(entry.filePath || entry.id + '.md');
      const itemSlug = withBase(entry.id, lang);

      // Parse article number, e.g. "bai-001-..." -> 1
      const articleMatch = entryFilename.match(/^bai-(\d+)/i);
      const articleNumber = articleMatch ? parseInt(articleMatch[1], 10) : null;

      const prefix = lang === 'en' ? 'Article' : 'Bài';
      const displayTitle = articleNumber !== null
        ? `${prefix} ${articleNumber} - ${entry.data.title}`
        : entry.data.title;

      return {
        title: displayTitle,
        slug: itemSlug,
        order: folderOrder[entryFilename] || 999,
        active: currentSlug === entry.id || (lang === 'en' && (currentSlug === `en/${entry.id}` || currentSlug === entry.id)),
      };
    });

    // Sort items by folderMeta order
    items.sort((a, b) => a.order - b.order);

    // Parse folder number (e.g. "mach-1-goi-ten" -> 1)
    const folderMatch = folderName.match(/^mach-(\d+)/i);
    const folderNumber = folderMatch ? parseInt(folderMatch[1], 10) : null;
    const streamPrefix = lang === 'en' ? 'Stream' : 'Mạch';
    const folderTitle = folderNumber !== null
      ? `${streamPrefix} ${folderNumber}: ${folderMeta.title || folderName}`
      : (folderMeta.title || folderName);

    const folderIcon = folderMeta.icon || DEFAULT_FOLDER_ICONS[folderName] || '📁';

    folders.push({
      title: folderTitle,
      folderName,
      order: rootOrder[folderName] || 999,
      icon: folderIcon,
      items,
    });
  }

  // Sort folders by rootMeta order
  folders.sort((a, b) => a.order - b.order);

  return {
    rootItem,
    folders,
  };
}

export async function getFlatNavigation(lang: Lang = 'vi'): Promise<NavItem[]> {
  const tree = await getNavigationTree(lang);
  const flatList: NavItem[] = [];

  if (tree.rootItem) {
    flatList.push(tree.rootItem);
  }

  tree.folders.forEach(folder => {
    folder.items.forEach(item => {
      flatList.push(item);
    });
  });

  return flatList;
}

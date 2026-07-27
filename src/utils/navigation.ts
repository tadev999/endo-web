import fs from 'fs';
import path from 'path';
import { getCollection, type CollectionEntry } from 'astro:content';

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

// Helper to strip extension from file names
const stripExtension = (filename: string) => {
  return filename.replace(/\.[^/.]+$/, "");
};

const DEFAULT_FOLDER_ICONS: Record<string, string> = {
  'mach-1-goi-ten': '🔍',
  'mach-2-xay-nen-tang': '🧱',
  'mach-3-hanh-dong-nho': '⚡',
  'mach-4-nhan-ra-gia-tri': '💎',
  'mach-5-thanh-duong-the-tuc': '🏛️'
};

export function withBase(urlPath: string): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const cleanPath = urlPath.startsWith('/') ? urlPath.slice(1) : urlPath;
  if (!cleanPath || cleanPath === 'index') return cleanBase;
  return `${cleanBase}${cleanPath}`;
}

export async function getNavigationTree(currentSlug?: string): Promise<NavigationTree> {
  const allEntries = await getCollection('endogenism');
  
  // Read root _meta.json
  const rootMetaPath = path.resolve('./endogenism/_meta.json');
  let rootMeta: any = { order: {} };
  if (fs.existsSync(rootMetaPath)) {
    try {
      rootMeta = JSON.parse(fs.readFileSync(rootMetaPath, 'utf-8'));
    } catch (e) {
      console.error("Error parsing root _meta.json", e);
    }
  }

  const rootOrder = rootMeta.order || {};
  
  // Group entries by parent directory
  const rootItems: CollectionEntry<'endogenism'>[] = [];
  const folderEntriesMap: Record<string, CollectionEntry<'endogenism'>[]> = {};

  allEntries.forEach(entry => {
    // entry.id is like "index" or "mach-1-goi-ten/bai-001"
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
      slug: withBase('/'),
      order: rootOrder['index.md'] || 1,
      active: currentSlug === '' || currentSlug === 'index'
    };
  }

  // 2. Process Folders
  const folders: NavFolder[] = [];
  
  // Iterate through keys in rootMeta order, or read directories if not in order
  const foldersToProcess = Object.keys(rootOrder).filter(key => key !== 'index.md');
  
  for (const folderName of foldersToProcess) {
    const folderPath = path.resolve(`./endogenism/${folderName}`);
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
      // Find the filename matching this entry
      // entry.id is like "mach-1-goi-ten/bai-001"
      const entryFilename = path.basename(entry.filePath || entry.id + '.md');
      const itemSlug = withBase(entry.id);
      
      // Parse article number, e.g. "bai-001-..." -> 1
      const articleMatch = entryFilename.match(/^bai-(\d+)/i);
      const articleNumber = articleMatch ? parseInt(articleMatch[1], 10) : null;
      
      const displayTitle = articleNumber !== null
        ? `Bài ${articleNumber} - ${entry.data.title}`
        : entry.data.title;
      
      return {
        title: displayTitle,
        slug: itemSlug,
        order: folderOrder[entryFilename] || 999,
        active: currentSlug === entry.id
      };
    });
    
    // Sort items by folderMeta order
    items.sort((a, b) => a.order - b.order);
    
    // Parse folder number (e.g. "mach-1-goi-ten" -> 1)
    const folderMatch = folderName.match(/^mach-(\d+)/i);
    const folderNumber = folderMatch ? parseInt(folderMatch[1], 10) : null;
    const folderTitle = folderNumber !== null
      ? `Mạch ${folderNumber}: ${folderMeta.title || folderName}`
      : (folderMeta.title || folderName);

    const folderIcon = folderMeta.icon || DEFAULT_FOLDER_ICONS[folderName] || '📁';

    folders.push({
      title: folderTitle,
      folderName,
      order: rootOrder[folderName] || 999,
      icon: folderIcon,
      items
    });
  }

  // Sort folders by rootMeta order
  folders.sort((a, b) => a.order - b.order);

  return {
    rootItem,
    folders
  };
}

export async function getFlatNavigation(): Promise<NavItem[]> {
  const tree = await getNavigationTree();
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

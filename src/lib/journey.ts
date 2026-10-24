import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type Post = CollectionEntry<'posts'>;

export interface Mach {
  id: string;
  n: number;
  stage: string;
  title: string;
  range: string;
  question: string;
  desc: string;
  icon: string;
  color: string;
}

export const MACH_VI: readonly Mach[] = [
  {
    id: 'mach-1-goi-ten',
    n: 1,
    stage: 'Nhận Ra',
    title: 'Gọi Tên',
    range: 'Bài 1–30',
    question: 'Điều gì đang thực sự xảy ra trong tôi?',
    desc: 'Gọi tên nỗi đau. Phá vỡ ảo tưởng. Một không gian an toàn để thừa nhận những gì đang thực sự xảy ra — không phán xét, không vội sửa.',
    icon: '🌫️',
    color: '#2A9D8F',
  },
  {
    id: 'mach-2-xay-nen-tang',
    n: 2,
    stage: 'Hiểu',
    title: 'Xây Nền Tảng',
    range: 'Bài 31–60',
    question: 'Tôi đang hành động từ đâu — từ nỗi sợ hay từ nền tảng?',
    desc: 'Xây nền móng tư duy. Bắt đầu phân biệt giá trị vô điều kiện với giá trị có điều kiện — và vì sao sự khác biệt đó thay đổi tất cả.',
    icon: '🪵',
    color: '#E58062',
  },
  {
    id: 'mach-3-hanh-dong-nho',
    n: 3,
    stage: 'Thực Hành',
    title: 'Hành Động Nhỏ',
    range: 'Bài 61–90',
    question: 'Hành động nhỏ nào hôm nay là biểu hiện của thứ tôi thực sự là?',
    desc: 'Những hành động nhỏ như biểu hiện của giá trị đã có — không phải để chứng minh, mà để nhận ra. Góc nhìn được sống, không chỉ được nghĩ.',
    icon: '🌱',
    color: '#FFD166',
  },
  {
    id: 'mach-4-nhan-ra-gia-tri',
    n: 4,
    stage: 'Tìm Lại Bản Thân',
    title: 'Nhận Ra Giá Trị',
    range: 'Bài 91–120',
    question: 'Tôi là ai khi không có ai nhìn, và tôi có tin vào người đó không?',
    desc: 'Định hình lại hệ giá trị. Xây bản sắc từ bên trong — không phải từ vai trò xã hội hay thành tích.',
    icon: '☀️',
    color: '#E76F51',
  },
  {
    id: 'mach-5-thanh-duong-the-tuc',
    n: 5,
    stage: 'Kết Nối',
    title: 'Thánh Đường Thế Tục',
    range: 'Bài 121–150',
    question: 'Tôi muốn trở thành gương loại nào cho người đang ở bên cạnh tôi?',
    desc: 'Cộng đồng như gương, không phải gậy chống. Nơi người ta đến không để được cứu, mà để nhìn thấy chính mình.',
    icon: '🕯️',
    color: '#48B6A7',
  },
] as const;

export const MACH_EN: readonly Mach[] = [
  {
    id: 'mach-1-goi-ten',
    n: 1,
    stage: 'Awareness',
    title: 'Naming',
    range: 'Articles 1–30',
    question: 'What is truly happening inside me?',
    desc: 'Name the pain. Shatter the illusion. A safe space to acknowledge what is truly happening — without judgment, without rushing to fix.',
    icon: '🌫️',
    color: '#2A9D8F',
  },
  {
    id: 'mach-2-xay-nen-tang',
    n: 2,
    stage: 'Understanding',
    title: 'Building Foundations',
    range: 'Articles 31–60',
    question: 'Where am I acting from — from fear or from a foundation?',
    desc: 'Build mental bedrock. Begin distinguishing unconditional worth from conditional worth — and why that difference changes everything.',
    icon: '🪵',
    color: '#E58062',
  },
  {
    id: 'mach-3-hanh-dong-nho',
    n: 3,
    stage: 'Practice',
    title: 'Small Actions',
    range: 'Articles 61–90',
    question: 'What small action today expresses who I truly am?',
    desc: 'Small actions as expressions of existing worth — not to prove anything, but to realize it. A perspective lived, not merely thought.',
    icon: '🌱',
    color: '#FFD166',
  },
  {
    id: 'mach-4-nhan-ra-gia-tri',
    n: 4,
    stage: 'Rediscovery',
    title: 'Recognizing Value',
    range: 'Articles 91–120',
    question: 'Who am I when no one is watching, and do I believe in that person?',
    desc: 'Reshape your value system. Build inner identity — not from social roles or external achievements.',
    icon: '☀️',
    color: '#E76F51',
  },
  {
    id: 'mach-5-thanh-duong-the-tuc',
    n: 5,
    stage: 'Connection',
    title: 'Secular Sanctuary',
    range: 'Articles 121–150',
    question: 'What kind of mirror do I want to be for the person standing beside me?',
    desc: 'Community as a mirror, not a crutch. A place people come not to be saved, but to see themselves.',
    icon: '🕯️',
    color: '#48B6A7',
  },
] as const;

export const MACH = MACH_VI;

export function getMachList(lang: Lang = 'vi'): readonly Mach[] {
  return lang === 'en' ? MACH_EN : MACH_VI;
}

export function langOf(postOrId: Post | string): Lang {
  const id = typeof postOrId === 'string' ? postOrId : postOrId.id;
  return id.startsWith('en/') ? 'en' : 'vi';
}

export function slugOf(postOrId: Post | string): string {
  const id = typeof postOrId === 'string' ? postOrId : postOrId.id;
  return id.replace(/^(vi|en)\//, '').replace(/\.md$/, '');
}

export function machOf(idOrSlug: string, lang: Lang = 'vi'): Mach | undefined {
  const list = getMachList(lang);
  const clean = slugOf(idOrSlug);
  return list.find((m) => clean.startsWith(m.id + '/') || clean === m.id);
}

export function cleanTitle(post: Post): string {
  return (post.data.title || post.id).replace(/^#+\s*/, '').trim();
}

// Số thứ tự trong hành trình: bai-012 → 12, kt (lời kết) → 151
export function postNumber(post: Post): number {
  const m = post.id.match(/bai-(\d+)/);
  if (m) return parseInt(m[1], 10);
  return post.id.endsWith('/kt') ? 151 : 0;
}

export function readingMinutes(post: Post): number {
  const words = (post.body || '').split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 220));
}

// Câu hỏi tự vấn: câu hỏi in nghiêng cuối cùng trong bài
export function reflectionQuestion(post: Post, lang?: Lang): string {
  const currentLang = lang || langOf(post);
  const body = (post.body || '').replace(/\*Bài tiếp theo[^\n]*/g, '').replace(/\*Next article[^\n]*/g, '');
  const qs = [...body.matchAll(/\*([^*\n]{8,220}\?)\*/g)].map((m) =>
    m[1].replace(/^["“]|["”]$/g, '').trim()
  );
  const fallback = currentLang === 'en'
    ? 'What is truly happening inside me right now?'
    : 'Điều gì đang thực sự xảy ra trong mình lúc này?';
  return qs.at(-1) || machOf(post.id, currentLang)?.question || fallback;
}

export async function getJourney(lang: Lang = 'vi'): Promise<Post[]> {
  const posts = await getCollection(
    'posts',
    (p) => p.id.startsWith(`${lang}/`) && p.id !== lang && !p.id.endsWith('index')
  );
  return posts.sort((a, b) => postNumber(a) - postNumber(b));
}

// Dữ liệu gọn để truyền xuống client (viên sỏi ngày, rút thẻ, tiến trình)
export function toLite(post: Post, lang?: Lang) {
  const currentLang = lang || langOf(post);
  const mach = machOf(post.id, currentLang);
  return {
    id: slugOf(post),
    n: postNumber(post),
    title: cleanTitle(post),
    q: reflectionQuestion(post, currentLang),
    min: readingMinutes(post),
    mach: mach?.n ?? 0,
    color: mach?.color ?? '#2A9D8F',
    lang: currentLang,
  };
}

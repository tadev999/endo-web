export type Lang = 'vi' | 'en';

export const UI = {
  vi: {
    siteTitle: 'Endogenism — Chủ Nghĩa Nội Sinh',
    siteTagline: 'Trở về với chính mình',
    siteDescription: 'Thứ bạn đang tìm kiếm không nằm ở phía trước bạn. Nó đã có trong bạn — đang chờ được tin vào. 150 bài viết, 5 mạch, một hành trình từ bên trong ra.',
    navAbout: 'Nội Sinh là gì?',
    nav5Mach: '5 Mạch',
    navToc: 'Mục lục 150 bài',
    openAnam: 'Mở Anam',
    menuOpen: 'Mở menu',
    heroTag: 'Chào bạn',
    heroTitle1: 'Thứ bạn đang tìm kiếm không nằm ở phía trước bạn.',
    heroTitle2: 'Nó đã có trong bạn — đang chờ được tin vào.',
    heroDesc: '150 bài viết chậm rãi cho những ai đang mệt vì phải chứng minh mình đủ tốt. Không thuyết giảng, không công thức — chỉ những câu hỏi để hỏi cùng nhau.',
    heroStart: 'Bắt đầu từ Bài 1',
    heroAbout: 'Nội Sinh là gì?',
    todayPebble: 'Bài của hôm nay',
    twoValuesTitle: 'Hai loại giá trị',
    twoValuesTag: 'Điểm khởi đầu',
    twoValuesDesc: 'Thành tích, kỹ năng, sự phát triển đều có giá trị. Nhưng chúng là biểu hiện của giá trị — không phải nguồn gốc của nó.',
    readTime: 'phút đọc',
    prevArticle: 'Bài trước',
    nextArticle: 'Bài tiếp theo',
    backTo5Mach: '← 5 Mạch',
    backToToc: 'Mục lục 150 bài',
    backToHome: 'Về Trang Chủ',
    searchPlaceholder: 'Tìm: cô đơn, so sánh, kiệt sức…',
    noResult: 'Chưa có bài nào khớp — thử một từ khác nhé.',
    articlePrefix: 'Bài',
    machPrefix: 'Mạch',
    conclusion: 'Kết',
    doneProgress: (done: number, total: number) => `Bạn đã đọc ${done}/${total} bài trong mạch này.`,
    overallProgress: (done: number) => `Bạn đã đọc ${done} bài.`,
    footerDesc: 'Không phải hệ tư tưởng, không phải tôn giáo, cũng không phải self-help. Chỉ là một lăng kính — và một thói quen sống — cho những ai đang mệt vì phải chứng minh mình đủ tốt.',
    footerQuote: '"Tài liệu này là la bàn — không phải luật lệ. Tất cả đều chỉ về cùng một hướng: từ bên trong ra."',
    footerMachTitle: '5 Mạch Tư Tưởng',
    footerEcosystem: 'Hệ Sinh Thái',
    footerCopyright: '© 2026 Endogenism — Chủ nghĩa Nội sinh.',
    practiceWithAnam: 'Thực hành cùng Anam',
    breatheTogether: 'Dừng lại thở cùng nhau',
    listenSoundscape: 'Âm thanh tĩnh lặng',
    drawCard: 'Rút thẻ chiêm nghiệm',
    cardSubtitle: 'Để lại vội vã, rút một góc nhìn cho ngày hôm nay.',
    dailyPebbleSubtitle: 'Một viên sỏi nhẹ nhàng cho ngày hôm nay.',
    twoValues: [
      {
        name: 'Giá trị có điều kiện',
        tone: 'text-zen-muted',
        lines: [
          'Tăng khi bạn làm tốt, giảm khi bạn thất bại',
          'Phụ thuộc thành tích, lượt thích, vai trò',
          'Hành động để kiếm → từ nỗi sợ thiếu hụt',
        ],
      },
      {
        name: 'Giá trị vô điều kiện',
        tone: 'text-zen-emerald',
        lines: [
          'Không tăng khi thành công, không giảm khi vấp ngã',
          'Đã có đó — trước khi bạn chứng minh bất cứ điều gì',
          'Hành động để biểu hiện → từ nền tảng vững chắc',
        ],
      },
    ],
    closingQuote: 'Endogenism không dạy bạn ngừng phát triển. Nó thay đổi nơi bạn đứng khi phát triển.',
    phrasesTitle: 'Ngôn Ngữ Của Góc Nhìn Này',
    phrases: [
      'Bạn đủ rồi',
      'Thông tin, không phải định nghĩa',
      'Từ nền tảng, không phải từ nỗi sợ',
      'Khoảnh khắc thật',
      'Gương, không phải gậy chống',
      'Biểu hiện, không phải chứng minh',
    ],
  },
  en: {
    siteTitle: 'Endogenism — Returning to Yourself',
    siteTagline: 'Return to yourself',
    siteDescription: 'What you are seeking does not lie ahead of you. It is already within you — waiting to be trusted. 150 contemplative reflections, 5 streams, a journey from the inside out.',
    navAbout: 'What is Endogenism?',
    nav5Mach: '5 Streams',
    navToc: '150 Articles Table of Contents',
    openAnam: 'Open Anam',
    menuOpen: 'Open menu',
    heroTag: 'Welcome',
    heroTitle1: 'What you are seeking does not lie ahead of you.',
    heroTitle2: 'It is already within you — waiting to be trusted.',
    heroDesc: '150 contemplative reflections for those weary of proving they are enough. No preachings, no rigid formulas — just honest questions to ask together.',
    heroStart: 'Begin with Article 1',
    heroAbout: 'What is Endogenism?',
    todayPebble: "Today's Pebble",
    twoValuesTitle: 'Two Kinds of Value',
    twoValuesTag: 'Starting Point',
    twoValuesDesc: 'Achievements, skills, and progress all hold value. But they are expressions of worth — not the source of it.',
    readTime: 'min read',
    prevArticle: 'Previous Article',
    nextArticle: 'Next Article',
    backTo5Mach: '← 5 Streams',
    backToToc: 'Table of Contents',
    backToHome: 'Home',
    searchPlaceholder: 'Search: burnout, comparison, stillness…',
    noResult: 'No matching articles found — try another term.',
    articlePrefix: 'Article',
    machPrefix: 'Stream',
    conclusion: 'Epilogue',
    doneProgress: (done: number, total: number) => `You have read ${done}/${total} articles in this stream.`,
    overallProgress: (done: number) => `You have read ${done} articles.`,
    footerDesc: 'Not an ideology, not a religion, nor typical self-help. Simply a lens — and a quiet way of living — for those tired of proving their worth.',
    footerQuote: '"This text is a compass — not a doctrine. All points lead in the same direction: from the inside out."',
    footerMachTitle: '5 Core Streams',
    footerEcosystem: 'Ecosystem',
    footerCopyright: '© 2026 Endogenism — Returning to Yourself.',
    practiceWithAnam: 'Practice with Anam',
    breatheTogether: 'Pause and breathe',
    listenSoundscape: 'Serene soundscape',
    drawCard: 'Mindful card draw',
    cardSubtitle: 'Step away from the rush; draw a reflection for today.',
    dailyPebbleSubtitle: 'A gentle pebble for your day.',
    twoValues: [
      {
        name: 'Conditional Worth',
        tone: 'text-zen-muted',
        lines: [
          'Rises when you succeed, drops when you stumble',
          'Tied to achievements, likes, and social roles',
          'Acting to earn → rooted in the fear of deficiency',
        ],
      },
      {
        name: 'Unconditional Worth',
        tone: 'text-zen-emerald',
        lines: [
          'Does not increase with praise, does not diminish with mistakes',
          'Already intact — before you ever set out to prove a thing',
          'Acting to express → rooted in quiet, unshakable ground',
        ],
      },
    ],
    closingQuote: 'Endogenism does not ask you to stop growing. It changes where you stand while you grow.',
    phrasesTitle: 'Language of This Perspective',
    phrases: [
      'You are enough',
      'Information, not definition',
      'From a foundation, not from fear',
      'Authentic moments',
      'A mirror, not a crutch',
      'Expression, not proof',
    ],
  },
} as const;

export function getT(lang: Lang = 'vi') {
  return UI[lang] || UI.vi;
}

export function prefixPath(path: string, lang: Lang = 'vi'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') {
    if (clean === '/') return '/en';
    if (clean.startsWith('/en/')) return clean;
    if (clean === '/en') return '/en';
    return `/en${clean}`;
  }
  // vi
  if (clean === '/en') return '/';
  if (clean.startsWith('/en/')) {
    const stripped = clean.replace(/^\/en/, '');
    return stripped === '' ? '/' : stripped;
  }
  return clean;
}

export function switchLangUrl(currentPath: string, targetLang: Lang): string {
  let clean = currentPath.split('?')[0].split('#')[0];
  if (!clean.startsWith('/')) clean = `/${clean}`;

  if (targetLang === 'en') {
    if (clean === '/') return '/en';
    if (clean.startsWith('/en')) return clean;
    return `/en${clean}`;
  } else {
    if (clean === '/en') return '/';
    if (clean.startsWith('/en/')) {
      const stripped = clean.replace(/^\/en/, '');
      return stripped === '' ? '/' : stripped;
    }
    return clean;
  }
}

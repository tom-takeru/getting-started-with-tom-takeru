export const LOCALES = ['en', 'ja'] as const;

export type Locale = (typeof LOCALES)[number];

export type Messages = (typeof MESSAGES)['en'];

export const DEFAULT_LOCALE: Locale = 'en';
export const REQUEST_LOCALE_HEADER = 'x-getting-started-locale';

export function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function resolveLocale(
  requestedLocale: string | null | undefined,
  browserLanguage?: string,
): Locale {
  if (isLocale(requestedLocale)) {
    return requestedLocale;
  }

  for (const language of browserLanguage?.split(',') ?? []) {
    const languageTag = language.split(';')[0]?.trim().toLowerCase();
    const baseLanguage = languageTag?.split('-')[0];

    if (isLocale(baseLanguage)) {
      return baseLanguage;
    }
  }

  return DEFAULT_LOCALE;
}

export const MESSAGES = {
  en: {
    localeName: 'English',
    alternateLocaleName: '日本語',
    badge: 'Getting Started with tom-takeru',
    greeting: "Hi there! I'm tom-takeru",
    heroTypingAria: 'tom-takeru introduction',
    heroTypingWords: [
      'I build practical web products',
      'I prototype, ship, and improve',
      'I make tools for everyday use',
    ],
    heroDescription:
      'A concise introduction to the products I build, the stack I use, and the teams I work with.',
    startExploring: 'Start Exploring',
    sections: {
      about: {
        title: 'About the Developer',
        introPrefix: "I'm tom-takeru. Based in",
        city: 'Japan',
        description:
          'I design and build web services that turn everyday ideas into useful products. I care about fast iteration, clear user flows, and systems that can keep improving after launch.',
        focusLabel: 'Focus:',
        focus:
          'shipping useful web products from early prototype to maintainable service.',
      },
      techStack: {
        title: 'Tech Stack Overview',
        description:
          'Technologies I use across product interfaces, APIs, and maintainable web services.',
        note: 'I focus on delivering value and impactful solutions.',
      },
      projects: {
        title: 'Featured Projects',
        description:
          'Habitat Hub products and prototypes focused on practical tools, everyday communication, and online play.',
        repositoryLabel: 'Repository:',
        items: [
          {
            name: 'Online Board Game Prototyping - KIBAKO',
            description:
              'A browser-based prototype workspace for quickly trying, sharing, and refining board game ideas online.',
          },
          {
            name: 'Oya no Kotoba',
            description:
              'A service for preserving family words, memories, and small moments so they can be revisited over time.',
          },
          {
            name: 'Memoru',
            description:
              'A lightweight memo tool for capturing thoughts quickly before they disappear from the flow of work.',
          },
        ],
      },
      articles: {
        title: 'Technical Articles',
        description:
          'Technical notes, implementation writeups, and learning logs from product development.',
        readArticles: 'Read articles',
        items: [
          {
            description:
              'Japanese writeups on design decisions, operations, security, and lessons from building products.',
          },
          {
            description:
              'English blog posts and community articles published on Forem.',
          },
        ],
      },
      links: {
        title: 'Connect & Follow',
      },
      contact: {
        title: 'Ready to Connect?',
        description:
          "Let's discuss product ideas, web development, or collaboration opportunities.",
        prompt: 'Feel free to reach out via email:',
      },
    },
    buyMeCoffee: 'Buy Me a Coffee',
  },
  ja: {
    localeName: '日本語',
    alternateLocaleName: 'English',
    badge: 'Getting Started with tom-takeru',
    greeting: 'こんにちは、tom-takeru です',
    heroTypingAria: 'tom-takeru の紹介',
    heroTypingWords: [
      '実用的な Web プロダクトを作っています',
      '試作して、届けて、改善します',
      '日常で使えるツールを形にします',
    ],
    heroDescription:
      '作っているプロダクト、使っている技術、関われる領域を短くまとめた自己紹介です。',
    startExploring: '見てみる',
    sections: {
      about: {
        title: '開発者について',
        introPrefix: 'tom-takeru です。拠点は',
        city: '日本',
        description:
          '日常のアイデアを役に立つプロダクトに変える Web サービスを設計・開発しています。速い試行錯誤、わかりやすいユーザーフロー、リリース後も改善し続けられる仕組みを大切にしています。',
        focusLabel: '注力領域:',
        focus:
          '初期プロトタイプから保守しやすいサービスまで、役に立つ Web プロダクトを届けること。',
      },
      techStack: {
        title: '技術スタック',
        description:
          'プロダクトの UI、API、保守しやすい Web サービスを作るために使っている技術です。',
        note: '価値が伝わり、実際に使われる解決策を届けることを重視しています。',
      },
      projects: {
        title: '主なプロジェクト',
        description:
          'Habitat Hub のプロダクトとプロトタイプです。実用的なツール、日常のコミュニケーション、オンラインでの遊びに焦点を当てています。',
        repositoryLabel: 'リポジトリ:',
        items: [
          {
            name: 'オンラインボドゲ試作 - KIBAKO',
            description:
              'ボードゲームのアイデアをブラウザ上ですばやく試し、共有し、改善するためのプロトタイプ用ワークスペースです。',
          },
          {
            name: 'おやのことば',
            description:
              '家族の言葉、記憶、小さな出来事を残し、時間が経っても振り返れるようにするサービスです。',
          },
          {
            name: 'メモる',
            description:
              '仕事や作業の流れの中で消えてしまう前に、思いつきをすばやく残すための軽量メモツールです。',
          },
        ],
      },
      articles: {
        title: '技術記事',
        description: 'プロダクト開発から得た技術メモ、実装記録、学習ログです。',
        readArticles: '記事を読む',
        items: [
          {
            description:
              'Qiita で公開している日本語の技術記事です。プロダクト開発で得た設計判断、運用、セキュリティ、実装上の学びを整理しています。',
          },
          {
            description:
              'Forem で公開している英語のブログ記事とコミュニティ記事です。',
          },
        ],
      },
      links: {
        title: 'リンク',
      },
      contact: {
        title: '連絡先',
        description:
          'プロダクトのアイデア、Web 開発、協業の相談などがあればお話ししましょう。',
        prompt: 'メールでお気軽にご連絡ください:',
      },
    },
    buyMeCoffee: 'Buy Me a Coffee',
  },
} as const;

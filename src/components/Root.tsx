'use client';

import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import { FaDev, FaLinkedin } from 'react-icons/fa';
import {
  SiBuymeacoffee,
  SiExpress,
  SiGin,
  SiGithub,
  SiNextdotjs,
  SiQiita,
  SiReact,
  SiRubyonrails,
  SiTypescript,
  SiX,
} from 'react-icons/si';
import CustomLink from '@/components/CustomLink';
import HeroTyping from '@/components/HeroTyping';
import { LOCALES, type Locale, MESSAGES, resolveLocale } from '@/i18n';

const ABOUT_EMOJI = '🇯🇵';

const SKILLS = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Ruby on Rails', icon: SiRubyonrails },
  { name: 'Express', icon: SiExpress },
  { name: 'Gin', icon: SiGin },
];

type ProjectLink = {
  emoji: string;
  aria: string;
  href: string;
  disabled: boolean;
  repos: {
    name: string;
    url: string;
    icon: IconType;
    label: string;
  }[];
};

const PROJECT_LINKS: ProjectLink[] = [
  {
    emoji: '🎲',
    aria: 'game die',
    href: 'https://kibako.habitat-hub.com/ja',
    disabled: false,
    repos: [],
  },
  {
    emoji: '🌱',
    aria: 'seedling',
    href: 'https://oyanokotoba.habitat-hub.com/',
    disabled: false,
    repos: [],
  },
  {
    emoji: '📝',
    aria: 'memo',
    href: 'https://quicklet.habitat-hub.com/',
    disabled: false,
    repos: [],
  },
];

type ArticleLink = {
  name: string;
  url: string;
  emoji: string;
  aria: string;
  icon?: IconType;
  logoSource?: string;
};

const ARTICLE_LINKS: ArticleLink[] = [
  {
    name: 'Qiita',
    url: 'https://qiita.com/tom-takeru',
    emoji: '📝',
    aria: 'memo',
    icon: SiQiita,
  },
  {
    name: 'Forem',
    url: 'https://forem.com/tom-takeru',
    emoji: '🌐',
    aria: 'community',
    icon: FaDev,
  },
];

type SocialLink = {
  name: string;
  url: string;
  icon: IconType;
};

const LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/tom-takeru',
    icon: SiGithub,
  },
  {
    name: 'X (formerly Twitter)',
    url: 'https://x.com/tom__takeru',
    icon: SiX,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tom-takeru/',
    icon: FaLinkedin,
  },
  {
    name: 'Forem Profile',
    url: 'https://forem.com/tom-takeru',
    icon: FaDev,
  },
  {
    name: 'Qiita Profile',
    url: 'https://qiita.com/tom-takeru',
    icon: SiQiita,
  },
];

const CONTACT = {
  email: 'tom.2461.ty@gmail.com',
  mailto: 'mailto:tom.2461.ty@gmail.com',
  emoji: '✉️',
  aria: 'email',
};

type RootProps = {
  initialLocale: Locale;
};

export default function Root({ initialLocale }: RootProps) {
  const [locale, setLocale] = useState(initialLocale);
  const messages = MESSAGES[locale];

  useEffect(() => {
    const url = new URL(window.location.href);
    const nextLocale = resolveLocale(
      url.searchParams.get('lang'),
      navigator.language,
    );

    setLocale(nextLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLocale);
    window.history.replaceState(null, '', url);
  };

  const handleStartExploring = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 text-gray-800 font-sans'>
      <div className='fixed top-4 right-4 z-20 flex rounded-lg border border-white/60 bg-white/80 p-1 text-sm shadow-sm backdrop-blur'>
        {LOCALES.map(localeOption => {
          const isActive = localeOption === locale;

          return (
            <button
              key={localeOption}
              type='button'
              onClick={() => handleLocaleChange(localeOption)}
              className={`rounded-md px-3 py-2 font-medium transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-indigo-50'
              }`}
              aria-pressed={isActive}
            >
              {MESSAGES[localeOption].localeName}
            </button>
          );
        })}
      </div>

      <section className='flex items-center justify-center h-svh bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 text-gray-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5' />
        <div className='text-center p-8 relative z-10'>
          <div className='mb-6'>
            <span className='inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4'>
              🚀 {messages.badge}
            </span>
          </div>
          <h1 className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold font-console tracking-wider whitespace-nowrap mb-4'>
            {messages.greeting}
          </h1>
          <HeroTyping
            ariaLabel={messages.heroTypingAria}
            words={messages.heroTypingWords}
          />
          <p className='mt-6 text-lg text-gray-600 max-w-4xl mx-auto text-balance'>
            {messages.heroDescription}
          </p>
          <div className='mt-8 flex justify-center'>
            <button
              type='button'
              onClick={handleStartExploring}
              className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg'
            >
              {messages.startExploring} →
            </button>
          </div>
        </div>
      </section>

      <section id='about-section' className='py-16 px-4 max-w-4xl mx-auto'>
        <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12'>
          <div className='flex items-center mb-6'>
            <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              01
            </div>
            <h2 className='text-3xl font-bold'>
              {messages.sections.about.title}
              <span role='img' aria-label='person' className='ml-2'>
                🧑‍💻
              </span>
            </h2>
          </div>
          <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg'>
            <p className='leading-relaxed text-gray-700'>
              {messages.sections.about.introPrefix}{' '}
              {messages.sections.about.city}
              <span role='img' aria-label='tokyo tower' className='mx-1'>
                {ABOUT_EMOJI}
              </span>
              , {messages.sections.about.description}
            </p>
          </div>
          <div className='mt-6 text-sm text-gray-500'>
            💡 <strong>{messages.sections.about.focusLabel}</strong>{' '}
            {messages.sections.about.focus}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-4xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <div className='flex items-center justify-center mb-6'>
              <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
                02
              </div>
              <h2 className='text-3xl font-bold'>
                {messages.sections.techStack.title}
                <span role='img' aria-label='toolbox' className='ml-2'>
                  🧰
                </span>
              </h2>
            </div>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              {messages.sections.techStack.description}
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
            {SKILLS.map((skill, index) => (
              <div
                key={skill.name}
                className='group p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200 text-center relative overflow-hidden'
              >
                <div className='absolute top-2 right-2 text-xs text-gray-400 font-mono'>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className='mb-4 flex justify-center'>
                  <skill.icon
                    className='w-8 h-8 group-hover:scale-110 transition-transform'
                    aria-label={skill.name}
                  />
                </div>
                <span className='text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors'>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <div className='mt-8 text-center'>
            <div className='inline-flex items-center px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800'>
              📋{' '}
              <span className='ml-2'>{messages.sections.techStack.note}</span>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 px-4 max-w-5xl mx-auto'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-6'>
            <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              03
            </div>
            <h2 className='text-3xl font-bold'>
              {messages.sections.projects.title}
              <span role='img' aria-label='rocket' className='ml-2'>
                🚀
              </span>
            </h2>
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            {messages.sections.projects.description}
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
          {PROJECT_LINKS.map((projectLink, index) => {
            const project = messages.sections.projects.items[index];

            return (
              <div
                key={project.name}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-indigo-200 ${projectLink.disabled ? 'opacity-60' : ''} relative overflow-hidden`}
              >
                <div className='absolute top-4 right-4 text-xs text-gray-400 font-mono'>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className='mb-4'>
                  {projectLink.href && !projectLink.disabled ? (
                    <CustomLink
                      href={projectLink.href}
                      openInNewTab
                      className='font-semibold text-lg text-indigo-600 hover:text-indigo-800 transition-colors'
                    >
                      {project.name}
                      <span
                        role='img'
                        aria-label={projectLink.aria}
                        className='ml-2'
                      >
                        {projectLink.emoji}
                      </span>
                    </CustomLink>
                  ) : (
                    <span className='font-semibold text-lg text-gray-400 cursor-not-allowed'>
                      {project.name}
                      <span
                        role='img'
                        aria-label={projectLink.aria}
                        className='ml-2'
                      >
                        {projectLink.emoji}
                      </span>
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm text-gray-600 flex-grow ${
                    projectLink.disabled ? 'text-gray-400' : ''
                  }`}
                >
                  {project.description}
                </p>
                {projectLink.repos.length > 0 && (
                  <div className='mt-4 pt-4 border-t border-gray-100'>
                    <div className='text-xs text-gray-500 mb-2'>
                      📂 {messages.sections.projects.repositoryLabel}
                    </div>
                    <ul className='space-y-2'>
                      {projectLink.repos.map(repo => (
                        <li key={repo.url}>
                          <CustomLink
                            href={repo.url}
                            openInNewTab
                            className='text-sm text-indigo-600 hover:text-indigo-800 flex items-center space-x-2 transition-colors'
                          >
                            <repo.icon
                              className='w-4 h-4'
                              aria-label={repo.label}
                            />
                            <span>{repo.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className='py-16 px-4 max-w-4xl mx-auto bg-gray-50'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-6'>
            <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              04
            </div>
            <h2 className='text-3xl font-bold'>
              {messages.sections.articles.title}
              <span role='img' aria-label='books' className='ml-2'>
                📚
              </span>
            </h2>
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            {messages.sections.articles.description}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {ARTICLE_LINKS.map((articleLink, index) => {
            const article = messages.sections.articles.items[index];

            return (
              <div
                key={articleLink.url}
                className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:border-indigo-200 relative'
              >
                <div className='absolute top-4 right-4 text-xs text-gray-400 font-mono'>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 p-3 bg-indigo-50 rounded-lg'>
                    {articleLink.icon ? (
                      <articleLink.icon
                        className='w-6 h-6 text-indigo-600'
                        aria-label={articleLink.name}
                      />
                    ) : articleLink.logoSource ? (
                      <img
                        src={articleLink.logoSource}
                        alt={articleLink.name}
                        className='w-6 h-6'
                      />
                    ) : null}
                  </div>
                  <div className='flex-grow'>
                    <CustomLink
                      href={articleLink.url}
                      openInNewTab
                      className='font-semibold text-lg text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center'
                    >
                      {articleLink.name}
                      <span
                        role='img'
                        aria-label={articleLink.aria}
                        className='ml-2'
                      >
                        {articleLink.emoji}
                      </span>
                    </CustomLink>
                    <p className='mt-2 text-gray-600'>{article.description}</p>
                    <div className='mt-3 text-sm text-indigo-600'>
                      📖 {messages.sections.articles.readArticles} →
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <div className='flex items-center justify-center mb-8'>
            <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              05
            </div>
            <h2 className='text-3xl font-bold'>
              {messages.sections.links.title}
              <span role='img' aria-label='link' className='ml-2'>
                🔗
              </span>
            </h2>
          </div>
          <div className='flex justify-center items-center gap-6'>
            {LINKS.map(link => (
              <CustomLink
                key={link.url}
                href={link.url}
                openInNewTab
                showIcon={false}
                className='group hover:scale-110 transition-transform duration-300'
                aria-label={link.name}
              >
                <link.icon
                  className='w-8 h-8 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300'
                  aria-hidden='true'
                />
              </CustomLink>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-10' />
        <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
          <div className='flex items-center justify-center mb-6'>
            <div className='bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              06
            </div>
            <h2 className='text-3xl font-bold'>
              {messages.sections.contact.title}
              <span role='img' aria-label='mail' className='ml-2'>
                📬
              </span>
            </h2>
          </div>
          <p className='text-xl mb-8 text-indigo-100 max-w-2xl mx-auto'>
            {messages.sections.contact.description}
          </p>
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20'>
            <p className='mb-6 text-indigo-100'>
              {messages.sections.contact.prompt}
            </p>
            <CustomLink
              href={CONTACT.mailto}
              openInNewTab={false}
              className='inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors shadow-lg'
            >
              <span role='img' aria-label={CONTACT.aria} className='mr-2'>
                {CONTACT.emoji}
              </span>
              {CONTACT.email}
            </CustomLink>
          </div>
        </div>
      </section>

      <a
        href='https://buymeacoffee.com/tom_takeru'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-4 right-4 bg-amber-900 hover:bg-amber-700 text-white p-3 md:p-6 rounded-full shadow-lg flex items-center justify-center transition-colors'
        aria-label={messages.buyMeCoffee}
      >
        <SiBuymeacoffee
          className='w-6 h-6 md:w-10 md:h-10'
          aria-hidden='true'
        />
      </a>
    </div>
  );
}

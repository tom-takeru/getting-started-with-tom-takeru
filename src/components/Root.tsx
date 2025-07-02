'use client';

import CustomLink from '@/components/CustomLink';
import HeroTyping from '@/components/HeroTyping';
import {
  SiDocker,
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiQiita,
  SiReact,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
  SiX,
} from 'react-icons/si';

// 定数定義

const ABOUT = {
  city: 'Japan',
  emoji: '🇯🇵',
  description:
    'I build web services with a passion for seamless UX and robust architectures. When I’m not coding, you’ll find me exploring new coffee shops or strategizing over a board game.',
};

const SKILLS = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Ruby on Rails', icon: SiRubyonrails },
  { name: 'Docker', icon: SiDocker },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
];

const PROJECTS = [
  {
    name: 'Board Game Prototype Service (Coming Soon)',
    emoji: '🎲',
    aria: 'game',
    description: 'This service is coming soon. Stay tuned!',
    href: undefined,
    disabled: true,
    repos: [
      {
        name: 'Board Game Prototype (GitHub)',
        url: 'https://github.com/habitat-hub/board-game-prototype',
        icon: SiGithub,
        label: 'github',
      },
    ],
  },
  {
    name: 'AI Discussion Service',
    emoji: '🤖',
    aria: 'robot',
    description: 'A platform for AI-powered discussions and collaboration.',
    href: 'https://ai-discussion.habitat-hub.com/about',
    disabled: false,
    repos: [],
  },
  {
    name: 'Habitat Hub Official Site',
    emoji: '🏠',
    aria: 'house',
    description:
      'The official website for Habitat Hub, showcasing our team, projects, and mission.',
    href: 'https://www.habitat-hub.com/',
    disabled: false,
    repos: [
      {
        name: 'Official Site (GitHub)',
        url: 'https://github.com/habitat-hub/official-site',
        icon: SiGithub,
        label: 'github',
      },
    ],
  },
];

const ARTICLES = [
  {
    name: 'Qiita',
    url: 'https://qiita.com/tom-takeru',
    emoji: '📝',
    aria: 'memo',
    description:
      'Technical deep dives on monetization, AES encryption in Rails, and more.',
    icon: SiQiita,
  },
  {
    name: 'Forem',
    url: 'https://forem.com/tom-takeru',
    emoji: '🌐',
    aria: 'community',
    description: 'Blog posts and community articles on Forem.',
    logoSource: 'https://logo.clearbit.com/forem.com',
  },
];

const LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/tom-takeru',
    emoji: '🐙',
    aria: 'github',
    icon: SiGithub,
  },
  {
    name: 'X (formerly Twitter)',
    url: 'https://x.com/tom__takeru',
    emoji: '🐦',
    aria: 'bird',
    icon: SiX,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tom-takeru/',
    emoji: '💼',
    aria: 'briefcase',
    icon: SiLinkedin,
  },
  {
    name: 'Forem Profile',
    url: 'https://forem.com/tom-takeru',
    emoji: '🌐',
    aria: 'community',
    logoSource: 'https://logo.clearbit.com/forem.com',
  },
  {
    name: 'Qiita Profile',
    url: 'https://qiita.com/tom-takeru',
    emoji: '📝',
    aria: 'memo',
    icon: SiQiita,
  },
];

const CONTACT = {
  email: 'tom.2461.ty@gmail.com',
  mailto: 'mailto:tom.2461.ty@gmail.com',
  emoji: '✉️',
  aria: 'email',
};

const ORGANIZATIONS = [
  {
    name: 'Habitat Hub',
    url: 'https://www.habitat-hub.com/',
    emoji: '🏠',
    aria: 'house',
    description:
      'Habitat Hub is a team of four engineers developing websites and apps, and sharing IT articles on platforms like Qiita. Our mission is to bring small joys and greater convenience to people through technology, making everyday life a little happier and richer.',
  },
];

export default function Root() {
  const handleStartExploring = () => {
    // About Sectionまでスムーズにスクロール
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
      {/* Hero Section */}
      <section className='flex items-center justify-center h-dvh bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 text-gray-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5' />
        <div className='text-center p-8 relative z-10'>
          <div className='mb-6'>
            <span className='inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4'>
              🚀 Getting Started with tom-takeru
            </span>
          </div>
          <HeroTyping />
          <p className='mt-6 text-lg text-gray-600 max-w-2xl mx-auto'>
            Step-by-step journey through my development skills, projects, and
            insights. Perfect for understanding my approach to building modern
            web applications.
          </p>
          <div className='mt-8 flex justify-center'>
            <button
              type='button'
              onClick={handleStartExploring}
              className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg'
            >
              Start Exploring →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about-section' className='py-16 px-4 max-w-4xl mx-auto'>
        <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12'>
          <div className='flex items-center mb-6'>
            <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              01
            </div>
            <h2 className='text-3xl font-bold'>
              About the Developer
              <span role='img' aria-label='person' className='ml-2'>
                🧑‍💻
              </span>
            </h2>
          </div>
          <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg'>
            <p className='leading-relaxed text-gray-700'>
              I'm tom-takeru. Based in {ABOUT.city}
              <span role='img' aria-label='tokyo tower' className='mx-1'>
                {ABOUT.emoji}
              </span>
              , {ABOUT.description}
            </p>
          </div>
          <div className='mt-6 text-sm text-gray-500'>
            💡 <strong>Quick tip:</strong> This section gives you insight into
            my background and development philosophy.
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-16 bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-4xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <div className='flex items-center justify-center mb-6'>
              <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
                02
              </div>
              <h2 className='text-3xl font-bold'>
                Tech Stack Overview
                <span role='img' aria-label='toolbox' className='ml-2'>
                  🧰
                </span>
              </h2>
            </div>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Here are the main technologies I work with. Each tool is carefully
              selected for building scalable, maintainable applications.
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
              <span className='ml-2'>
                I focus on delivering value and impactful solutions.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-16 px-4 max-w-5xl mx-auto'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-6'>
            <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              03
            </div>
            <h2 className='text-3xl font-bold'>
              Featured Projects
              <span role='img' aria-label='rocket' className='ml-2'>
                🚀
              </span>
            </h2>
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Explore my latest projects and see how I apply modern development
            practices to solve real-world problems.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-indigo-200 ${project.disabled ? 'opacity-60' : ''} relative overflow-hidden`}
            >
              <div className='absolute top-4 right-4 text-xs text-gray-400 font-mono'>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className='mb-4'>
                {project.href && !project.disabled ? (
                  <CustomLink
                    href={project.href}
                    openInNewTab
                    className='font-semibold text-lg text-indigo-600 hover:text-indigo-800 transition-colors'
                  >
                    {project.name}
                    <span role='img' aria-label={project.aria} className='ml-2'>
                      {project.emoji}
                    </span>
                  </CustomLink>
                ) : (
                  <span className='font-semibold text-lg text-gray-400 cursor-not-allowed'>
                    {project.name}
                    <span role='img' aria-label={project.aria} className='ml-2'>
                      {project.emoji}
                    </span>
                  </span>
                )}
              </div>
              <p
                className={`text-sm text-gray-600 flex-grow ${project.disabled ? 'text-gray-400' : ''}`}
              >
                {project.description}
              </p>
              {project.repos.length > 0 && (
                <div className='mt-4 pt-4 border-t border-gray-100'>
                  <div className='text-xs text-gray-500 mb-2'>
                    📂 Repository:
                  </div>
                  <ul className='space-y-2'>
                    {project.repos.map(repo => (
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
          ))}
        </div>
      </section>

      {/* Organizations Section */}
      <section className='py-16 px-4 max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-6'>
            <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              04
            </div>
            <h2 className='text-3xl font-bold'>
              Organizations & Teams
              <span role='img' aria-label='house' className='ml-2'>
                🏠
              </span>
            </h2>
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Learn about the teams and organizations I'm part of, and how we
            collaborate to create impactful solutions.
          </p>
        </div>
        <div className='space-y-6'>
          {ORGANIZATIONS.map((org, index) => (
            <div
              key={org.url}
              className='bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:border-indigo-200'
            >
              <div className='flex items-start space-x-4'>
                <div className='bg-indigo-50 text-indigo-600 rounded-lg w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0'>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className='flex-grow'>
                  <CustomLink
                    href={org.url}
                    openInNewTab
                    className='font-semibold text-xl text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center'
                  >
                    {org.name}
                    <span role='img' aria-label={org.aria} className='ml-2'>
                      {org.emoji}
                    </span>
                  </CustomLink>
                  <div className='mt-3 p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-300'>
                    <p className='text-gray-700 leading-relaxed'>
                      {org.description}
                    </p>
                  </div>
                  <div className='mt-3 text-sm text-gray-500'>
                    🔗 <strong>Explore:</strong> Visit the organization's
                    website to learn more about our mission and projects.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className='py-16 px-4 max-w-4xl mx-auto bg-gray-50'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-6'>
            <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              05
            </div>
            <h2 className='text-3xl font-bold'>
              Learning Resources
              <span role='img' aria-label='books' className='ml-2'>
                📚
              </span>
            </h2>
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Check out my technical articles and insights to deepen your
            understanding of modern development practices.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {ARTICLES.map((article, index) => (
            <div
              key={article.url}
              className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:border-indigo-200 relative'
            >
              <div className='absolute top-4 right-4 text-xs text-gray-400 font-mono'>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 p-3 bg-indigo-50 rounded-lg'>
                  {article.icon ? (
                    <article.icon
                      className='w-6 h-6 text-indigo-600'
                      aria-label={article.name}
                    />
                  ) : article.logoSource ? (
                    <img
                      src={article.logoSource}
                      alt={article.name}
                      className='w-6 h-6'
                    />
                  ) : null}
                </div>
                <div className='flex-grow'>
                  <CustomLink
                    href={article.url}
                    openInNewTab
                    className='font-semibold text-lg text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center'
                  >
                    {article.name}
                    <span role='img' aria-label={article.aria} className='ml-2'>
                      {article.emoji}
                    </span>
                  </CustomLink>
                  <p className='mt-2 text-gray-600'>{article.description}</p>
                  <div className='mt-3 text-sm text-indigo-600'>
                    📖 Read articles →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Links Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <div className='flex items-center justify-center mb-8'>
            <div className='bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              06
            </div>
            <h2 className='text-3xl font-bold'>
              Connect & Follow
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
                className='group hover:scale-110 transition-transform duration-300'
                aria-label={link.name}
              >
                {link.icon ? (
                  <link.icon
                    className='w-8 h-8 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300'
                    aria-hidden='true'
                  />
                ) : link.logoSource ? (
                  <img
                    src={link.logoSource}
                    alt={link.name}
                    className='w-8 h-8'
                  />
                ) : null}
              </CustomLink>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-16 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-10' />
        <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
          <div className='flex items-center justify-center mb-6'>
            <div className='bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
              07
            </div>
            <h2 className='text-3xl font-bold'>
              Ready to Connect?
              <span role='img' aria-label='mail' className='ml-2'>
                📬
              </span>
            </h2>
          </div>
          <p className='text-xl mb-8 text-indigo-100 max-w-2xl mx-auto'>
            Let's discuss your next project or explore collaboration
            opportunities.
          </p>
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20'>
            <p className='mb-6 text-indigo-100'>
              Feel free to reach out via email:
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
    </div>
  );
}

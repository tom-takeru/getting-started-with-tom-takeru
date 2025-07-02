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
  city: 'Tokyo',
  emoji: '🗼',
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
  mailto: 'mailto:tom.takeru@example.com',
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
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800 font-sans'>
      {/* Hero Section */}
      <section className='flex items-center justify-center h-screen bg-gradient-to-b from-purple-600 to-indigo-600 text-white'>
        <div className='text-center p-8'>
          <HeroTyping />
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 px-4 max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4 text-center'>
          About Me
          <span role='img' aria-label='person'>
            🧑‍💻
          </span>
        </h2>
        <p className='leading-relaxed'>
          Based in {ABOUT.city}
          <span role='img' aria-label='tokyo tower'>
            {ABOUT.emoji}
          </span>
          , {ABOUT.description}
        </p>
      </section>

      {/* Skills Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Skills
            <span role='img' aria-label='toolbox'>
              🧰
            </span>
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
            {SKILLS.map(skill => (
              <div
                key={skill.name}
                className='p-4 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center space-y-2'
              >
                <skill.icon className='w-8 h-8' aria-label={skill.name} />
                <span className='text-sm font-medium'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-16 px-4 max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-center'>
          Projects
          <span role='img' aria-label='rocket'>
            🚀
          </span>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {PROJECTS.map(project => (
            <div
              key={project.name}
              className={`bg-gray-100 rounded-xl shadow-md p-6 flex flex-col h-full transition hover:shadow-lg ${project.disabled ? 'opacity-60' : ''}`}
            >
              {project.href && !project.disabled ? (
                <CustomLink
                  href={project.href}
                  openInNewTab
                  className='font-semibold underline text-lg'
                >
                  {project.name}
                  <span role='img' aria-label={project.aria}>
                    {project.emoji}
                  </span>
                </CustomLink>
              ) : (
                <span className='font-semibold underline text-lg text-gray-400 cursor-not-allowed'>
                  {project.name}
                  <span role='img' aria-label={project.aria}>
                    {project.emoji}
                  </span>
                </span>
              )}
              <p
                className={`mt-1 text-sm ${project.disabled ? 'text-gray-400' : ''}`}
              >
                {project.description}
              </p>
              {project.repos.length > 0 && (
                <ul className='space-y-2 mt-2'>
                  {project.repos.map(repo => (
                    <li key={repo.url}>
                      <CustomLink
                        href={repo.url}
                        openInNewTab
                        className='underline flex items-center space-x-2'
                      >
                        <repo.icon
                          className='w-5 h-5'
                          aria-label={repo.label}
                        />
                        <span>{repo.name}</span>
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Organizations Section */}
      <section className='py-16 px-4 max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4 text-center'>
          Organizations
          <span role='img' aria-label='house'>
            🏠
          </span>
        </h2>
        <ul className='space-y-6'>
          {ORGANIZATIONS.map(org => (
            <li key={org.url} className='bg-gray-100 rounded-lg p-6'>
              <CustomLink
                href={org.url}
                openInNewTab
                className='font-semibold underline text-lg'
              >
                {org.name}
                <span role='img' aria-label={org.aria}>
                  {org.emoji}
                </span>
              </CustomLink>
              <p className='mt-2 text-sm text-gray-700'>{org.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Articles Section */}
      <section className='py-16 px-4 max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-center'>
          Articles
          <span role='img' aria-label='books'>
            📚
          </span>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {ARTICLES.map(article => (
            <div
              key={article.url}
              className='p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-start space-x-3 shadow-md h-full'
            >
              {article.icon ? (
                <article.icon
                  className='w-6 h-6 mt-1 flex-shrink-0'
                  aria-label={article.name}
                />
              ) : article.logoSource ? (
                <img
                  src={article.logoSource}
                  alt={article.name}
                  className='w-6 h-6 mt-1 flex-shrink-0'
                />
              ) : null}
              <div>
                <CustomLink
                  href={article.url}
                  openInNewTab
                  className='font-semibold underline'
                >
                  {article.name}
                  <span role='img' aria-label={article.aria}>
                    {article.emoji}
                  </span>
                </CustomLink>
                <p className='mt-1 text-sm'>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Links Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4 text-center'>
            Link Collection
            <span role='img' aria-label='link'>
              🔗
            </span>
          </h2>
          <div className='flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6'>
            {LINKS.map(link => (
              <CustomLink
                key={link.url}
                href={link.url}
                openInNewTab
                className='hover:text-purple-600 flex items-center space-x-2'
              >
                {link.icon ? (
                  <link.icon className='w-5 h-5' aria-label={link.name} />
                ) : link.logoSource ? (
                  <img
                    src={link.logoSource}
                    alt={link.name}
                    className='w-5 h-5'
                  />
                ) : null}
                <span>
                  {link.name}
                  <span role='img' aria-label={link.aria}>
                    {link.emoji}
                  </span>
                </span>
              </CustomLink>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-16 bg-gradient-to-b from-indigo-600 to-purple-600 text-white'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4 text-center'>
            Get in Touch
            <span role='img' aria-label='mail'>
              📬
            </span>
          </h2>
          <p className='mb-6'>
            Feel free to reach out via email:
            <CustomLink
              href={CONTACT.mailto}
              openInNewTab={false}
              className='underline hover:text-yellow-300'
            >
              {CONTACT.email}
              <span role='img' aria-label={CONTACT.aria}>
                {CONTACT.emoji}
              </span>
            </CustomLink>
          </p>
        </div>
      </section>
    </div>
  );
}

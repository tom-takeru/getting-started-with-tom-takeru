import { Typewriter } from 'react-simple-typewriter';

export default function HeroTyping() {
  return (
    <h1
      className='text-5xl font-extrabold'
      aria-label='tom-takeru introduction'
    >
      I'm a{' '}
      <Typewriter
        words={[
          'tom-takeru!👋',
          'Full-Stack Engineer 💻',
          'Coffee Lover ☕',
          'Board Game Enthusiast 🎲',
        ]}
        loop={true}
        cursor
        cursorStyle='|'
        typeSpeed={75}
        deleteSpeed={30}
        delaySpeed={2000}
      />
    </h1>
  );
}

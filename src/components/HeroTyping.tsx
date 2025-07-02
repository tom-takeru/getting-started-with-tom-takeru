import { Typewriter } from 'react-simple-typewriter';

export default function HeroTyping() {
  return (
    <h1
      className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold font-console tracking-wider whitespace-nowrap'
      aria-label='tom-takeru introduction'
    >
      <Typewriter
        words={[
          "Hi there! I'm tom-takeru",
          'I build web applications',
          'Coffee fuels my coding',
          "Let's play board games!",
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

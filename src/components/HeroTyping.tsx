import { Typewriter } from 'react-simple-typewriter';

type HeroTypingProps = {
  ariaLabel: string;
  words: readonly string[];
};

export default function HeroTyping({ ariaLabel, words }: HeroTypingProps) {
  return (
    <h1
      className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold font-console tracking-wider whitespace-nowrap'
      aria-label={ariaLabel}
    >
      <Typewriter
        words={[...words]}
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

import { Typewriter } from 'react-simple-typewriter';

export default function HeroTyping() {
  return (
    <h1
      className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold font-console tracking-wider whitespace-nowrap'
      aria-label='tom-takeru introduction'
    >
      <Typewriter
        words={[
          'I build practical web products',
          'I prototype, ship, and improve',
          'I make tools for everyday use',
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

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Getting started with tom-takeru',
  description: `The ultimate guide to discovering everything you never knew you wanted to know about tom-takeru. This is a web-based introduction that answers the question, 'Who exactly is tom-takeru, and why should I care?'. Dive in at your own risk—curiosity has its perks!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
}

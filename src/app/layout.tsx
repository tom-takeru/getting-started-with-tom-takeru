import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Getting started with tom-takeru',
  description:
    'A bilingual introduction to tom-takeru, featuring current web products, projects, technical articles, and contact links.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </head>
      <body>{children}</body>
    </html>
  );
}

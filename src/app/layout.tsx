import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { DEFAULT_LOCALE, REQUEST_LOCALE_HEADER, resolveLocale } from '@/i18n';

export const metadata: Metadata = {
  title: 'Getting started with tom-takeru',
  description:
    'A bilingual introduction to tom-takeru, featuring current web products, projects, technical articles, and contact links.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const requestLocale = resolveLocale(
    requestHeaders.get(REQUEST_LOCALE_HEADER),
    DEFAULT_LOCALE,
  );

  return (
    <html lang={requestLocale}>
      <head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </head>
      <body>{children}</body>
    </html>
  );
}

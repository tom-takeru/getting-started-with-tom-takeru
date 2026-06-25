import { headers } from 'next/headers';
import Root from '@/components/Root';
import { REQUEST_LOCALE_HEADER, resolveLocale } from '@/i18n';

type PageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const requestHeaders = await headers();
  const locale = resolveLocale(
    params?.lang,
    requestHeaders.get(REQUEST_LOCALE_HEADER) ?? undefined,
  );

  return <Root initialLocale={locale} />;
}

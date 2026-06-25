import Root from '@/components/Root';
import { DEFAULT_LOCALE, resolveLocale } from '@/i18n';

type PageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = resolveLocale(params?.lang, DEFAULT_LOCALE);

  return <Root initialLocale={locale} />;
}

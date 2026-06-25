import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { REQUEST_LOCALE_HEADER, resolveLocale } from '@/i18n';

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const locale = resolveLocale(
    request.nextUrl.searchParams.get('lang'),
    request.headers.get('accept-language') ?? undefined,
  );

  requestHeaders.set(REQUEST_LOCALE_HEADER, locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

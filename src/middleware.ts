import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['fa', 'en'] as const;
const defaultLocale = 'fa';

function getLocale(pathname: string): string | null {
  const segment = pathname.split('/')[1];
  return locales.includes(segment as any) ? segment : null;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip public files and api
  if (
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/_next')
  ) {
    return NextResponse.next();
  }

  const currentLocale = getLocale(pathname);
  if (!currentLocale) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next).*)'],
};

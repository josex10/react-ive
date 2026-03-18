import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '../../i18n/routing';
import {notFound} from 'next/navigation';
import "../globals.css";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "reactIVE — Make your business work smarter",
  description:
    "We replace Excel and manual workflows with custom software solutions. Automate your business processes with reactIVE.",
  keywords: "automation, business software, custom software, workflow automation, digital transformation",
  openGraph: {
    title: "reactIVE — Make your business work smarter",
    description: "Automate your business processes. We replace Excel and manual workflows with custom software solutions.",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  
  let currentLocale = locale;
  if (!routing.locales.includes(locale as any)) {
    currentLocale = routing.defaultLocale;
  }
  
  const messages = await getMessages({ locale: currentLocale });

  return (
    <html lang={currentLocale} className={inter.variable}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={currentLocale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

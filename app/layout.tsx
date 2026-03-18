import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

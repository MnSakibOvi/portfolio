import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-mn-sakib-se.vercel.app"),
  title: "Nazmus Sakib · Software Engineer | ASP.NET · nopCommerce",
  description:
    "Software Engineer open to roles - ASP.NET Core, nopCommerce, ERP integration, and multi-store enterprise platforms. Based in Dhaka, Bangladesh.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Nazmus Sakib · Software Engineer",
    description:
      "ASP.NET Core · nopCommerce · open to Software Engineer roles.",
    type: "website",
    url: "https://portfolio-mn-sakib-se.vercel.app",
    siteName: "Nazmus Sakib",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nazmus Sakib · Software Engineer | ASP.NET · nopCommerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazmus Sakib · Software Engineer",
    description:
      "ASP.NET Core · nopCommerce · open to Software Engineer roles.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

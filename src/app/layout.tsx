import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const cairo = localFont({
  src: [
    { path: "../../public/fonts/Cairo-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Cairo-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-cairo",
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  verification: {
    google: "f7elVlC32bXPfW6Pdu8DAIzRLbrk75k1Ka-hXEuzHVU",
  },
  title: {
    default: "Greeko | Greek Culture & History",
    template: "%s | Greeko",
  },
  description:
    "Greeko is an interactive platform exploring Greek culture, history, mythology, tourism, and society using modern web technologies.",
  keywords: [
    "Greece",
    "Greek Culture",
    "Greek History",
    "Mythology",
    "Tourism",
    "Ancient Greece",
    "CKP Ahmed ElHosssin VeRcEl",
    "tuziyzghy",
  ],
  authors: [{ name: "Ahmed" }],
  creator: "Ahmed",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Greeko | Greek Culture & History",
    description:
      "Explore Greek history, mythology, culture, and destinations through an interactive modern platform.",
    url: "https://greek-scope.vercel.app/",
    siteName: "Greeko",
    images: [
      {
        url: "/og-image.avif",
        width: 1200,
        height: 630,
        alt: "Greeko – Greek Culture & History",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greeko | Greek Culture & History",
    description:
      "Discover Greece through history, mythology, culture, and tourism.",
    images: ["/og-image.avif"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body dir="rtl"
        className={`${geistSans.variable} ${cairo.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <ClientLayout>
            
              {/* <div className="h-18"></div> */}
              {children}
              
            </ClientLayout>
        </main>
      </body>
    </html>
  );
}

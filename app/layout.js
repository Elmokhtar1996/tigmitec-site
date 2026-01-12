import HeaderOptimized from "@/components/HeaderOptimized";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const metadata = {
  title: "TigmiTec | Agence Innovation Digitale & Développement Web",
  description: "TigmiTec est une agence digitale experte en développement web, mobile, et marketing digital. Nous transformons vos idées en solutions innovantes.",
  keywords: "développement web, applications mobiles, marketing digital, TigmiTec, agence digitale",
  authors: [{ name: "TigmiTec" }],
  openGraph: {
    title: "TigmiTec | Agence Innovation Digitale",
    description: "Transformez vos idées en solutions digitales innovantes",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Preconnect pour Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-white text-gray-900 overflow-x-hidden">
        <HeaderOptimized />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}

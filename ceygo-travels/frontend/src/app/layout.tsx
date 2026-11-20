import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { MobileDock, Navbar } from "@/components/layout/Navbar";
import { WishlistProvider } from "@/components/providers/WishlistProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CeyGo Travels | Private Sri Lanka Journeys",
    template: "%s | CeyGo Travels",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Sri Lanka tours",
    "private Sri Lanka itinerary",
    "Ceylon travel",
    "Sigiriya",
    "Galle Fort",
    "tea country",
    "international travelers",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "CeyGo Travels | Private Sri Lanka Journeys",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#FBFCEA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={organizationJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-saffron focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <WishlistProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <MobileDock />
        </WishlistProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScrollProgress, CustomCursor } from "@/components/motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hrpreneurs.com"),
  title: {
    default: "HRpreneurs — Building Strong Organizations Through People",
    template: "%s · HRpreneurs",
  },
  description:
    "Full-service HR solutions firm with 18+ years of experience in talent acquisition, consulting, compliance, HR technology, and workforce transformation.",
  keywords: [
    "HR consulting",
    "HR solutions India",
    "Talent acquisition",
    "HR compliance",
    "HR technology",
    "Payroll",
    "L&D",
    "Managed HR",
    "HRpreneurs",
  ],
  authors: [{ name: "HRpreneurs" }],
  openGraph: {
    type: "website",
    title: "HRpreneurs — Building Strong Organizations Through People",
    description:
      "From talent to compliance to tech — design the HR function your company actually needs.",
    siteName: "HRpreneurs",
  },
  twitter: {
    card: "summary_large_image",
    title: "HRpreneurs",
    description:
      "Full-service HR solutions firm building future-ready organizations.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2EDE9" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0A14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="sand" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.className} grain`} suppressHydrationWarning>
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

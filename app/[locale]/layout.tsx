import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://test-task-goit-cyan.vercel.app/"),
  title: "Міні-блог",
  description:
    "Простий та зручний міні-блог для публікації коротких думок, новин і ідей. Швидке створення постів, адаптивний дизайн та мінімалістичний інтерфейс.",
  openGraph: {
    title: "Міні-блог",
    description:
      "Простий та зручний міні-блог для публікації коротких думок, новин і ідей. Швидке створення постів, адаптивний дизайн та мінімалістичний інтерфейс.",
    url: "https://test-task-goit-cyan.vercel.app/",
    images: [
      {
        url: "/SEO_OpenGraph_Miniblog.jpg",
        width: 1200,
        height: 630,
        alt: "mini blog preview",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Міні-блог",
    description:
      "Простий та зручний міні-блог для публікації коротких думок, новин і ідей. Швидке створення постів, адаптивний дизайн та мінімалістичний інтерфейс.",
    images: [],
  },
};

export function generateStaticParams() {
  return ["uk", "en"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
          <Toaster />
        </TanStackProvider>
      </body>
    </html>
  );
}

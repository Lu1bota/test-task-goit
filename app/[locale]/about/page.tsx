import Container from "@/components/Container/Container";
import css from "./AboutPage.module.css";
import { Metadata } from "next";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://test-task-goit-cyan.vercel.app/about"),
  title: "Про нас",
  description:
    "Інформація про автора Міні-блогу, його цілі, цінності та історію створення проєкту.",
  openGraph: {
    title: "Міні-блог",
    description:
      "Інформація про автора Міні-блогу, його цілі, цінності та історію створення проєкту.",
    url: "https://test-task-goit-cyan.vercel.app/about",
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
      "Інформація про автора Міні-блогу, його цілі, цінності та історію створення проєкту.",
    images: [],
  },
};

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

const i18nNamespaces = ["about-us", "common"];

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <section className={css.about}>
        <Container>
          <div className={css.aboutContainer}>
            <h1 className={css.aboutTitle}>{t("common:about_us")}</h1>
            <p className={css.aboutParagraph}>{t("paragraph-1")}</p>
            <p className={css.aboutParagraph}>{t("paragraph-2")}</p>
            <p className={css.aboutText}>{t("paragraph-3")}</p>
          </div>
        </Container>
      </section>
    </TranslationsProvider>
  );
}

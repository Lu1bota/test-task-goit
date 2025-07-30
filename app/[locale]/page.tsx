import HomePageClient from "./HomePage.client";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

const i18nNamespaces = ["postsList"];

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <HomePageClient />;
    </TranslationsProvider>
  );
}

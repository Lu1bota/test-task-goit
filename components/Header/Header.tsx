import css from "./Header.module.css";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "../TranslationsProvider/TranslationsProvider";
import LanguageChanger from "../LanguageChanger/LanguageChanger";

interface HeaderProps {
  locale: string;
}

const i18nNamespaces = ["header", "common"];

export default async function Header({ locale }: HeaderProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <header className={css.header}>
        <Container>
          <div className={css.containerHeader}>
            <h2 className={css.headerTitle}>{t("title")}</h2>

            <Navigation />

            <LanguageChanger />
          </div>
        </Container>
      </header>
    </TranslationsProvider>
  );
}

import initTranslations from "@/app/i18n";
import Container from "../Container/Container";
import css from "./Footer.module.css";
import TranslationsProvider from "../TranslationsProvider/TranslationsProvider";

interface FooterProps {
  locale: string;
}

const i18nNamespaces = ["footer"];

export default async function Footer({ locale }: FooterProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <footer className={css.footer}>
        <Container>
          <div className={css.footerContent}>
            <p className={css.footerCopy}>© {new Date().getFullYear()}</p>
            <div className={css.footerAuthor}>
              <p className={css.footerText}>{t("devName")}</p>
            </div>
          </div>
        </Container>
      </footer>
    </TranslationsProvider>
  );
}

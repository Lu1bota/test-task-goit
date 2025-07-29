import Container from "@/components/Container/Container";
import css from "./AboutPage.module.css";
import { Metadata } from "next";

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

export default function AboutPage() {
  return (
    <section className={css.about}>
      <Container>
        <div className={css.aboutContainer}>
          <h1 className={css.aboutTitle}>Про нас</h1>
          <p className={css.aboutParagraph}>
            Міні блог — це простий і зручний проєкт для публікації коротких
            думок, ідей або новин. Ми створили цей сервіс, щоб кожен міг легко
            писати та переглядати пости без складних налаштувань і зайвих
            функцій.
          </p>
          <p className={css.aboutParagraph}>
            Проєкт створено невеликою командою, яка захоплюється веброзробкою та
            мінімалізмом. Ми прагнемо зробити обмін контентом легким, швидким і
            приємним для всіх користувачів.
          </p>
          <p className={css.aboutText}>Дякуємо, що ви з нами.</p>
        </div>
      </Container>
    </section>
  );
}

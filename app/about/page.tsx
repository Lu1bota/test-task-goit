import Container from "@/components/Container/Container";
import css from "./AboutPage.module.css";

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

{
  // <section className={css.about}>
  //     <Container>
  //       <p>
  //         Міні блог — це простий і зручний проєкт для публікації коротких думок,
  //         ідей або новин. Ми створили цей сервіс, щоб кожен міг легко писати та
  //         переглядати пости без складних налаштувань і зайвих функцій.
  //       </p>
  //       <p>
  //         Проєкт створено невеликою командою, яка захоплюється веброзробкою та
  //         мінімалізмом. Ми прагнемо зробити обмін контентом легким, швидким і
  //         приємним для всіх користувачів.
  //       </p>
  //       <p>Дякуємо, що ви з нами.</p>
  //     </Container>
  //   </section>
}

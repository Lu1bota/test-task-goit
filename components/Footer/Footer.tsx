import Container from "../Container/Container";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.footerContent}>
          <p className={css.footerCopy}>© {new Date().getFullYear()}</p>
          <div className={css.footerAuthor}>
            <p className={css.footerText}>Розробник: Данило Любота</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

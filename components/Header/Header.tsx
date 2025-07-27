import css from "./Header.module.css";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.containerHeader}>
          <h2 className={css.headerTitle}>Міні-блог</h2>

          <Navigation />
        </div>
      </Container>
    </header>
  );
}

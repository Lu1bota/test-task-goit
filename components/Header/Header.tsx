import Link from "next/link";
import css from "./Header.module.css";
import Container from "../Container/Container";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.containerHeader}>
          <h2 className={css.headerTitle}>Міні-блог</h2>

          <nav className={css.nav}>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <Link href="/" className={css.navLink}>
                  Головна
                </Link>
              </li>
              <li className={css.navItem}>
                <Link href="/about" className={css.navLink}>
                  Про нас
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

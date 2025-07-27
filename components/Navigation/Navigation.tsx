"use client";

import Link from "next/link";
import css from "./Navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link
            href="/"
            className={`${pathname === "/" ? `${css.navLink} ${css.active}` : css.navLink}`}
          >
            Головна
          </Link>
        </li>
        <li className={css.navItem}>
          <Link
            href="/about"
            className={`${pathname === "/about" ? `${css.navLink} ${css.active}` : css.navLink}`}
          >
            Про нас
          </Link>
        </li>
      </ul>
    </nav>
  );
}

"use client";

import Link from "next/link";
import css from "./Navigation.module.css";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link
            href="/"
            className={`${pathname === "/en" || pathname === "/uk" ? `${css.navLink} ${css.active}` : css.navLink}`}
          >
            {t("navLink")}
          </Link>
        </li>
        <li className={css.navItem}>
          <Link
            href="/about"
            className={`${pathname === "/en/about" || pathname === "/uk/about" ? `${css.navLink} ${css.active}` : css.navLink}`}
          >
            {t("common:about_us")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

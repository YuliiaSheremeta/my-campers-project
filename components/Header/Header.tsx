"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <div className={css.leftcontainer}>
        <Link href="/" aria-label="Campers logo">
          Travel<span className={css.logo}>Trusks</span>
        </Link>
      </div>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <Link href="/" className={pathname === "/" ? css.active : ""}>
              Home{" "}
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={pathname === "/catalog" ? css.active : ""}
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      <div className={css.rightcontainer}></div>
    </header>
  );
}

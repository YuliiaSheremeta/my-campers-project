import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <Link href="/" aria-label="Campers logo">
            Travel<span className={css.logo}>Trusks</span>
          </Link>
          <ul className={css.list}>
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

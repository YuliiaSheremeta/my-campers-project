import Image from "next/image";
import css from "./homepage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className={css.section}>
      <div className={css.homecontainer}>
        <Image
          src="/background-foto.png"
          alt="background image"
          fill
          priority
          sizes="100vw"
          className={css.image}
        />
        <div className={css.contentcontainer}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <Link href="/catalog" className={css.button}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}

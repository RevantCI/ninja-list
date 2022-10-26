import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius error
          ducimus earum illo officia sapiente, animi illum perspiciatis
          perferendis ea, aperiam adipisci nemo, laborum magnam nesciunt! Iure
          quam unde earum?
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius error
          ducimus earum illo officia sapiente, animi illum perspiciatis
          perferendis ea, aperiam adipisci nemo, laborum magnam nesciunt! Iure
          quam unde earum?
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}

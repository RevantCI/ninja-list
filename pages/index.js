import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          error dignissimos eius quam similique eveniet, est qui voluptate ea ad
          veniam asperiores, nobis tempora quasi, et magni ducimus quae.
          Corrupti.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          error dignissimos eius quam similique eveniet, est qui voluptate ea ad
          veniam asperiores, nobis tempora quasi, et magni ducimus quae.
          Corrupti.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}

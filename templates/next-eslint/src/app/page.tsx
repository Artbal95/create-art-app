import Link from "next/link";
import { FC } from "react";

import styles from "./page.module.css";

const Home: FC = () => (
  <main className={styles.main}>
    <Link href="/examplePage">Go To Example Page</Link>
  </main>
);

export default Home;

import styles from "./page.module.css";

import { asyncSum } from "../../";

export default async function Home() {
  const result = await asyncSum(1, 2);
  return <main className={styles.main}>Result: {result}</main>;
}

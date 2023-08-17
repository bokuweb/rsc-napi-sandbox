import styles from "./page.module.css";

import { sum } from "../../index";

export default function Home() {
  return <main className={styles.main}>Hello!!{sum(1, 2)}</main>;
}

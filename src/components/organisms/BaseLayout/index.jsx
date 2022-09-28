/**
 * BaseLayout
 *
 * @package components
 */
import { Navigation } from "../../molecules/Navigation/index.jsx";
import styles from "./styles.module.css";

/**
 * BaseLayout
 * @param children
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
export const BaseLayout = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {/* リンクエリア */}
      <section className={styles.common}>
        <Navigation />
      </section>
      {children}
    </div>
  );
};

/**
 * Navigation
 *
 * @package components
 */
import { NavigationLink } from "../../atoms/NavigationLink/index.jsx";
import { NAVIGATION_LIST } from "../../../constants/navigations.js";
import styles from "./styles.module.css";

/**
 * Navigation
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigation = () => (
  <nav>
    <ul className={styles.ul}>
      <NavigationLink title={"Top"} linkPath={NAVIGATION_LIST.TOP} />
      <NavigationLink title={"Create"} linkPath={NAVIGATION_LIST.CREATE} />
    </ul>
  </nav>
);

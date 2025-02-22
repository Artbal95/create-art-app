import { FC } from "react";
import { NavLink } from "react-router";

import { RoutesEnum } from "@shared/enums";

import styles from "./AppHeader.module.css";

const AppHeader: FC = () => (
  <header className={styles.AppHeader}>
    <div className={styles.AppHeaderLogo}>Logo</div>
    <nav className={styles.AppHeaderNav}>
      <NavLink
        to={RoutesEnum.HOME}
        className={({ isActive }) =>
          isActive ? styles.AppHeaderNavActive : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={RoutesEnum.ABOUT}
        className={({ isActive }) =>
          isActive ? styles.AppHeaderNavActive : ""
        }
      >
        About
      </NavLink>
    </nav>
  </header>
);

export default AppHeader;

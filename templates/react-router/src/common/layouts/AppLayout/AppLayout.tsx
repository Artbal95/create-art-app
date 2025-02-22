import { FC } from "react";
import { Outlet } from "react-router";

import AppHeader from "@common/containers/AppHeader";
import AppFooter from "@common/containers/AppFooter";

import styles from "./AppLayout.module.css";

const AppLayout: FC = () => (
  <div className={styles.AppLayout}>
    <AppHeader />
    <main className={styles.AppLayoutMain}>
      <Outlet />
    </main>
    <AppFooter />
  </div>
);

export default AppLayout;

import { FC } from "react";

import styles from "./AppFooter.module.css";

const AppFooter: FC = () => (
  <footer className={styles.AppFooter}>
    <div className={styles.AppFooterContainer}>
      <div className={styles.AppFooterGrid}>
        <div>
          <h2 className={styles.AppFooterLogo}>MyApp</h2>
          <p className={styles.AppFooterText}>
            An app for easy task management.
          </p>
        </div>

        <div>
          <h3 className={styles.AppFooterTitle}>Navigation</h3>
          <div className={styles.AppFooterLinks}>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <h3 className={styles.AppFooterTitle}>Find Us on Social Media</h3>
          <div className={styles.AppFooterSocials}>
            <p>🔵 Facebook</p>
            <p>🟣 Instagram</p>
            <p>🔵 Twitter</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.AppFooterCopyright}>
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </div>
  </footer>
);

export default AppFooter;

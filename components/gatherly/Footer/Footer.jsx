import styles from "./Footer.module.css";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { createClient } from "@/utils/supabase/server";

async function Footer() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Social Links */}
        <div className={styles.footerSection}>
          <p className={styles.footerTitle}>Find us on</p>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                TikTok
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerSection}>
          <p className={styles.footerTitle}>Contact us</p>
          <address>
            <a href="mailto:hello@gatherly.co.uk" className={styles.emailLink}>
              hello@gatherly.co.uk
            </a>
          </address>
        </div>

        {/* Powered By */}
        <div className={styles.footerSection}>
          <p className={styles.footerTitle}>
            Powered by{" "}
            <a
              href="https://github.com/SchoolOfCode/final-project-innovation-collective"
              target="_blank"
              rel="noreferrer"
              className={styles.poweredByLink}
            >
              Innovation Collective
            </a>
          </p>
          {user && (
            <>
              <p className={styles.loggedInAs}>Logged in as {user.email}</p>
            </>
          )}
        </div>
      </div>

      {/* Theme Switcher */}
      <div className={styles.themeSwitcher}>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}

export default Footer;

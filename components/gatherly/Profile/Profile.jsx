import React from "react";
import Image from "next/image";
import styles from "./Profile.module.css";
export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.backgroundImage}>
        <div className={styles.blob}>
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 310 350"
          >
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <section className={styles.heroSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/images/sarah-johnson.jpg"
            alt="Sarah Johnson"
            className={styles.profileImage}
            width={250}
            height={250}
          />
        </div>
        <h1 className={styles.userName}>Sarah Johnson</h1>
      </section>
      <section className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>About me</h2>
        <div className={styles.bioWrapper}>
          <p className={styles.bio}>
            Sarah uses the app to stay socially active in her retirement. She
            regularly attends local book club meetings and is part of a knitting
            circle she found through the app. She also creates events for
            volunteer groups that do community service projects, like organizing
            food drives or planting trees. Sarah enjoys connecting with younger
            people and those new to town who might need guidance or mentorship.
          </p>
        </div>
      </section>
      <section className={styles.interestsSection}>
        <h2 className={styles.sectionTitle}>Interests</h2>
        <ul className={styles.interestsList}>
          <li className={styles.interestItem}>Book clubs</li>
          <li className={styles.interestItem}>Sky-diving</li>
          <li className={styles.interestItem}>Volunteering</li>
          <li className={styles.interestItem}>Knitting</li>
          <li className={styles.interestItem}>Gardening</li>
          <li className={styles.interestItem}>Mentoring</li>
        </ul>
      </section>
    </div>
  );
}

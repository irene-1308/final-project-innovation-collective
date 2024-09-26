import React from "react";
import Image from "next/image";
import styles from "./Profile.module.css";
export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.backgroundImage}>
        <Image
          src="/assets/images/hikers.jpg"
          alt="Background image of people hiking"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
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

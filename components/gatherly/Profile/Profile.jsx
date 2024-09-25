import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div>
      <h1 className={styles.title}>Profile</h1>
      <p>Here is where you can view and edit your profile information.</p>
      <p>THIS IS A PROTECTED PAGE ONLY VISIBLE ONCE YOU&apos;VE SIGNED IN.</p>
    </div>
  );
}

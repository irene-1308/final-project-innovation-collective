import styles from "./Profile.module.css";
// import { useState, useEffect } from "react";
export default function Profile() {
  // const [location, setLocation] = useState("Fetching location...");
  // const [error, setError] = useState("");

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         fetchLocationData(latitude, longitude);
  //       },
  //       (error) => {
  //         setError("Unable to retrieve location.");
  //       }
  //     );
  //   } else {
  //     setError("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  // api fetch
  // const fetchLocationData = async (latitude, longitude) => {
  //   try {
  //     const response = await fetch(
  //       `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  //     );
  //     const data = await response.json();
  //     setLocation(data.display_name);
  //   } catch (error) {
  //     setError("Unable to retrieve location data.");
  //   }
  // };

  return (
    <>
      <section>
        <h1 className={styles.title}>Profile</h1>
        <image src="./placeholder.svg"> </image>
        <h2 className="userName">Sarah Johnson</h2>
      </section>

      <section>
        <h3>About me:</h3>
        <p className="bio">
          Sarah uses the app to stay socially active in her retirement. She
          regularly attends local book club meetings and is part of a knitting
          circle she found through the app. She also creates events for
          volunteer groups that do community service projects, like organizing
          food drives or planting trees. Sarah enjoys connecting with younger
          people and those new to town who might need guidance or mentorship.
        </p>
      </section>

      <section>
        <h3>Interests:</h3>
        <ul className="interests">
          <li>Book clubs</li>
          <li>Sky-diving</li>
          <li>Volunteering</li>
        </ul>
      </section>
    </>
  );
}

import React from "react";
import styles from "./FirstStep.module.css";

const FirstStep = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>packages</h1>
        <div className={styles.stepDescription}>
          <div className="flex items-center justify-center">
            <div className={styles.roundNumber}>01</div>
            <div className={styles.stepNumber}>CHOOSE YOUR SPECIALTY</div>
          </div>
          <p className={styles.descriptionText}>
            At Shaped, we offer a range of packages tailored to different
            training specialties and group sizes. To ensure you find the right
            fit for your fitness journey, please start by selecting your
            preferred specialty.
          </p>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.packageCard}>
          <div className={styles.imageWrapper}>
            <img src="/general-fitness.jpg" alt="General Fitness" />
          </div>
          <div className={styles.packageInfo}>
            <h2 className={styles.packageTitle}>GENERAL FITNESS</h2>
            <p className={styles.packageDescription}>
              Includes weight loss, bodybuilding, CrossFit, and kickboxing.
            </p>
            <button className={styles.selectButton}>select</button>
          </div>
        </div>
        <div className={styles.packageCard}>
          <div className={styles.imageWrapper}>
            <img src="/pilates.jpg" alt="General Fitness" />
          </div>
          <div className={styles.packageInfo}>
            <h2 className={styles.packageTitle}>GENERAL FITNESS</h2>
            <p className={styles.packageDescription}>
              Includes weight loss, bodybuilding, CrossFit, and kickboxing.
            </p>
            <button className={styles.selectButton}>select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
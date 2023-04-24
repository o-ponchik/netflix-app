import React from "react";
import styles from "./section-cards.module.css";
import Link from "next/link";
import Card from "./card";

const SectionCards = (props) => {
  const { title, videos = [], size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, index) => (
          <Link href={`/video/${video.id}`}>
            <Card id={index} key={index} imgUrl={video.imgUrl} size={size} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;

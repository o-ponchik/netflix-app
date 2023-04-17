import React, { useState } from "react";
import Image from "next/image";
import styles from "./card.module.css";

const Card = (props) => {
  const { imgUrl = "/static/movie.avif", size } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("hii error");
    setImgSrc("/static/movie.avif");
  };

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          src={imgUrl ? imgUrl : imgSrc}
          alt="image"
          className={styles.cardImg}
          fill
          onError={handleOnError}
        />
      </div>
    </div>
  );
};

export default Card;

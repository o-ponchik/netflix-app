import React, { useState } from "react";
import Image from "next/image";
import styles from "./card.module.css";
import { motion } from "framer-motion";
import cls from "classnames";

const Card = (props) => {
  const { imgUrl = "/static/movie.avif", size, id } = props;

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

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div
        whileHover={{ ...scale }}
        className={cls(styles.imgMotionWrapper, classMap[size])}
      >
        <Image
          src={imgUrl ? imgUrl : imgSrc}
          alt="image"
          className={styles.cardImg}
          fill
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};

export default Card;

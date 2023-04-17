import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

const Card = (props) => {
  const { imgUrl, size } = props;

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image src={imgUrl} alt="image" className={styles.cardImg} fill />
      </div>
    </div>
  );
};

export default Card;

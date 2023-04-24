import React from "react";
import styles from "../../styles/Video.module.css";
import { useRouter } from "next/router";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();
  console.log({ router });

  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        overlayClassName={styles.overlay}
        className={styles.modal}
      >
        <div>Modal Body</div>
      </Modal>
    </div>
  );
};

export default Video;

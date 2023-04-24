import React from "react";
import { useRouter } from "next/router";

const Video = () => {
  const router = useRouter();
  console.log({ router });

  return <div>Video</div>;
};

export default Video;

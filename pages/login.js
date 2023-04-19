import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Netflix SignIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.headerWrapper}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              {" "}
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128"
                height="34"
              />
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Login;

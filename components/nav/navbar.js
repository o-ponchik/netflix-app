import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const NavBar = (props) => {
  const { username } = props;

  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleDropdown = (e) => {
    e.preventDefault();
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              {" "}
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128"
                height="34"
              />
            </div>
          </a>

          <ul className={styles.navItems}>
            <li className={styles.navItem} onClick={handleClickHome}>
              Home
            </li>
            <li className={styles.navItem2} onClick={handleClickMyList}>
              My List
            </li>
          </ul>
          <nav className={styles.navContainer}>
            <div>
              <button className={styles.usernameBtn} onClick={handleDropdown}>
                <p className={styles.username}>{username}</p>
                <Image
                  src="/static/expand_more.svg"
                  alt="Expand more"
                  width="24"
                  height="24"
                />
              </button>

              {showDropdown && (
                <div className={styles.navDropdown}>
                  <div>
                    <Link href="/login" className={styles.linkName}>
                      Sign out
                    </Link>
                    <div className={styles.lineWrapper}></div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;

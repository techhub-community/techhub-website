import Head from "next/head";
import styles from "../styles/Home.module.scss";
import React, { useState, useEffect } from 'react';
import Navbar from "components/Navbar";
import Dropdown from "components/Dropdown";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
    <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
    <div className={styles.container}>

      <Head>
        <title>Home - TechHub :: Community</title>
      </Head>
      <div className="text-center">
        <a href="https://github.com/techhub-community" target="_blank">
          <img className="text-center my-12 w-80" src="/assets/logo/logo-full-transparent.png"/>
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 text-center">
        <a href="https://discord.com/invite/EMEMejk8P5"><img src="https://img.shields.io/discord/814219041614594078?label=Join%20Us%20-%20Discord" alt=""/></a>
        <a href="mailto:hello@tech-hub.org"><img src="https://img.shields.io/badge/Contact%20Us-hello%40tech--hub.org-orange" alt=""/></a>
        <a href="https://github.com/techhub-community"> <img src="https://img.shields.io/github/stars/techhub-community?label=Github%20Stars&amp;style=plastic" alt="GitHub Org&#39;s stars"/></a>
      </div>


    </div>
    </>
  );
}

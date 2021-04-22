import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import QOD from '@/components/QOD';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Home - TechHub :: Community</title>
        </Head>
        <Navbar />
        <Hero />
        <QOD />
        <Stats />
        <Services />
        <CTA />
        <Team />
        <Footer />
      </div>
    </>
  );
}

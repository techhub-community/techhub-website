import Head from 'next/head';
import Navbar from '@/components/Global/Navbar';
import React from 'react';
import PastEvent from '@/components/Events/PastEvents';
import CurrentEvents from '@/components/Events/CurrentEvents';
import UpcomingEvents from '@/components/Events/UpcomingEvents';
import Footer from '@/components/Global/Footer';

const events = () => {
  return (
    <>
      <Head>
        <title>Events - TechHub :: Community</title>
      </Head>

      <Navbar />

      <CurrentEvents />

      <UpcomingEvents />

      <PastEvent />

      <Footer />
    </>
  );
};

export default events;

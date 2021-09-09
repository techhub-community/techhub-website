import Head from 'next/head';
import Navbar from '@/components/Navbar';
import React from 'react';
import PastEvent from '@/components/PastEvents';
import CurrentEvents from '@/components/CurrentEvents';
import UpcomingEvents from '@/components/UpcomingEvents';

import Footer from '@/components/Footer';

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
    )
}

export default events

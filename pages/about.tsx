import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <div>
        <Head>
          <title>About - TechHub :: Community</title>
        </Head>
        <Navbar />
        <div className="w-full h-screen text-center place-items-center">
          <p> About Page</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

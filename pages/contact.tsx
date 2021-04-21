import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <div>
        <Head>
          <title>Contact - TechHub :: Community</title>
        </Head>
        <Navbar />
        <div className="w-full h-screen text-center place-items-center">
          <p> Contact Page</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

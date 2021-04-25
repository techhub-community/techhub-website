import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Question from '@/components/Question';

export default function Questions() {
  return (
    <>
      <div>
        <Head>
          <title>Questions - TechHub :: Community</title>
        </Head>
        <Navbar />
        <Question />
        <Footer />
      </div>
    </>
  );
}

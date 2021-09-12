import Head from 'next/head';
import Navbar from '@/components/Global/Navbar';
import Footer from '@/components/Global/Footer';
import Question from '@/components/Question/Question';

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

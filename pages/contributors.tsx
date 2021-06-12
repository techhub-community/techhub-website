import Head from 'next/head';
import Navbar from '@/components/Navbar';
import React from 'react';
import Cont from '@/components/Cont';
import { getContributors } from 'apis/github';

import Footer from "@/components/Footer"
interface ContributorsState {
  contributors: any;
}

export default class Contributors extends React.Component<
  {},
  ContributorsState
> {
  constructor(props) {
    super(props);

    this.state = { contributors: null };
  }
  componentDidMount = async () => {
    var conts = await getContributors();

    this.setState({ contributors: conts });
    console.log(conts);
  };

  render() {
    return (
      <>
        <Head>
          <title>Contributors - TechHub :: Community</title>
        </Head>
        <Navbar />
        <section className="bg-gray-50">
          <div className="mx-auto py-12">
            <div className="flex flex-col items-center justify-center w-full mb-24">
              <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
                Contributors to Techhub's Webapp
              </h1>
              <hr className="w-36 h-1 bg-brand-700 rounded-full" />
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="w-10/12">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {this.state.contributors &&
                    this.state.contributors.map((item) => (
                      <Cont
                        name={item.login}
                        img={item.avatar_url}
                        count={item.contributions}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer/></>
    );
  }
}



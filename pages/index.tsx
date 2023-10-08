import Head from 'next/head';
import React from 'react';
import Navbar from '@/components/Global/Navbar';
import Hero from '@/components/index/Hero';
import Stats from '@/components/index/Stats';
import QOD from '@/components/index/QOD';
import Team from '@/components/Team/Team';
import Footer from '@/components/Global/Footer';
import CTA from '@/components/index/CTA';
import LLT from '@/components/index/LLT';
import CustomLoader from '@/components/Global/CustomLoader';
import getCurrentDate, { getNextDate, isPastQODTime } from '@/common/helpers';
import getTechhubStats from '@/apis/github';
import getQuestions from '@/apis/questions';

interface HomeState {
  githubStats: any;
  alpha: any;
  beta: any;
  basics: any;
  loading: boolean;
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props) {
    super(props);

    this.state = {
      alpha: null,
      beta: null,
      basics: null,
      loading: true,
      githubStats: null,
    };
  }

  componentDidMount = async () => {
    // Determine the currentDate based on your logic
    var currentDate = isPastQODTime() ? getNextDate() : getCurrentDate();

    try {
      // Fetch questions
      var questions = await getQuestions();

      // Filter and set Alpha Question of the day
      if (questions['alpha']) {
        var alphaDto = questions['alpha'].filter(function (item) {
          return item.questionDate === currentDate;
        });
        this.setState({
          alpha: alphaDto[0],
        });
      }

      // Filter and set Beta Question of the day
      if (questions['beta']) {
        var betaDto = questions['beta'].filter(function (item) {
          return item.questionDate === currentDate;
        });
        this.setState({
          beta: betaDto[0],
        });
      }

      // Filter and set Basics Question of the day
      if (questions['basics']) {
        var basicsDto = questions['basics'].filter(function (item) {
          return item.questionDate === currentDate;
        });
        this.setState({
          basics: basicsDto[0],
        });
      }

      // Fetch GitHub stats
      var gitStats = await getTechhubStats();

      if (gitStats !== 'Error') {
        this.setState({
          githubStats: gitStats,
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <Head>
            <title>Home - TechHub :: Community</title>
          </Head>
          <Navbar />
          <Hero />
          <QOD
            alpha={this.state.alpha}
            beta={this.state.beta}
            basics={this.state.basics}
          />
          <Stats githubStats={this.state.githubStats} />
          <LLT />
          <CTA />
          <Team />
          <Footer />
        </div>
        {this.state.loading && <CustomLoader />}
      </>
    );
  }
}

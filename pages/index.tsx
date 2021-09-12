import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Global/Navbar';
import Hero from '@/components/index/Hero';
import Stats from '@/components/index/Stats';
import QOD from '@/components/index/QOD';
import Team from '@/components/Team/Team';
import Footer from '@/components/Global/Footer';
import CTA from '@/components/index/CTA';
import LLT from '@/components/index/LLT';
import CustomLoader from '@/components/Global/CustomLoader';
import getCurrentDate, { getNextDate, isPastQODTime } from '../common/helpers';

import getTechhubStats from '../apis/github';

import getQuestions from '../apis/questions';
interface HomeState {
  githubStats: any;
  data: any;
  alpha: any;
  beta: any;
  basics: any;
  loading: boolean;
}
export default class Home extends React.Component<{}, HomeState> {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      alpha: null,
      beta: null,
      basics: null,
      loading: true,
      githubStats: null,
    };
  }
  componentDidMount = async () => {
    var currentDate;
    if (isPastQODTime()) {
      currentDate = getNextDate();
    } else {
      currentDate = getCurrentDate();
    }

    var questions = await getQuestions();

    //Get Alpha Question of the day
    var alphaDto = questions['alpha'].filter(function (item) {
      return item.questionDate === currentDate;
    });
    this.setState({
      alpha: alphaDto[0],
    });

    //Get beta question of the day
    var betaDto = questions['beta'].filter(function (item) {
      return item.questionDate === currentDate;
    });
    this.setState({
      beta: betaDto[0],
    });

    //Get basics question of the day
    var basicsDto = questions['basics'].filter(function (item) {
      return item.questionDate === currentDate;
    });
    this.setState({
      basics: basicsDto[0],
    });

    var gitStats = await getTechhubStats();

    if (gitStats !== 'Error') {
      this.setState({
        githubStats: gitStats,
      });
    }

    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <>
        {!this.state.loading ? (
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
        ) : (
          <CustomLoader />
        )}
      </>
    );
  }
}

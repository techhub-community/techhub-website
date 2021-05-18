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
import firebase from "firebase";
import firebaseConfig from "../configs/firebaseConfigs";

import HashLoader from "react-spinners/HashLoader";
import getCurrentDate from "../common/helpers"
interface HomeState {
  database: any;
  data: any;
  alpha: any;
  beta: any;
  basics: any;
  loading: boolean;
}
export default class Home extends React.Component <{} , HomeState> {
  
  constructor(props){
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    else {
      firebase.app(); // if already initialized, use that one
   }
   
   this.state= {
     database: firebase.database(),
     data:"",
     alpha: null, beta: null,
     basics: null,
     loading: true
   }
  }
  componentDidMount = async () => {
    var currentDate=getCurrentDate();
    
    
    //Get Alpha Question of the day
    await this.state.database.ref("alpha").get().then(snapshot => {
      var alphaDto=snapshot.val().filter(function(item){
        return item.questionDate===currentDate;
      })
      this.setState({   
        alpha: alphaDto[0]
      })
    });

    
    //Get beta question of the day
    await this.state.database.ref("beta").get().then(snapshot => {
      var betaDto=snapshot.val().filter(function(item){
        return item.questionDate===currentDate;
      })
      this.setState({   
        beta: betaDto[0]
      })
    });


    
    
    
    
    
    //Get basics question of the day
    await this.state.database.ref("basics").get().then( snapshot => {
      var basicsDto=snapshot.val().filter(function(item){
        return item.questionDate===currentDate;
      })
      this.setState({
        basics: basicsDto[0]
      })
    });
  
  
  
  
  
  
    this.setState({
      loading: false
    })
  }
  render(){
    return (
    <>
    {!this.state.loading ? 
      <div>
        <Head>
          <title>Home - TechHub :: Community</title>
        </Head>
        <Navbar />
        <Hero />
        <QOD alpha={this.state.alpha} beta={this.state.beta} basics={this.state.basics}/>
        <Stats />
        <Services />
        <CTA />
        <Team />
        <Footer />
      </div>:
      <div style={{ position: "fixed",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-50px"
      }}>
        <HashLoader
        loading={true}
        color="#6a0a37"
        size={50}/>
      </div>}
      
  </>
  );
}}
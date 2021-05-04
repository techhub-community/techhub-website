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
interface HomeState {
  database: any;
  data: any;
  alpha: any;
  beta: any;
  basics: any;
}

function getCurrentDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return dd + '/' + mm + '/' + yyyy;
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
     basics: null
   }
  }
  componentDidMount = async () => {
    var currentDate=getCurrentDate();
    this.state.database.ref("alpha").get().then(snapshot => {
      snapshot.forEach(snap => {
        if(snap.val().questionDate==currentDate){
          console.log(snap.val())
          this.setState({
            alpha: snap.val()
          })
        }
      })
    });

    this.state.database.ref("beta").get().then(snapshot => {
      snapshot.forEach(snap => {
        if(snap.val().questionDate==currentDate){
          console.log(snap.val())
          this.setState({
            beta: snap.val()
          })
        }
      })
    });


    this.state.database.ref("basics").get().then( snapshot => {
      snapshot.forEach(snap => {
        if(snap.val().questionDate==currentDate){
          console.log(snap.val())
          this.setState({
            
            basics: snap.val()
          })
        }
      })
    });
  }
  render(){
    return (
    <>
    {this.state.alpha && this.state.beta && this.state.basics ? 
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
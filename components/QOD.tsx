import Link from 'next/link';
import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../configs/firebaseConfigs';

interface QuestionOfTheDayProps {
  alpha: any;
  beta: any;
  basics: any;
}
interface QuestionOfTheDayState {}

export default class QOD extends React.Component<
  QuestionOfTheDayProps,
  QuestionOfTheDayState
> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="relative px-4 md:px-12 lg:px-24 pt-36 pb-24">
          <div className="flex flex-col items-center justify-center text-center w-full  mb-12">
            <h1 className="font-semibold text-gray-800 text-3xl md:text-5xl">
              Question Of The Day
            </h1>
            <p className="lg:w-[60%] px-5 my-8 text-lg lg:text-xl">
              Solve these questions and share your answer in our discord server.
              We discuss these questions daily after 09:00 PM IST in our discord
              server.
            </p>
          </div>
          <div className="sm:mx-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Card Start */}
            <div className="h-auto w-full">
              <div className="bg-white rounded-md shadow-sm hover:shadow-md zoom p-8">
                <div className="flex items-center">
                  <img className="h-12" src="assets/svg/basic.svg" />
                  <h2 className="text-base f-m-m ml-4 font-semibold">
                    TechHub - Basic
                  </h2>
                </div>
                <p className="text-base f-m-m mt-3">
                  {this.props.basics
                    ? this.props.basics.questionTitle
                    : 'Could not fetch the question'}
                </p>
                <div className="flex flex-row justify-between mt-8 mx-3 gap-3  uppercase tracking-widest ">
                  <Link
                    href={
                      this.props.basics ? this.props.basics.questionUrl : ''
                    }
                  >
                    <button className="w-max btn btn-border-grad text-brand-700">
                      Solve
                    </button>
                  </Link>
                  <Link href="/questions#basic-questions">
                    <button className="w-max btn btn-border-grad text-brand-700">
                      More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card End */}
            {/* Card Start */}
            <div className="h-auto w-full">
              <div className="bg-white rounded-md shadow-sm hover:shadow-md zoom p-8">
                <div className="flex items-center">
                  <img className="h-12" src="assets/svg/alpha.svg" />
                  <h2 className="text-base f-m-m ml-4 font-semibold">
                    TechHub - Alpha
                  </h2>
                </div>
                <p className="text-base f-m-m mt-3">
                  {this.props.alpha
                    ? this.props.alpha.questionTitle
                    : 'Could not fetch the question'}
                </p>
                <div className="flex flex-row justify-between mt-8 mx-3 gap-3  uppercase tracking-widest ">
                  <Link
                    href={this.props.alpha ? this.props.alpha.questionUrl : ''}
                  >
                    <button className="w-max btn btn-border-grad text-brand-700">
                      Solve
                    </button>
                  </Link>
                  <Link href="/questions#alpha-questions">
                    <button className="w-max btn btn-border-grad text-brand-700">
                      More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card End */}
            {/* Card Start */}
            <div className="h-auto w-full">
              <div className="bg-white rounded-md shadow-sm hover:shadow-md zoom p-8">
                <div className="flex items-center">
                  <img className="h-12" src="assets/svg/beta.svg" />
                  <h2 className="text-base f-m-m ml-4 font-semibold">
                    TechHub - Beta
                  </h2>
                </div>
                <p className="text-base f-m-m mt-3">
                  {this.props.beta
                    ? this.props.beta.questionTitle
                    : 'Could not fetch the question'}
                </p>
                <div className="flex flex-row justify-between mt-8 mx-3 gap-3  uppercase tracking-widest ">
                  <Link
                    href={this.props.beta ? this.props.beta.questionUrl : ''}
                  >
                    <button className="w-max btn btn-border-grad text-brand-700">
                      Solve
                    </button>
                  </Link>
                  <Link href="questions/#beta-questions">
                    <button className="w-max btn btn-border-grad text-brand-700">
                      More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card End */}
          </div>
        </div>
      </>
    );
  }
}

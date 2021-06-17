import Link from 'next/link';
import React from 'react';

interface SingleQuestionProps {
  date: string;
  details: any;
}
export default class SingleQuestion extends React.Component<
  SingleQuestionProps,
  {}
> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* Single Row Start */}
        <div className="flex flex-col gap-3 md:flex-row justify-start md:justify-between border-b-2 border-dashed pb-5 ">
          <div className="flex gap-3 text-left md:w-2/3">
            <img className="h-8 rounded-full" src="assets/svg/ask.png" alt="" />
            <div className="flex self-center">
              <p className="text-lg font-medium leading-none text-black-700">
                {this.props.details
                  ? this.props.details.questionTitle
                  : 'Could not fetch question data'}
              </p>
              <p className="line-clamp-3 md:line-clamp-1 text-sm text-gray-600 mt-2 ">
                {this.props.details
                  ? this.props.details.questionDesc
                  : 'Could not fetch question data'}
              </p>
            </div>
          </div>
          <div className="text-left items-center">
            <p className="text-lg">{this.props.date}</p>
          </div>
          <div className="zoom">
            <Link
              href={this.props.details ? this.props.details.questionUrl : ''}
            >
              <a className="btn btn-grad text-white w-max ">Solve Now</a>
            </Link>
          </div>
        </div>
        {/* Single Row Ends */}
      </>
    );
  }
}

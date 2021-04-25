import React from 'react';
import AlphaQuestions from './Question/AlphaQuestions';
import BasicQuestions from './Question/BasicQuestions';
import BetaQuestions from './Question/BetaQuestions';

export default function Question() {
  return (
    <div className="my-12">
      <BasicQuestions />
      <AlphaQuestions />
      <BetaQuestions />
    </div>
  );
}

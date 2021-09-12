import React from 'react';

export default function Pills(props) {
  return (
    <>
      <p className={`rounded-full px-4 ${props.cname} text-black`}>
        {props.text}
      </p>
    </>
  );
}

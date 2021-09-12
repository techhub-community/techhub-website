import React from 'react'
import BarLoader from 'react-spinners/BarLoader';

export default function CustomLoader() {
  return (
    <>
      <div className="flex flex-col justify-center items-center place-items-center h-screen my-auto ">
        <img
          src="/assets/logo/logo-full-transparent.png"
          className="h-16"
          alt=""
        />
        <div className="my-3 flex">
          <BarLoader
            loading={true}
            color="#6a0a37"
            height={3}
            width={100}
          />
        </div>
      </div>
    </>
  )
}



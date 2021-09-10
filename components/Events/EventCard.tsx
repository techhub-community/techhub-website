import React, { useState } from 'react';
import Modal from '@/components/Modal';

export default function EventCard(props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center shadow-xl bg-white semi-zoom rounded-t-xl rounded-b-lg cursor-pointer"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <img
          className="h-80 w-80 rounded-t-xl"
          src={props.img}
          alt={props.name}
        />
        <h2 className="text-2xl font-bold mt-8 mb-3 ">{props.name}</h2>
        <h3 className="text-lg ">{props.date}</h3>
        <h2 className="text-xl font-medium mt-2 mb-3">{props.about}</h2>
      </div>

      <Modal
        isOpen={modalOpen}
        className="h-auto max-h-3/4 w-5/6 lg:w-4/6 p-4 lg:p-8 z-50 overflow-y-auto"
        setOpenModal={setModalOpen}
      >
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-0 items-center">
            <img
              className="h-80 w-80 rounded-xl"
              src={props.img}
              alt={props.name}
            />
            <h2 className="text-2xl font-bold mt-8 mb-3 ">{props.name}</h2>
            <h3 className="text-lg ">{props.date}</h3>
            <h2 className="text-xl font-medium mt-2 mb-3">{props.about}</h2>
          </div>
          <p className="text-center">{props.desc}</p>
        </div>
      </Modal>
    </>
  );
}

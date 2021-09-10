function Modal(props: any, setOpenModal: boolean) {
  const handleClick = () => {
    props.setOpenModal(false);
  };

  return (
    <>
      <div className={`relative ${props.isOpen ? 'block' : 'hidden'}`}>
        <div
          onClick={handleClick}
          className="fixed inset-0 bg-gray-900 opacity-40 h-full w-full z-40"
        ></div>
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-xl shadow-2xl ${props.className}`}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Modal;

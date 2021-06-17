import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <div className="flex flex-col justify-center items-center self-center relative min-h-screen">
        <img
          src="assets/svg/404.svg"
          alt="404 image"
          className="w-full lg:w-7/12"
        />
        <div className="text-center absolute lg:bottom-16">
          <h1 className="md:text-3xl font-medium py-8 mt-72 text-gray-700 capitalize">
            Looks like you are lost!
          </h1>

          <Link href="/">
            <a className="w-max btn btn-border-grad text-brand-700">
              Go Back To Home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

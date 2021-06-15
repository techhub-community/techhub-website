import Link from 'next/link'
import Image from 'next/image'
export default function Custom404() {
 /* return (
  	<>
  	<div className="bg-gradient-to-r from-gray-200 to-gray-500">
  	<div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
<div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8 shadow-inner">
<div className="border-t border-gray-200 text-center pt-8">
  	<h1 className="text-9xl font-bold text-pink-800 ">404 </h1>
  	<h1 className="text-6xl font-medium py-8 text-pink-300">oops! Page not found</h1>
  	 <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
<button className="bg-gradient-to-r from-pink-600 to-pink-900 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
	<Link href="/">HOME</Link>
</button>
</div>
</div>
</div>
</div>
  	 </>
  	 ) */
     return (
     <>
     
     
    <div className="w-9/12 m-auto py-8 min-h-screen flex items-center justify-center">


<Image
     
      src="/assets/png/404.jpg"
      alt="Picture of the author"
      width={1500}
      height={1000}
    className="shadow overflow-hidden sm:rounded-lg pb-28 shadow-inner absolute md:w-32 lg:w-48"
    />
<div className="border-0 border-white-200 text-center pt-8 absolute">
    
    <h1 className="text-6xl font-medium py-8 mt-72 text-pink-300">oops! Page not found</h1>
     <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
<button className="bg-gradient-to-r from-pink-600 to-pink-900 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
  <Link href="/">HOME</Link>
</button>
</div>


</div>

     
     
      
     </>
     )
}
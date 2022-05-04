import React from 'react'
import Image from 'next/image'

const index = () => {
  return (
    
<>
    <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
    <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-teal-500 font-medium uppercase rounded-full shadow-sm my-10">Recent</span>
    <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">Blogs</h3>
    <p className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">Html, Css, Javascript, MernStack, Solidity, C#.net etc.</p>
    <div className="relative mx-auto md:w-80">
      {/* <img className="absolute top-1/2 left-4 transform -translate-y-1/2" src="flex-ui-assets/elements/blog/search.svg" alt="" /> */}
      <input className="w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="text" placeholder="Search" />
    </div>
  </div>


    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
    <div tabIndex={0} className="focus:outline-none">
    {/* Remove py-8 */}
    <div className="mx-auto container py-2">
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        {/* Card 1 */}
        <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
  <div className="container flex justify-center">
    <div className="max-w-sm py-2">
      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        
      <Image
      
      src="/devport.png"
      alt="Picture of the author"
      width={500}
      height={320}
    />
        {/* <img className="rounded-t-lg" src="/devport.png" alt="" /> */}
        <div className="py-6 px-8 rounded-lg bg-white">
        <span className="inline-block rounded-min bg-blue-600 text-gray-100 px-1 py-1 text-xs font-bold mr-3 rounded-lg">NextJS</span>
        
          <h1 className="text-gray-700 font-extrabold text-xl my-1 mb-2 hover:text-gray-900 hover:cursor-pointer">Developer Portfolio.</h1>
          <p className="text-gray-700 tracking-wide">I made this for developer community . it was MIT all Beiggner developer can use ...</p>
          <div className="space-x-2 flex">
          <button className="mt-2 py-2 px-4 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:shadow-xl transition duration-400">Git Repo</button>
          <button className="mt-2 py-2 px-4 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:shadow-xl transition duration-400">Details</button>
          </div>
         
        </div>
       
      </div>
    </div>
  </div>
</div>
        {/* Card 1 Ends */}
        {/* Card 4 Ends */}
      </div>
      <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">

      </div>
    </div>
    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
  </div>
  </section>
  </>
  )
}

export default index
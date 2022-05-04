import Link from "next/link";
import React from "react";
import Image from "next/image";


const Navbar = () => {
  return (
<>
<header className="text-gray-600 body-font  ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-sm bg-tansparent">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <BiCodeAlt className="text-4xl font-[600] text-teal-900 cursor-pointer" />
          <span className="ml-3 text-3xl font-extrabold text-teal-600 cursor-pointer">Salman Ghouri Dev</span> */}
            <span className=" text-3xl font-extrabold text-teal-600 cursor-pointer">Dev Blogs</span> 

        </a>

      

        <ul className="    md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-between space-x-4 font-extrabold   hover:text-gray-900  ">
          
          
          <li>
            <Link href="/">
            <a className="stext"> Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a className="stext">Dev Tools</a>
            </Link>
          </li>
         
        </ul>
<div className="mx-3">

  {/* Component Start */}
  <input className="hidden"  type="checkbox" id="toggle_1" defaultValue={1} />
  <label className="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" htmlFor="toggle_1">
    <span className="w-4 h-4 bg-black rounded-full" />
  </label>
  {/* Component End  */}



</div>
        <button className="inline-flex items-center text-white bg-teal-600 border-0 py-1 px-3  rounded-lg focus:outline-none hover:bg-teal-700  text-xl font-bold mt-4 md:mt-0">
        <Link href="https://blog-salmanghouri.vercel.app/"><a>
          My Portfolio
          </a>
          </Link>
        </button>
      </div>
    </header>
 
    </>
  );
};

export default Navbar;

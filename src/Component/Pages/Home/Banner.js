import React from 'react';
import banner from '../../../Img/banner1.png'
import truck from '../../../Img/truck.png'
import pack from '../../../Img/package.png'
import plane from '../../../Img/plane.png'
import { Link } from 'react-router-dom';




const Banner = () => {
    return (
        <div className='z-1'>
           <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to <span className="text-red-700 tracking-tighter">the WareHouse</span>
        <br className="hidden lg:inline-block"/>We Store, We Keep!
      </h1>
      <p className="mb-8 leading-relaxed">The Warehouse is a professional warehouse company where we store and keep the products for a long and short time. We have trained and skilled people for looking after the products which you are giving us to store. Else we also provide shipping and others product based facilities.</p>
      <div className="flex justify-center">
        <Link to='/about'><button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">Explore More</button></Link>
        <Link to='/inventory'><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">See Inventory</button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={banner}/>
    </div>
  </div>
  <hr/>
</section>
            <div className="py-4 bg-white">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="">
                        
                        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  border-2  border-gray-200 flex-shrink-0">
        <img src={truck} alt="" />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">GROUND TRANSPORT</h2>
        <p className="leading-relaxed text-base">Transport began providing transportation solutions to Transport’s contract warehousing customers in the 1980s.</p>
        <Link to='/about' className="mt-3 text-red-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">PACKAGING AND STORAGE</h2>
        <p className="leading-relaxed text-base">Transport offers complete, customized solutions for all of your business storage needs. We are here to help you cordially.</p>
        <Link to='/about' className="mt-3 text-red-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full border-2  border-gray-200  flex-shrink-0">
       <img className="h-20" src={pack} alt="" />
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full border-2  border-gray-200   flex-shrink-0">
       <img src={plane} alt="" />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">LOGISTIC SERVICE</h2>
        <p className="leading-relaxed text-base">Transport offers a host of logistic management services and supply chain solutions. We have expert and trained team for managing these jobs.</p>
        <Link to='/about' className="mt-3 text-red-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>
                        </div>
                    </div>
                </div>
            </div>
    
    );
};

export default Banner;
import React from 'react';
import wclip from '../../../../src/Img/warehouse-clip.png'

const Work = () => {
    return (
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={wclip}/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">This is how we
              <br className="hidden lg:inline-block"/><span className="text-red-700 tracking-tighter">DO OUR WORK...</span>
            </h1>
            <p className="mb-8 leading-relaxed">We believe in service. We are eage to make a good communication with the client and after that we ensure the quality about the service. We belive warehouse management is the vital for any product based business and it's go on reputation. We are very much concern about that. And our whole team work really hard to provide the top class service to our beloved clients.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">Know More About Us</button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Work;
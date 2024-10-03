import React from 'react'
import IntegrationI3 from "../../assets/singularity/IntegrationI3.png";


const Integration4 = () => {
  return (
    <div className='grid gap-12 lg:gap-0 lg:grid-cols-2'>
        <div className='space-y-2 text-center lg:text-left'>
        <h1 className='font-semibold text-[25px] md:text-[35px] lg:text-[40px] xl:text-[46px] bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] inline-block bg-clip-text text-transparent'>
            Enhance Collaboration and User Experience
          </h1>
          <p className="font-medium text-[18px]">
            Integrate Singularity with communication and collaboration tools to
            enhance collaboration, automate documentation, and provide
            personalized support. Streamline workflows, improve user
            satisfaction, and drive innovation in industries like healthcare,
            HR, academia, and more.
          </p>
        </div>
        <div className="grid place-items-center">
          {" "}
          <img className='aspect-auto' src={IntegrationI3} alt="" />{" "}
        </div>
      </div> 
  )
}

export default Integration4
import React from 'react'
import IntegrationI from '../../assets/singularity/Integration1.png'
import Integration2 from './Integration2'
import Integration3 from './Integration3'
import Integration4 from './Integration4'

const Integration1 = () => {
  return (
    <div className='flex justify-center items-start pt-[6rem] pb-[6rem] px-6'>
        <div className='container space-y-[10rem]'>
            <div className='grid gap-12 lg:gap-0 lg:grid-cols-2 min-h-[60vh] place-items-center'>
                <div className='flex justify-center gap-6 items-center lg:items-start flex-col'>
                    <h1 className='font-semibold text-2xl md:text-4xl md:leading-[4rem] lg:text-5xl xl:text-7xl bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] inline-block bg-clip-text text-transparent'>The Singularity Platform</h1>
                    <p className='font-medium text-base lg:text-[18px] text-center lg:text-left'>Unlock the full potential of Singularity by seamlessly integrating it with popular apps and platforms tailored for manufacturers, healthcare providers, and academia. Our Ai-powered assistant can be integrated with industry-specific applications, empowering you to leverage Ai across your workflows</p>
                    <div className='space-x-6'> <button className='active:scale-90 transition-all bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] text-white font-medium px-3 py-2 lg:px-5 lg:py-2 rounded-[4px]'>Start Free Trial</button><button className='active:scale-90 transition-all bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] text-white font-medium px-3 py-2 lg:px-5 lg:py-2 rounded-[4px]'>Integrations</button> </div>
                </div>
                <div className='grid place-items-center'><img className='aspect-auto' src={IntegrationI} alt="" /> </div>
            </div>
            <Integration2/>
            <Integration4/>
            <Integration3/>
        </div>
    </div>
  )
}

export default Integration1
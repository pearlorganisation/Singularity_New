import React from 'react'
import IntegrationI2 from '../../assets/singularity/Integration2.png'
import AIBot from '../../assets/singularity/AIBot.png'



const Integration2 = () => {
  return (
    <div className='space-y-[10rem]'>
        <div className='grid gap-12 lg:gap-0 lg:grid-cols-2'>
            <div className='text-center lg:text-left'>
                <h1 className='font-semibold text-[25px] md:text-[35px] lg:text-[40px] xl:text-[46px] bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] inline-block bg-clip-text text-transparent'>Streamline Operations and Boost Efficiency</h1>
                <p className='font-medium text-[16px] lg:text-[18px]'>Integrating Singularity with your favorite apps and platforms brings the power of Ai to your existing workflows. By automating manual tasks, eliminating data entry errors, and providing real-time insights, Singularity integrations streamline operations and boost efficiency. Experience improved productivity, reduced costs, and optimized resource allocation as you leverage Ai intelligence seamlessly within your familiar work environment.</p>
            </div>
            <div className='grid place-items-center'>
            <img className='aspect-aut' src={AIBot} alt="" />
            </div>
        </div>
        <div className='grid gap-12 lg:gap-0 lg:grid-cols-2'>
            <div className='grid place-items-center'><img className='aspect-auto' src={IntegrationI2} alt="" /></div>
            <div className='text-center lg:text-left'>
            <h1 className='font-semibold text-[25px] md:text-[35px] lg:text-[40px] xl:text-[46px] bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] inline-block bg-clip-text text-transparent'>Unlock Valuable Insights and Data-Driven Decision Making</h1>
            <p className='font-medium text-[16px] lg:text-[18px]'>Leverage Singularity integrations to unlock insights, perform interactive conversations with data, and receive real-time recommendations. Make informed decisions, identify trends, and drive growth with Ai-assisted analytics.</p>
            </div>
        </div>
    </div>
  )
}

export default Integration2
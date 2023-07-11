import React from 'react';
import { GrAnnounce } from "react-icons/gr";

const Work = () => {
    return (
        <section>
            <p className='text-center'>WE ARE AWESOME AGENCY</p>
            <div className='text-center mt-2'>
                <h1 className=" text-4xl font-medium">WHAT WE DO</h1>
            </div>
            <div className='grid grid-cols-3 mx-16 my-4'>
                <div className="card w-96">
                    <div className="card-body bg-black">
                        <span className='flex justify-center'><GrAnnounce className="w-12 h-12 rounded-full" style={{ backgroundColor: 'rgb(212,175,55)' }}></GrAnnounce></span>
                        <h1 className='text-black text-center text-xl font-medium' style={{ color: 'rgb(212,175,55)' }}>Aware</h1>
                        <p className='text-black text-center' style={{ color: 'rgb(212,175,55)' }}>As a marketing agency, it is essential for us to recognize the significance of awareness in our day-to-day operations.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <div className="card-body bg-black">
                        <span className='flex justify-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-BiLH-Zgk_IOUqgKVpTOcaoKT61vcP892oktPhSgkzQWmRlHZ7xOEIIuh9SZQC4g-Mc&usqp=CAU' alt="content" className="w-12 h-12 " /></span>
                        <h1 className='text-black text-center text-xl font-medium' style={{ color: 'rgb(212,175,55)' }}>Brainwritting</h1>
                        <p className='text-black text-center' style={{ color: 'rgb(212,175,55)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <div className="card-body bg-black">
                        <span className='flex justify-center'><img src='https://www.slideteam.net/media/catalog/product/cache/1280x720/b/u/business_intelligence_diagram_mind_map_for_growth_powerpoint_templates_0515_Slide01.jpg' alt="content" className="w-12 h-12 " /></span>
                        <h1 className='text-black text-center text-xl font-medium' style={{ color: 'rgb(212,175,55)' }}>Mind Mapping</h1>
                        <p className='text-black text-center' style={{ color: 'rgb(212,175,55)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Work;
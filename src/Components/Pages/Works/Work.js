import React from 'react';
import img1 from '../../../Client work/Eden Apple Pie 12.09.22.jpg';
import img2 from '../../../Client work/Gazi Pipe 24.10.22 v2.jpg';
import img3 from '../../../Client work/Pipe_Post_25_26december2022.png';
import img4 from '../../../Client work/Post 1.png';
import img5 from '../../../Client work/Post-08_05-09-2022.png';
import img6 from '../../../Client work/Post-61_16-10-2022.png';
import img7 from '../../../Client work/Salmon Salad 14.09.22 v2.jpg';
import img8 from '../../../Client work/Shades-13-03-22-v2.png';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <section>
            <p className='text-center'>PORTFOLIO</p>
            <div className='text-center'>
                <h1 className=" text-4xl font-medium">OUR WORK</h1>
                <p className='text-lg mt-4'>We are a dedicated team committed to providing you with exceptional <br /> solutions and top-notch services.</p>
            </div>
            <div className='m-16'>
                <div className='grid grid-cols-4 gap-3'>
                    <div className='div-1 '>
                        <img src={img1} alt="" className='opacity-50 hover:opacity-100' style={{ height: '394px' }} />
                    </div>
                    <div className=''>
                        <img src={img2} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div >
                        <img src={img3} alt="" className='opacity-50 hover:opacity-100' style={{ height: '394px' }} />
                    </div>
                    <div >
                        <img src={img4} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div >
                        <img src={img5} alt="" className='opacity-50 hover:opacity-100' />
                    </div>

                    <div >
                        <img src={img6} alt="" className='-mt-24 opacity-50 hover:opacity-100' style={{ height: '394px' }} />
                    </div>
                    <div >
                        <img src={img7} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div >
                        <img src={img8} alt="" className='-mt-24 opacity-50 hover:opacity-100' style={{ height: '394px' }} />
                    </div>
                </div>
                <div className='flex justify-center mt-5' >
                    <Link to='/work'><button className="btn btn-active px-10 bg-indigo-300">See All</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Work;
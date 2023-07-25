import React from 'react';
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const Message = () => {

    return (
        <div className=''>
            <p className='text-center'>Get in touch</p>
            <div className='text-center'>
                <h1 className='text-4xl font-medium '>CONTACT US</h1>
                <p className='text-lg  mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nihil facilis reiciendis officiis <br /> consectetur reprehenderit eveniet, blanditiis illo exercitationem possimus?</p>
            </div>
            <div className='grid grid-cols-3 m-8'>
                <div className="card w-96 bg-black text-primary-content ">
                    <div className="card-body">
                        <span className='flex justify-center'><FaMobileAlt className='w-12 h-10' style={{ color: 'rgb(212, 175, 55) ' }}></FaMobileAlt></span>
                        <p className='text-center text-xl font-semibold' style={{ color: 'rgb(212, 175, 55) ' }}>Phone</p>
                        <p className='text-center' style={{ color: 'rgb(212, 175, 55) ' }}>+8801777750875</p>
                        <p className='text-center' style={{ color: 'rgb(212, 175, 55) ' }}>+8801716688069</p>
                    </div>
                </div>
                <div className="card w-96 bg-black text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><IoLocationSharp className='w-12 h-10' style={{ color: 'rgb(212, 175, 55) ' }}></IoLocationSharp> </span>
                        <p className='text-center text-xl font-semibold' style={{ color: 'rgb(212, 175, 55) ' }}>Address</p>
                        <p className='text-center' style={{ color: 'rgb(212, 175, 55) ' }}>Rangs Shawpnil, Level 5, House 2,  <br /> Road ⅔, Banani, Dhaka 1213</p>

                    </div>
                </div>
                <div className="card w-96 bg-black text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><MdAlternateEmail className='w-12 h-10' style={{ color: 'rgb(212, 175, 55) ' }}></MdAlternateEmail></span>
                        <p className='text-center text-xl font-semibold' style={{ color: 'rgb(212, 175, 55) ' }}>Email</p>
                        <p className='text-center' style={{ color: 'rgb(212, 175, 55) ' }}>raincloud.hr@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className=' my-5 space-y-4' >
                <div className='ml-36 space-x-1' >
                    <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-lg" />
                </div>
                <div className='ml-36'>
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-5xl" />
                </div>
                <div className='ml-36'>
                    <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full h-56 max-w-5xl" ></textarea>
                </div>
                <div className='' >
                    <button className="btn btn-outline">Send Message</button>
                </div>
                {/* style={{ marginLeft: '580px', marginTop: '2%' }} */}
            </div>
        </div>
    );
};

export default Message;
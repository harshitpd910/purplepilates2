
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iko54r7', 'template_t6pzush', form.current, {
        publicKey: 'Tsqx8vJpuF0J6Pg1H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      form.current.reset();
  };



  return (
    <contact
    id='contact'
    className='flex flex-col justify-center items-center sm:px-16 px-6 py-16  text-center  '
    >
        <h1 
        className='font-secondry text-[36px] mb-8'
        >
            Contact Us
        </h1>

        <div
        className='w-full  mt-10   flex flex-col  items-center justify-center gap-10  md:flex-row '
        >

           

            <div
            className=' flex justify-center items-center md:w-[50%]'
            >
                <div
                className='w-[100%] bg-white  p-4 text-black rounded-xl  '
                >
                   









<form  className=" space-y-4 w-[100%]  p-4 border rounded-md font-primary"
ref={form} onSubmit={sendEmail}
>
  <div className="flex items-center justify-between">
    <label htmlFor="first_name" className="  text-sm font-medium">
      First Name
    </label>
    <input
      type="text"
      name="from_name"
      id="first_name"
      required
      className="w-[75%] border border-black-300 px-3 py-2 rounded-md"
    />
  </div>
  <div className="flex items-center justify-between">
    <label htmlFor="last_name" className=" text-sm font-medium">
      Last Name
    </label>
    <input
      type="text"
      name="from_lastname"
      id="last_name"
      required
      className="w-3/4 border border-gray-300 px-3 py-2 rounded-md"
    />
  </div>
  <div className="flex items-center justify-between ">
    <label htmlFor="email" className="   text-sm font-medium">
      Email
    </label>
    <input
      type="email"
      name="from_email"
      id="email"
      required
      className="w-3/4 border border-gray-300 px-3 py-2 rounded-md"
    />
  </div>
  <div className="flex items-center justify-between ">
    <label htmlFor="phone" className="   text-sm font-medium">
      Phone
    </label>
    <input
      type="tel"
      name="from_phone"
      id="phone"
      required
      className="w-3/4 border border-gray-300 px-3 py-2 rounded-md"
    />
  </div>
  <div className="flex items-center justify-between ">
    <label htmlFor="message" className=" text-sm font-medium">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      required
      rows="3"
      className="w-3/4 border border-gray-300 px-3 py-2 rounded-md"
    ></textarea>
  </div>
  <button type="submit" className="bg-bgp text-white py-2 px-4 rounded">
    Submit Details
  </button>
</form>


                </div>
            </div>

        </div>

    </contact>
  )
}

export default Contact
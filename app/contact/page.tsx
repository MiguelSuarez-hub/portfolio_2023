'use client'

import { useState, FormEventHandler } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [form, setForm] = useState({
    name: '', 
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_xvzjl8k', 
      'template_g6oks2o',
      {
        from_name: form.name,
        to_name: 'Miguel',
        from_email: form.email,
        to_email: 'miguel.suarezf05@gmail.com',
        message: form.message,
      },
      'WknDMqwM1fQTa8bwX'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you, I will answer you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong')
    }
    )
  }

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl ">
          Get in touch!
        </h1>
      </div>

      <div className="items-center space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="flex items-center justify-center"><svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className='w-56 h-56 lg:w-80 lg:h-80 animate-bounce border-2 mt-16 lg:mt-20 border-slate-400 dark:border-slate-700 text-slate-400 dark:text-slate-700 rounded-full'
    >
      <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" />
    </svg></div>
      <form 
          onSubmit={handleSubmit}
          className=' mt-12 flex flex-col gap-2 border-1 border-gray-500 bg-slate-400 dark:border-gray-800 rounded-lg dark:bg-slate-700 p-5'
        >
          <label className='flex flex-col'>
            <span className= 'font-medium mb-4'>Your name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={(e) => {setForm({...form, [e.target.name]: e.target.value });}}
              placeholder='Write your name here'
              className='bg-gray-200 dark:bg-slate-900 py-4 px-6 rounded-lg outlined-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={(e) => {setForm({...form, [e.target.name]: e.target.value });}}
              placeholder="What's your email?"
              className='bg-gray-200 dark:bg-slate-900 py-4 px-6 rounded-lg outlined-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className=' font-medium mb-4'>Your message</span>
            <textarea 
              rows={3}
              name='message'
              value={form.message}
              onChange={(e) => {setForm({...form, [e.target.name]: e.target.value });}}
              placeholder='Write your message here'
              className='bg-gray-200 dark:bg-slate-900 py-4 px-6 rounded-lg outlined-none border-none font-medium'
              required
            />
          </label>
          <button
            type='submit'
            className='bg-gray-200 dark:bg-slate-900 py-3 px-8 outline-none w-fit font-bold shadow-md dark:shadow-gray-600 rounded-xl hover:scale-110'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}

'use client'
import Image from 'next/image'
import { useState } from 'react'

const Home = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    prod: "",
    suggestion: ""
  })
  const [status, setStatus] = useState(null);


  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          prod: user.prod,
          suggestion: user.suggestion
        })
      })
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          prod: "",
          suggestion: ""
        })
        setStatus('success');
      } else {
        setStatus('error');
      }

    } catch (e) {
      console.log(e)
    }

  }

  return (
    <>
      <div className='flex-row justify-center items-center'>
        <div className='capitalize text-4xl mt-6 font-mono text-teal-200 text-center'>user feedback</div>
        <div className='flex justify-center font-mono'>


          <form onSubmit={handleSubmit} className='mt-[30px]'>
            <div className='border-[1px] m-2 rounded-lg border-slate-400 w-[500px] grid text-slate-300'>
              <label htmlFor="username" className='m-3'>
                Name <span className='text-red-600'>*</span>
              </label>
              <input type="text" name="username" id="username"
                placeholder="Enter your name"
                value={user.username}
                onChange={handleChange}
                required
                className='text-teal-200 ring-0 focus:outline-none focus:border-b-[1px] focus:border-teal-200  m-3 bg-[#0f001b]'
              />
            </div>

            {/* email */}
            <div className='border-[1px] m-2 rounded-lg border-slate-400 w-[500px] grid text-slate-300'>
              <label htmlFor="email" className='m-3'>
                Email ID <span className='text-red-600'>*</span>
              </label>
              <input type="email" name="email" id="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
                required
                className='text-teal-200 focus:outline-none focus:border-b-[1px] focus:border-teal-200 m-3 bg-[#0f001b]'
              />
            </div>

            {/* products */}
            <div className='border-[1px] m-2 rounded-lg border-slate-400 w-[500px] grid text-slate-300'>
              <label htmlFor="prod" className='m-3'>
                Product <span className='text-red-600'>*</span>
              </label>
              <input type="text" name="prod" id="prod"
                placeholder="Enter your product"
                value={user.prod}
                onChange={handleChange}
                required
                className='text-teal-200 focus:outline-none focus:border-b-[1px] focus:border-teal-200 m-3 bg-[#0f001b]'
              />
            </div>


            {/* suggestion */}
            <div className='border-[1px] m-2 rounded-lg border-slate-400 w-[500px] grid text-slate-300'>
              <label htmlFor="suggestion" className='m-3'>
                Suggestion <span className='text-red-600'>*</span>
              </label>
              <textarea type="text" name="suggestion" id="suggestion"
                placeholder="Give your suggestions"
                value={user.suggestion}
                onChange={handleChange}
                required
                rows={3}
                cols={400}
                className='text-teal-200 focus:outline-none focus:border-b-[1px] m-3 bg-[#0f001b]'
              />
            </div>

            <div className='flex justify-center items-center'>
              <div className='flex-row justify-center items-center'>

                <button type="submit"
                  className='bg-teal-300 h-[40px] rounded-lg hover:rounded-2xl hover:border-2 hover:border-violet-700 ease-in-out transition-all w-[150px] hover:bg-gradient-to-l from-teal-200 to-blue-300 hover:text-violet-900 hover:text-lg'
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>

        </div>
        <div className='text-center'>

          {status === 'success' && <p className='text-gray-400 m-3'>Thank you for your message!</p>}
          {status === 'error' && <p className='text-red-400 m-3'>There was an error submitting your message. Please try again.</p>}
        </div>
      </div>
    </>
  )
}

export default Home;

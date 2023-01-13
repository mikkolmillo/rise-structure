import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-full">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
          </div>
          <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8 min-h-[40rem]">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Feel the Power</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
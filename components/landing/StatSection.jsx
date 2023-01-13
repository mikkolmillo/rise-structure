import React from 'react'

const StatSection = () => {
  return (
    <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
      <dl className="text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-4 sm:gap-8">
        <div className="flex flex-col">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Award Winnings</dt>
          <dd className="order-1 text-5xl font-bold tracking-tight text-white">100%</dd>
        </div>
        <div className="mt-10 flex flex-col sm:mt-0">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Total Projects</dt>
          <dd className="order-1 text-5xl font-bold tracking-tight text-white">24/7</dd>
        </div>
        <div className="mt-10 flex flex-col sm:mt-0">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Govt. Projects</dt>
          <dd className="order-1 text-5xl font-bold tracking-tight text-white">100k+</dd>
        </div>
        <div className="mt-10 flex flex-col sm:mt-0">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Satisfied Clients</dt>
          <dd className="order-1 text-5xl font-bold tracking-tight text-white">100k+</dd>
        </div>
      </dl>
    </div>
  )
}

export default StatSection
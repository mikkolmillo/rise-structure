import React from 'react'

const Heading = ({ title, subtext }) => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:py-10 lg:px-8">
      <div className="text-center">
        <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl uppercase mb-8">
          {title}
        </p>
        <div className="max-w-xl mx-auto border-t border-red-500" />
        {subtext && (
          <p className="mx-auto mt-5 max-w-6xl text-xl text-gray-500">
            {subtext}
          </p>
        )}
      </div>
    </div>
  )
}

export default Heading
import React from 'react'
import CardBook from '../component/CardBook'

export default function Favorite() {
  return (
    <>
    <section className='bg-white dark:bg-gray-900'>
    <div className="max-w-screen-xl mt-20 p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        </div>
    </section>
    </>
  )
}

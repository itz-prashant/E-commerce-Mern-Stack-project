import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoopingHeader from './ShoopingHeader'

const ShopingLayout = () => {
  return (
    <div className='flex flex-col bg-white overflow-hidden '>
        {/* common header */}
        <ShoopingHeader />
        <main className='flex flex-col w-full'>
            <Outlet />
        </main>
    </div>
  )
}

export default ShopingLayout
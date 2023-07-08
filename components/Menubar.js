import React, { useState } from 'react'
import Link from 'next/link'
import {HiOutlineHome} from 'react-icons/hi'
import {FaGraduationCap} from 'react-icons/fa'
import {IoGameController} from 'react-icons/io5'
import {BsStopwatchFill, BsInfoCircle} from 'react-icons/bs'

export default function Menubar ({children}) {

    return (
        <div className = 'flex'>
            <div className = 'fixed flex w-full h-20 bg-gradient-to-r from-[#20b8b3] to-[#30bd92] justify-between items-center px-20 z-40'>
                    <div className = 'w-[30px]'>
                        <Link href = '/'>
                                <HiOutlineHome size={24} color='#18181b'/>
                        </Link>
                    </div>
                    <div className = 'w-[30px]'>
                        <Link href = '/Learn'>
                                <FaGraduationCap size={23} color='#18181b'/>
                        </Link>
                    </div>
                    <div className = 'w-[30px]'>
                        <Link href = '/Play'>
                                <IoGameController size={22} color='#18181b' />
                        </Link>
                    </div>
                    <div className = 'w-[30px]'>
                        <Link href = '/Test'>
                                <BsStopwatchFill size={22} color='#18181b'/>
                        </Link>
                    </div>
                   <div className = 'w-[30px]'>
                        <Link href = '/About'>
                                <BsInfoCircle size={20} color = '#18181b'/>
                        </Link>
                   </div>
            </div>
            <main className = 'flex overflow-x-hidden bg-[#0e0d15]'> {children} </main>
           
        </div>
    )
}
import React from 'react'
import Image from 'next/image'

export default function AccountPanel () {
    return (
        <div className = "grid grid-rows-3 invisible lg:visible w-[17.5vw] h-screen bg-zinc-200 -ml-2">
            <div className = 'p-7 h-20'>
                <Image src = '/rabbit.png' alt = ''  quality = {100}
                    width = '100'
                    height = '100'
                    className = 'w-[10vw] ml-[2vw] mt-10'/>
                <p className = 'text-center text-xl -mt-13 font-playfair'>Welcome, Guest!</p>
            <p className = 'text-sm text-center font-lado'>Sign in to track your progress!</p>
            </div>
            <div>
            
            </div>
            <div>

            </div>
        </div>
        
    )
}
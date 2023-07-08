import React from 'react'
import Image from 'next/image'

export default function Header ({title}) {
    return (
        <div className = 'flex w-[95vw] justify-between p-4 pt-32 bg-[#0e0d15]'>
            <div className = "w-[40vw]">
            <p className = 'text-4xl font-lilita mt-40 ml-10 text-[#e3dff0]'>LEARN THE TRACHTENBERG METHOD</p>
            <p className = "text-sm font-bold font-montserrat text-[#26b595] ml-10 mt-8">BEAT THE CALCULATOR</p>
            </div>
            <div>
            <Image src = '/plus5odd_header.png' alt = ''  quality = {100}
                    width = '1000'
                    height = '1000'
                    className = 'w-[50vw]-ml-22 lg:-ml-24 lg:ml-4 mt-18 mr-5 pt-10 pb-20'/>
            </div>
        
        </div>
    )
}
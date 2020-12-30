import React from 'react'

function TopBar({logo}) {
    return (
        <div className="w-full h-auto flex-row flex bg-color1 justify-between">
            <div className="xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-11 bg-color2 shadow-sm rounded-br-full">
                <p className="lg:mx-10 font-monstserrat md:mx-5 font-black text-lg text-color4 uppercase text-center"> Mal Pelayanan Publik Kabupaten Pandeglang</p>
            </div>
            <div div className="flex flex-row items-center">
                <img className="mr-5 mt-2 object-contain h-14 pointer-events-none" src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default TopBar

import React, { Fragment, useState } from 'react'
import ReactDOM from "react-dom";
import logo from '../newsLogo.png'


function Navbar({ onCountryClick }) {
 
    const countries = [{
        name: 'US',
        countryKey: "us",
    }, {
        name: "JAPAN",
        countryKey: "jp"
    },
    {
        name: "INDIA",
        countryKey: "in"
    }];

    return (
        <Fragment>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <div class="flex items-center ">
                        <img src={logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NBC NEWS</span>
                    </div>
                </div>
            </nav>
            <nav class="dark:bg-gray-700">
                <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <div class="flex items-center">
                        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">                            {
                                countries.map((currCountry, idx) =>
                                (<li key={idx} >
                                    <button  onClick={() => onCountryClick(currCountry.countryKey)} class="text-gray-900 dark:text-white hover:underline cursor-pointer ">{currCountry.name}</button>
                                </li>))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar


 

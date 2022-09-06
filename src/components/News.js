import React from 'react'

function News({ title, img, content, URL }) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between ">
            <div class="px-6 py-4">
                <img class="w-full" src={img} alt="Sunset in the mountains" />
                <div class="font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-base">
                    {content}
                </p>


            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={URL} >Read More</a></span>
            </div>

        </div>
    )
}

export default News

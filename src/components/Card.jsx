import React from 'react'

const Card = (prop) => {
    return (
        <a href={prop.elem.url} target='_blank'>
            <div className='bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl shadow-md p-3 w-64 hover:scale-105 hover:shadow-2xl transition duration-300'>

                <div className="relative overflow-hidden rounded-lg">
                    <img
                        loading='lazy'
                        className='w-full h-40 object-cover transition duration-300 hover:scale-110'
                        src={`https://picsum.photos/id/${prop.elem.id}/300/200`}
                        alt=""
                    />
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2">
                        <h2 className='text-white text-sm font-semibold'>
                            {prop.elem.author}
                        </h2>
                    </div>

                </div>

            </div>
        </a>
    )
}

export default Card
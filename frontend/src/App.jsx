import React from 'react';
function App() {


    return (
        <>
            <div className='flex h-dvh w-dvw flex-col items-center justify-center gap-2 bg-gray-900 p-2 text-gray-200'>

                <div className=' flex w-full justify-center rounded-md bg-gray-800 p-4'>
                    <h1 className='text-4xl font-bold'>PROJECTS</h1>
                </div>

                <div className='flex h-full w-full flex-col justify-center gap-2 rounded-md md:flex-row'>

                    <div className='flex h-full w-full items-center justify-start rounded-md bg-gray-800 pl-16 md:justify-center md:p-2'>

                        <ul className='ulHover list-disc space-y-1 font-bold md:text-2xl'>


                            <li className=' fadeanim hover:text-blue-600'><a href='https://smoriginals-river.onrender.com' target='_blank'>Instagram Mini App</a>
                            </li>
                            <a href='https://github.com/smoriginals/instagram-mini-clone' target='main' className='hover:text-gray-900'>Github</a>

                            <li className='fadeanim hover:text-blue-600'><a href='https://smoriginals.github.io/Web-Cam' target='_blank'>CromaKey WebCam</a></li>
                            <a href='https://github.com/smoriginals/Web-Cam' target='main' className='hover:text-gray-900'>Github</a>


                            <li className='fadeanim hover:text-blue-600'><a href='https://smoriginals-garden.vercel.app' target='_blank'>E-Commerce Garden UI</a></li>
                            <a href='https://github.com/smoriginals/anapp' target='main' className='hover:text-gray-900'>Github</a>


                            <li className='fadeanim hover:text-blue-600'><a href='https://smoriginals.github.io/Smooth-Nav' target='_blank'>Stripe.com Navigation UI</a></li>
                            <a href='https://github.com/smoriginals/Smooth-Nav' target='main' className='hover:text-gray-900'>Github</a>


                            <li className='fadeanim hover:text-blue-600'><a href='https://smoriginals.github.io/Text-to-Speech' target='_blank'>Text-to-Speech</a></li>
                            <a href='https://github.com/smoriginals/Text-to-Speech' target='main' className='hover:text-gray-900'>Github</a>


                            <li className='fadeanim hover:text-blue-600'><a href='https://smoriginals.github.io/Web-Drump' target='_blank'>WebDrum</a></li>
                            <a href='https://github.com/smoriginals/Web-Drump' target='main' className='hover:text-gray-900'>Github</a>

                            

                        </ul>
                    </div>


                    <div className='flex h-full w-full items-center justify-start rounded-md bg-gray-800 pl-16 md:justify-center md:p-2'>
                        <ul className='list-disc space-y-1 font-bold md:text-2xl'>
                            <li className='fadeanim hover:text-blue-600'>
                                <a href='https://smoriginals.github.io/dropdown' target='_blank'>
                                    Regex Based Search
                                </a>
                            </li>
                            <a href='https://github.com/smoriginals/dropdown' target='main' className='hover:text-gray-900'>Github</a>


                            <li className='fadeanim hover:text-blue-600'><a href='https://smoriginals.github.io/Noughts-Crosses' target='_blank'>Noggets & Crosses</a></li>
                            <a href='https://github.com/smoriginals/Noughts-Crosses' target='main' className='hover:text-gray-900'>Github</a>


                            <li className='fadeanim hover:text-blue-600'><a href='https://smoriginals.github.io/GeoLocation-Compass' target='_blank'>GeoLocation Compass</a></li>
                            <a href='https://github.com/smoriginals/GeoLocation-Compass' target='main' className='hover:text-gray-900'>Github</a>


                            <li className='fadeanim hover:text-blue-600'><a href='https://smoriginals.github.io/Currency-Converter' target='_blank'>Currency Converter</a></li>
                            <a href='https://github.com/smoriginals/Currency-Converter' target='main' className='hover:text-gray-900'>Github</a>


                            <li className='fadeanim hover:text-blue-600'><a href='https://smoriginals.github.io/Paint-Web' target='_blank'>WebPaint</a></li>
                            <a href='https://github.com/smoriginals/Paint-Web' target='main' className='hover:text-gray-900'>Github</a>


                            <li className='fadeanim hover:text-blue-600'><a href='https://livclock.netlify.app' target='_blank'>LivClock</a></li>
                            <a href='https://github.com/smoriginals/Clock' target='main' className='hover:text-gray-900'>Github</a>


                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

import React from 'react';
function App() {


    return (
        <>
            <div className='flex h-dvh w-dvw flex-col items-center justify-center gap-2 bg-gray-900 p-2 text-gray-200'>

                <div className=' flex w-full justify-center rounded-md bg-gray-800 p-4'>
                    <h1 className='text-4xl font-bold'>PROJECTS</h1>
                </div>

                <div className='flex h-full w-full justify-center gap-2 rounded-md'>

                    <div className='flex h-full w-full items-center justify-center rounded-md bg-gray-800'>
                        <ul className='space-y-4'>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals-river.onrender.com' target='_blank'>Instagram Mini App</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://anapp.vercel.app' target='_blank'>E-Commerce Garden UI</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals.github.io/Web-Cam' target='_blank'>CromaKey WebCam</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals.github.io/Web-Drump' target='_blank'>WebDrum</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals.github.io/Smooth-Nav' target='_blank'>Stripe.com Navbar Navigation UI</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals.github.io/Text-to-Speech' target='_blank'>Text-to-Speech</a></li>
                        </ul>
                    </div>


                    <div className='flex h-full w-full items-center justify-center rounded-md bg-gray-800'>
                        <ul className='space-y-4'>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals.github.io/dropdown' target='_blank'>Regex Based Search</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals.github.io/Noughts-Crosses' target='_blank'>Noggets & Crosses</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals.github.io/GeoLocation-Compass' target='_blank'>GeoLocation Compass</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals.github.io/Currency-Converter' target='_blank'>Currency Converter</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://smoriginals.github.io/Paint-Web' target='_blank'>WebPaint</a></li>
                            <li className='text-4xl font-semibold hover:text-blue-500'><a href='https://livclock.netlify.app' target='_blank'>LivClock</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

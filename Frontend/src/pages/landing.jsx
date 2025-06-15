import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
export default function LandingPage() {
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <a href="#" class=" text-2xl mr-4 block cursor-pointer py-1.5 text-white font-bold">
                        Talk<span class="text-blue-600 ">Sphere</span>
                    </a>
                </div>
                <div className='navlist'>
                    <p>Register</p>
                    <p>Join as Guest</p>
                    <div role='button'>
                        <p>
                            Login
                        </p>
                    </div>
                </div>
            </nav>
            <div className="landingMainContainer">
                <div>
                    <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
                        <span class="text-blue-600 ">Connect</span> with your loved ones!
                    </h1>
                    <p class="mt-4 text-lg text-white">
                        Cover distance with your loved ones with just a click.
                    </p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png
                    " alt="" />
                </div>
            </div>
        </div>
    )
}

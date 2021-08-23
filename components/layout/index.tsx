import React from 'react'
import NavBar from '../navbar'
import Footer from '../footer'


export default function Layout({ children }: { children: React.ReactElement }) {

    const {
        props: {
            altHeader
        }
    } = children

    return (
        <div className="relative bg-white overflow-hidden">
            <div className="mx-auto">
                <div className="relative z-10 bg-white lg:w-full">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <NavBar alt={altHeader} />
                    <main className="bg-white">
                        {children}
                    </main>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
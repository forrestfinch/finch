/* This example requires Tailwind CSS v2.0+ */
import creeds from './creeds'

const Manifesto = () => {
    return (
        <div className="bg-gray-50 overflow-hidden" id="manifesto">
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <svg
                    className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
                </svg>

                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Our Manifesto</h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900">Tools for better living</p>
                        <p className="mt-4 text-lg text-gray-500">
                            Forrest &amp; Finch is a full-service consulting firm that was founded on the premise of delivering predictable outcomes for our clients. 
                            <br/> 
                            <br/> 
                            Our founders and team members have industry experience and held senior positions in a wide variety of companies – from emerging startups to large, global firms – and we have taken our combined experiences and developed a unique approach that is supported by the principles of deep expertise, integrity, transparency, and dependability.
                        </p>
                    </div>
                    <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                        {creeds.map((creed) => (
                            <div key={creed.name}>
                                <dt>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <creed.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{creed.name}</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">{creed.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}


export default Manifesto
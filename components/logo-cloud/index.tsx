import Image from 'next/image'
import clients from './clients'


const LogoCloud = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                    TRUSTED BY SOME OF THE MOST PROMISING STARTUPS AROUND THE WORLD
                </p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
                    {clients.map((client, key) => (
                        <div key={key} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <Image
                                className="max-h-12"
                                src={client.logo}
                                alt={client.name}
                                width={client.width}
                                height={client.height}
                            />
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export default LogoCloud
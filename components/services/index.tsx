/* This example requires Tailwind CSS v2.0+ */
import {
    DesktopComputerIcon,
    UserGroupIcon,
    DeviceMobileIcon,
    ShoppingCartIcon,
    ServerIcon,
    CubeTransparentIcon,
} from '@heroicons/react/outline'

const services = [
    {
        name: 'Web Applications',
        description: 'Internet bring a whole new perspective of getting things done. Cloud based application enable your organisation and customers to interact on business transaction more effectively in less time.',
        icon: DesktopComputerIcon
    },
    {
        name: 'Mobile Applications',
        description: 'Building an engaging mobile apps development, getting people to download and use it is require expertise on specific skill. At Finch, we offer Android and iOS native and hybrid mobile app development.',
        icon: DeviceMobileIcon
    },
    {
        name: 'Ecommerce',
        description: 'Internet and cloud together enable a new channel to business which increased the sales in multi fold. ECommerce add much more value and boost your business growth when it is strategically implemented.',
        icon: ShoppingCartIcon
    },
    {
        name: 'Consulting Services',
        description: 'To meet the demands of a competitive marketplace, today business need an technology expert to define, create and enable a structural roadmap to simplify process and operational challenges.',
        icon: CubeTransparentIcon
    },
    {
        name: 'ERP Implementation',
        description: 'For operational efficiency and meet business objective, organisation needs a platform where all stake holder execute task effectively. We leverage entreprise-grade solutions to simplify your business processes and customer engagement.',
        icon: UserGroupIcon
    },
    {
        name: 'Functional Websites',
        description: 'A public facing website built on static HTML can turn out to be a liability for your business and it creates an unwanted overheads. We empower your website and portal with enterprise grade CMS framework.',
        icon: ServerIcon
    },
]

export default function Services() {
    return (
        <div className="relative bg-white py-16 sm:py-24 lg:py-32" id="services">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Our Services</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    We design engineering excellence.
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Our portfolio spans a breadth of technologies from open source to Microsoft (.NET, C# etc.), web development to native mobile applications (iOS, Android) and everything in between. Are you looking to stand out? We plan, design and develop high perfomance websites. Transform and boost your business through the power of creativity.
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, key) => (
                            <div key={key} className="pt-6">
                                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                                <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.name}</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

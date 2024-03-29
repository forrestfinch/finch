/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Contact() {
    return (
        <div className="bg-white" id="contact">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Sales Support</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                An international full-service agency headquartered in Lagos, Nigeria. We craft intuitive digital products for better human experience.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>+234 (803) 722 7918</p>
                                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>bernard@finch.com.ng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Technical Support</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                F&amp;F is a company built around customer satisfaction. We believe it is the lifeblood of a sustainable software service business.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>+234 (906) 473 0079</p>
                                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>support@finch.com.ng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

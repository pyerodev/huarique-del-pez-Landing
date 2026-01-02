"use strict";

export default function Footer() {
    return (
        <footer
            className="bg-white dark:bg-[#102022] border-t border-[#f0f4f4] dark:border-gray-800 pt-16 pb-8 px-4 md:px-10 lg:px-40"
            id="contact"
        >
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-text-main dark:text-white">
                        <div className="size-6 text-primary">
                            <span className="material-symbols-outlined text-2xl">
                                set_meal
                            </span>
                        </div>
                        <h2 className="text-lg font-bold">El Huarique Del Pez</h2>
                    </div>
                    <p className="text-sm text-text-sub dark:text-gray-400 leading-relaxed">
                        Authentic Peruvian seafood experience. Bringing the freshness of the
                        coast to your table with every dish.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary text-text-main transition-colors"
                            href="#"
                        >
                            {/* Placeholder for social icon */}
                            <span className="font-bold text-xs">fb</span>
                        </a>
                        <a
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary text-text-main transition-colors"
                            href="#"
                        >
                            <span className="font-bold text-xs">ig</span>
                        </a>
                        <a
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary text-text-main transition-colors"
                            href="#"
                        >
                            <span className="font-bold text-xs">tw</span>
                        </a>
                    </div>
                </div>
                {/* Links */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-text-main dark:text-white font-bold">
                        Quick Links
                    </h3>
                    <div className="flex flex-col gap-2 text-sm text-text-sub dark:text-gray-400">
                        <a className="hover:text-primary transition-colors" href="#">
                            Home
                        </a>
                        <a className="hover:text-primary transition-colors" href="#menu">
                            Menu
                        </a>
                        <a className="hover:text-primary transition-colors" href="#about">
                            About Us
                        </a>
                        <a
                            className="hover:text-primary transition-colors"
                            href="#reservation"
                        >
                            Reservations
                        </a>
                        <a
                            className="hover:text-primary transition-colors"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </div>
                </div>
                {/* Contact Info */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-text-main dark:text-white font-bold">
                        Contact Us
                    </h3>
                    <div className="flex flex-col gap-3 text-sm text-text-sub dark:text-gray-400">
                        <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                                location_on
                            </span>
                            <span>
                                123 Ocean Drive Ave,
                                <br />
                                Miami, FL 33139
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">
                                call
                            </span>
                            <span>(305) 555-0123</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">
                                mail
                            </span>
                            <span>hello@elhuarique.com</span>
                        </div>
                    </div>
                </div>
                {/* Hours */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-text-main dark:text-white font-bold">
                        Opening Hours
                    </h3>
                    <div className="flex flex-col gap-2 text-sm text-text-sub dark:text-gray-400">
                        <div className="flex justify-between">
                            <span>Mon - Thu</span>
                            <span className="font-medium text-text-main dark:text-gray-300">
                                11:00 AM - 10:00 PM
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Fri - Sat</span>
                            <span className="font-medium text-text-main dark:text-gray-300">
                                11:00 AM - 11:00 PM
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sunday</span>
                            <span className="font-medium text-text-main dark:text-gray-300">
                                12:00 PM - 9:00 PM
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-sub dark:text-gray-500 max-w-[1200px] mx-auto">
                <p>© 2023 El Huarique Del Pez. All rights reserved.</p>
                <div className="flex gap-6">
                    <a
                        className="hover:text-text-main dark:hover:text-white"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="hover:text-text-main dark:hover:text-white"
                        href="#"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}

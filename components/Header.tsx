"use strict";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f0f4f4] dark:border-gray-800">
            <div className="px-4 md:px-10 lg:px-40 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4 text-text-main dark:text-white">
                    <div className="size-8 text-primary">
                        <span className="material-symbols-outlined text-3xl">set_meal</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                        El Huarique Del Pez
                    </h2>
                </div>
                <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                    <div className="flex items-center gap-9">
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#menu"
                        >
                            Menu
                        </a>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#about"
                        >
                            About Us
                        </a>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#reviews"
                        >
                            Reviews
                        </a>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </div>
                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-text-main text-sm font-bold shadow-sm hover:shadow-md">
                        <span className="truncate">Order Now</span>
                    </button>
                </div>
                {/* Mobile Menu Icon */}
                <button className="lg:hidden p-2 text-text-main dark:text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
}

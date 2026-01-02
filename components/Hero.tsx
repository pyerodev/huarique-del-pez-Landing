"use strict";

export default function Hero() {
    return (
        <section className="relative w-full px-4 md:px-10 lg:px-40 py-10 md:py-20 flex justify-center">
            <div className="max-w-[1200px] w-full flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
                {/* Text Content */}
                <div className="flex flex-col gap-6 lg:w-1/2 items-start text-left">
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark dark:text-primary text-xs font-bold uppercase tracking-wide w-fit">
                            <span className="material-symbols-outlined text-sm">
                                restaurant
                            </span>
                            Best Ceviche In Town
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-main dark:text-white">
                            Taste the Soul of the <span className="text-primary">Ocean</span>{" "}
                            in Every Bite.
                        </h1>
                        <p className="text-base md:text-lg text-text-sub dark:text-gray-300 leading-relaxed max-w-lg">
                            Fresh, authentic Peruvian Ceviche delivered to your door or served
                            at our table. Experience the zest of lime and the freshest catch
                            of the day.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 w-full">
                        <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary hover:bg-primary-dark transition-all text-text-main text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5">
                            Book a Table
                        </button>
                        <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-text-main dark:text-white text-base font-bold transition-all shadow-sm hover:shadow-md">
                            View Menu
                        </button>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm text-text-sub dark:text-gray-400">
                        <div className="flex text-yellow-400">
                            <span className="material-symbols-outlined text-[20px] fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-[20px] fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-[20px] fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-[20px] fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-[20px] fill-current">
                                star_half
                            </span>
                        </div>
                        <span className="font-medium">4.9/5</span>
                        <span>from 500+ happy customers</span>
                    </div>
                </div>
                {/* Hero Image */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            data-alt="Close up of fresh Peruvian ceviche bowl with lime and onions"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbtDCRCLgdzs_fctTTHBAw53ygP06Pt7Nbqz7VpjeFI5fQ5N1hFSD15Z2Z3jCYLh_fI3ChGPf5NkxtRnz6cXaOpfAI9UIEZod6hzOIZr9tT4KpfoK9YbT9HADe2nxet486YAK0UBlc_TrhZtCEbJhrwMXufgMnr7vaoGp112oKFuVd_6a3BJQK21JKUbUFhj3kL_u9W8UoYs3_bknB20BJl2Ci03AeJ_ym3wgx9hjV-QjrlxYDVTvE-idCvi2vfD6So28f1RfiMwfh")',
                            }}
                        ></div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden md:flex">
                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                            <span className="material-symbols-outlined">eco</span>
                        </div>
                        <div>
                            <p className="text-xs text-text-sub dark:text-gray-400 font-medium uppercase">
                                Freshness Guaranteed
                            </p>
                            <p className="text-sm font-bold text-text-main dark:text-white">
                                Daily Catch
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

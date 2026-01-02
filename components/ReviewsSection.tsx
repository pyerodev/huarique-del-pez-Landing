"use strict";

export default function ReviewsSection() {
    return (
        <section
            className="px-4 md:px-10 lg:px-40 py-16 bg-white dark:bg-[#15282a]"
            id="reviews"
        >
            <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white mb-3">
                        What Our Customers Say
                    </h2>
                    <p className="text-text-sub dark:text-gray-400">
                        We love our customers and they love us. Here is what they have to
                        say.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Review 1 */}
                    <div className="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-transparent hover:border-primary/30 transition-all shadow-sm">
                        <div className="flex items-center gap-1 text-yellow-400 mb-4">
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                        </div>
                        <p className="text-text-main dark:text-gray-200 mb-6 italic">
                            "The best ceviche I've had outside of Lima. The Leche de Tigre is
                            absolutely divine. A must-visit!"
                        </p>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                                data-alt="Portrait of a male customer"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAT0yH9xsUdhjjsKqyQzF1WD9PC0IKaCdj5ICaKoo06kHgzZL1F_3GZLgq5PkQM2NXjPt1G2XdKAqLXTDEbCrA71awEnuEgWASsXrpN1yLst61gv0392XbfQbyh1uqS6L0PWEY9-uQwBSMQLgyc_pxfHiPN4E-KWZNawPII_QnkR0WAFDum2AqJLdMqgL4aF9J0XeCdsbLB32JnXUFa4-ZnqN35tEDgo1dygNPHasHyk5qGGI_m0-IjgLFGnSoWhGg4vzBf4Kb6LmjU")',
                                }}
                            ></div>
                            <div>
                                <p className="font-bold text-sm text-text-main dark:text-white">
                                    Carlos M.
                                </p>
                                <p className="text-xs text-text-sub dark:text-gray-500">
                                    Local Guide
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Review 2 */}
                    <div className="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-transparent hover:border-primary/30 transition-all shadow-sm">
                        <div className="flex items-center gap-1 text-yellow-400 mb-4">
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                        </div>
                        <p className="text-text-main dark:text-gray-200 mb-6 italic">
                            "Great atmosphere and even better food. The seafood platter was
                            fresh and massive. Highly recommend for date night."
                        </p>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                                data-alt="Portrait of a female customer"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDOYh5R_E4G9ef66PXTAmFm_bBtl3dUxUUjI0SEaAZmG61nqI8UMpgwNy0BIPdNwm787jEB62ycMDNb2F0K4_KhQKBKh2_J_RlD4bMpSkDjF06iOSk2Dn7yLYJk75NZBLqMrnsCX9PRmFfS4TCTaBzMxSlMBQbe7QYgsa6uin9IM5APOHvIdDB3KC0wVijtSiG5QSN8rE9DluVqguO57HAQKzLyxjsZoO9d7db7rFHjz8RKluaVJP2XUu0hqE7kZ7YAU6orS1Tgwmt")',
                                }}
                            ></div>
                            <div>
                                <p className="font-bold text-sm text-text-main dark:text-white">
                                    Sarah Jenkins
                                </p>
                                <p className="text-xs text-text-sub dark:text-gray-500">
                                    Food Blogger
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Review 3 */}
                    <div className="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-transparent hover:border-primary/30 transition-all shadow-sm">
                        <div className="flex items-center gap-1 text-yellow-400 mb-4">
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-sm fill-current">
                                star_half
                            </span>
                        </div>
                        <p className="text-text-main dark:text-gray-200 mb-6 italic">
                            "Fast delivery and the food was still warm and fresh. The
                            packaging was great too. My go-to for Friday dinner."
                        </p>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                                data-alt="Portrait of a male customer"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_2y_RMJ5C4rf2hPKp51QjSRSJHDtopiZlTcgKmKUm3vI4-TkL4jXV93pnTN-4y1MFLxiA8MaiG099WhcUUT_-U0UwPPxVy44sPxPROEagNEcgYsAYzmQX39Onr4yIMS6F2lWmo6YF0gemCVczOJdGHVwO7_A72X8zUyr8Se_7ZrGRsMwZNJoWCH21gHv0pGyOzb9izCpiP2XjInbkOaVoyHWRXcla2kZmakwhwl-ipw0cydsRpcqXZL1mvyYKnOGEpoKleii8Wukl")',
                                }}
                            ></div>
                            <div>
                                <p className="font-bold text-sm text-text-main dark:text-white">
                                    David Chen
                                </p>
                                <p className="text-xs text-text-sub dark:text-gray-500">
                                    Verified Order
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

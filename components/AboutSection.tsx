"use strict";

export default function AboutSection() {
    return (
        <section
            className="px-4 md:px-10 lg:px-40 py-16 md:py-24 bg-background-light dark:bg-background-dark"
            id="about"
        >
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            data-alt="Chef preparing ceviche dish in a kitchen"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0_VOE3LRu0qxq7rQ-mE7JvHXvod65dDgexSH1Wv42e9pgqf6w0bZraG7pUU0pnCltR6cKkn9VcI1FPjiXBEHKhXaAqqLS6mhSERUBVNqIpSbQNzSbvU_za1812rtWwXfZXV7zCDae8Sz5TJRiiKTbRQJQM3Z-mPyJfk1fd8rG9GX2pk0nzUPqMaD4vvgP28RrF2k7S-vd6prvXfsunduzA9ZqBPo-h7oEZGnvPrvgF75ARZlaOsLCTbFcENSN_3l5biIDd09tk3E")',
                            }}
                        ></div>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex flex-col gap-6">
                    <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white">
                        Tradition Meets <span className="text-primary">Modernity</span>
                    </h2>
                    <p className="text-text-sub dark:text-gray-300 text-lg leading-relaxed">
                        At{" "}
                        <span className="font-bold text-text-main dark:text-white">
                            El Huarique Del Pez
                        </span>
                        , we honor the ancient Peruvian tradition of ceviche while embracing
                        modern culinary techniques. Our ingredients are sourced daily from
                        local fishermen to ensure that every dish served is a testament to
                        quality and freshness.
                    </p>
                    <div className="flex gap-8 py-4 border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <p className="text-3xl font-black text-primary">15+</p>
                            <p className="text-sm text-text-sub dark:text-gray-400">
                                Years of Experience
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-primary">20k</p>
                            <p className="text-sm text-text-sub dark:text-gray-400">
                                Happy Diners
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-primary">100%</p>
                            <p className="text-sm text-text-sub dark:text-gray-400">
                                Authentic Taste
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use strict";

export default function MenuSection() {
    return (
        <section
            className="px-4 md:px-10 lg:px-40 py-16 bg-white dark:bg-[#15282a]"
            id="menu"
        >
            <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white mb-2">
                            Our Signature Dishes
                        </h2>
                        <p className="text-text-sub dark:text-gray-400">
                            Culinary masterpieces crafted with passion and tradition.
                        </p>
                    </div>
                    <a
                        className="hidden md:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all"
                        href="#"
                    >
                        See Full Menu{" "}
                        <span className="material-symbols-outlined text-sm">
                            arrow_forward
                        </span>
                    </a>
                </div>
                {/* Carousel / Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="group flex flex-col rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                data-alt="Plate of classic Peruvian ceviche with corn and sweet potato"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKhTIyajixQ3VYulroc9voj8iAPj7aSVErzR3G5QIwPLva5VdkU7Jxzl8-yZ67uUOnflNBAGMyirkyvLxIVm1ORqRC5gD5A-1d7VPM36J0M-QXT2mcWSnfFihVmakOFIyEl20ktw5LZ1fQhzvHEo4A5gNSzNizlYiJFGQInZ5qrMWpCCle4qHLrJ8S4sLgpcYq136t1jC3AbgbkCC_m5n226JO7Dzc1cCgjsrj6BRrWd6Pmswoyim8rU7e6Hb-7mea4k_drN327Lk2")',
                                }}
                            ></div>
                            <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-primary">
                                <span className="material-symbols-outlined">
                                    add_shopping_cart
                                </span>
                            </button>
                        </div>
                        <div className="flex flex-col flex-1 p-5 gap-3">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-bold text-text-main dark:text-white">
                                    Ceviche Clásico
                                </h3>
                                <span className="text-primary font-bold">$18.00</span>
                            </div>
                            <p className="text-sm text-text-sub dark:text-gray-400 line-clamp-2">
                                Fresh fish of the day marinated in lime juice, red onions,
                                cilantro, and limo chili.
                            </p>
                            <button className="mt-auto w-full py-2 rounded-lg bg-primary/10 text-primary-dark dark:text-primary hover:bg-primary hover:text-text-main font-bold text-sm transition-colors">
                                Add to Order
                            </button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="group flex flex-col rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                data-alt="Crispy mixed seafood jalea platter with cassava"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTmUPU0uBLk0c2lI4f-LiLzEJWJv4dtQQxQ88bKW-8a0Hw0Cwn3oO5EfP9846oofIYbI6dxW0LnHhIUl4cYT0LxRwVtHvwRVEbd1VcikHovBMIGLH4ktfjebbE2oDGu4xNBbIQzcvaqOcBxdYaEcRP1r2m2K_qfS3xjzarWcjT1M5FxOngHNo7da9aS6t9Cuf1lUXKOGi8lFAVwYvT1d0GYRHNJ1DQu_cNnVtUMfU9k5Zi_4jB-dRYp_yRXjW9qoWyaBvr2AjVIZRu")',
                                }}
                            ></div>
                            <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-primary">
                                <span className="material-symbols-outlined">
                                    add_shopping_cart
                                </span>
                            </button>
                        </div>
                        <div className="flex flex-col flex-1 p-5 gap-3">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-bold text-text-main dark:text-white">
                                    Jalea Mixta
                                </h3>
                                <span className="text-primary font-bold">$22.00</span>
                            </div>
                            <p className="text-sm text-text-sub dark:text-gray-400 line-clamp-2">
                                Crispy fried mixed seafood served with fried cassava and salsa
                                criolla.
                            </p>
                            <button className="mt-auto w-full py-2 rounded-lg bg-primary/10 text-primary-dark dark:text-primary hover:bg-primary hover:text-text-main font-bold text-sm transition-colors">
                                Add to Order
                            </button>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="group flex flex-col rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                data-alt="Peruvian seafood rice paella style dish"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDICmHtdicB3ha7o62u1Hrn-UV6nL9iz3Cvs9sNC_7a_6kszvHrzfI_nAVJXCTpKIMZH0TIEH8P3mxPqbl8FhyuQKnMs1ZlVCHEidcpp0k5L4wBlOo7MjpkR2rxGP6sD2u2nI3mHsKOPRYOWOK5jY8oSYp47ocqaRN1VefJNvI1j6GMEuiuN2eJUnG5URSUItIMhyp0iKhSqm7bf3YYqv2Vh9c8QTXD03LGaE7BE-pc06cd_KaeE_o8nfXqBif98G_2_Uy55qWZHoSi")',
                                }}
                            ></div>
                            <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-primary">
                                <span className="material-symbols-outlined">
                                    add_shopping_cart
                                </span>
                            </button>
                        </div>
                        <div className="flex flex-col flex-1 p-5 gap-3">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-bold text-text-main dark:text-white">
                                    Arroz con Mariscos
                                </h3>
                                <span className="text-primary font-bold">$20.00</span>
                            </div>
                            <p className="text-sm text-text-sub dark:text-gray-400 line-clamp-2">
                                Peruvian-style paella. Rice cooked with mixed seafood, peppers,
                                and spices.
                            </p>
                            <button className="mt-auto w-full py-2 rounded-lg bg-primary/10 text-primary-dark dark:text-primary hover:bg-primary hover:text-text-main font-bold text-sm transition-colors">
                                Add to Order
                            </button>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="group flex flex-col rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                data-alt="Causa Rellena yellow potato cake with chicken filling"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcxtGqBsUGHHj1XapbBya56In7swPCeGXouRfyLP4lcgmedgHPWnQ1EPON2D6GZilyNuD3tNFtJrDtdwnhGEYHMGUyNMoYVvc918ko7a726Xn2JcVpqHXgYDGNOZ0PJtFVQsNAAFNUxGZpDcTtqcSX9GmXvTsR_p_aD9CvBDFk71JacUwI7h6gFxAglSXUVVIzDfjvlRigr_CyO_a8Lhn1yXfjdWKo8oOHbM9U9lZZ8I2gFfENmWNAU49k_Bbl-5YvUtq8zOsiFRY6")',
                                }}
                            ></div>
                            <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-primary">
                                <span className="material-symbols-outlined">
                                    add_shopping_cart
                                </span>
                            </button>
                        </div>
                        <div className="flex flex-col flex-1 p-5 gap-3">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-bold text-text-main dark:text-white">
                                    Causa Rellena
                                </h3>
                                <span className="text-primary font-bold">$14.00</span>
                            </div>
                            <p className="text-sm text-text-sub dark:text-gray-400 line-clamp-2">
                                Seasoned mashed yellow potato terrine layered with chicken
                                salad.
                            </p>
                            <button className="mt-auto w-full py-2 rounded-lg bg-primary/10 text-primary-dark dark:text-primary hover:bg-primary hover:text-text-main font-bold text-sm transition-colors">
                                Add to Order
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex justify-center mt-4">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-[#f0f4f4] dark:bg-gray-700 text-text-main dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
}

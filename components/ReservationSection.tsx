"use strict";

export default function ReservationSection() {
    return (
        <section className="px-4 md:px-10 lg:px-40 py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1200px] mx-auto bg-text-main dark:bg-[#1f373a] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(#13daec 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                    }}
                ></div>
                <div className="relative z-10 flex flex-col gap-4 text-white max-w-xl text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-black">
                        Ready to taste the ocean?
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Book your table now for an unforgettable dining experience or order
                        online for delivery.
                    </p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full md:min-w-[320px]">
                        <h3 className="text-text-main dark:text-white font-bold mb-4">
                            Quick Reservation
                        </h3>
                        <form className="flex flex-col gap-3">
                            <input
                                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                type="date"
                            />
                            <div className="flex gap-3">
                                <input
                                    className="w-1/2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white focus:ring-2 focus:ring-primary outline-none"
                                    type="time"
                                />
                                <select className="w-1/2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white focus:ring-2 focus:ring-primary outline-none">
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                    <option>5+ People</option>
                                </select>
                            </div>
                            <button className="w-full mt-2 py-3 bg-primary hover:bg-primary-dark text-text-main font-bold rounded-lg transition-colors">
                                Find a Table
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <main className="bg-white block">

                {/* first section */}
                <section className="pt-12">
                    <div className="w-full mx-4 mb-16">
                        <div className="mb-26">
                            <div className="flex flex-wrap w-100 align-center justify-center mx-11 mb-4">
                                <h2 className="text-5xl leading-4 tracking-tight text-center font-bold uppercase text-green-700 font-sans ">
                                    Carbon Footprint Calculator
                                </h2>
                                <p className="mt-7 mb-2 text-center leading-relaxed font-sans max-w-[1000px] flex">
                                Carbon emissions from your daily choices, from transportation to diet, can make an impact. We are at a critical climate tipping point — and you can be a part of the solution.
                                </p>
                            </div>
                            <div className="bg-green-700 bg-cover bg-center bg-no-repeat bg-[url('../../public/images/forests-background.png')] py-24 relative m-0 border-0 align-baseline text-gray-600 flex justify-center align-center mt-11 w-full">
                                <div className="max-w-2xl px-7">
                                    <div className="bg-white bg-opacity-80 flex flex-col col-span-4 justify-between px-16 py-7 pb-14 text-center max-w-[96%] mx-auto">
                                        <h2 className="text-3xl font-semibold">Calculate Carbon Footprint for : </h2>
                                        <Link 
                                            to='/calculate' 
                                            className="mt-5 bg-green-700 hover:bg-green-500 rounded-none border-0 text-white block text-lg w-full py-4 px-8 transition duration-100 ease-out">
                                            An Individual
                                        </Link>

                                        <Link 
                                            to='/calculate-household' 
                                            className="mt-5 bg-green-700 hover:bg-green-500 rounded-none border-0 text-white block text-lg w-full py-4 px-8 transition duration-100 ease-out">
                                            A Household
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* second section */}
                <section className="mb-16">
                    <div className="mb-6.5">
                        <div className="max-w-[96%] mx-[4%]">
                            <h2 className="text-3xl leading-[1] text-center font-bold font-proxima-nova uppercase text-green-700 mb-2">
                                How it works
                            </h2>
                            <div className="max-w-[96%] mx-[4%] mt-3 font-light leading-[1.5] text-center">
                                <p className="max-w-[96%] mx-[4%] mt-6 font-light leading-[1.5] text-center mb-6">
                                    Solving climate change requires reducing carbon emissions. When you offset your footprint, you neutralize your emissions by protecting forests that absorb carbon from the atmosphere.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center flex-col">
                        <div className="flex items-center flex-col flex-grow-0 max-w-[210px] text-center">
                            <img src="../../public/images/calculate-carbon-footprint.png" alt="calculate your carbon footprint" className="h-24"/>
                            <p className="font-light leading-[1.5] m-0">Calculate Your Carbon Footprint</p>
                            <div className="text-5xl font-bold">+</div>
                        </div>

                        <div className="flex items-center flex-col flex-grow-0 max-w-[210px] text-center">
                            <img className="h-24" src="../../public/images/offset-your-climate-impact.png" alt="offset-Climate-Impact"/>
                            <p className="font-light leading-[1.5] m-0">Offset your Climate Impact</p>
                            <div className="text-5xl font-bold">=</div>
                        </div>

                        <div className="flex items-center flex-col flex-grow-0 max-w-[210px] text-center">
                            <img src="../../public/images/help-fight-climate-change.png" alt="help-fight-climate-change" className="h-24"/>
                            <p className="font-light leading-[1.5] m-0">Help fight climate change by protecting vital forests</p>
                        </div>

                    </div>
                </section>

                {/* third section */}
                <section className="mb-16">
                    <div className="max-w-[96%] mx-[4%]">
                        <div className="mb-6.5">
                            <h2 className="text-3xl leading-[0.94] text-center font-bold font-proxima-nova-condensed uppercase text-green-700">OFFSET YOUR FOOTPRINT. PROTECT FORESTS.</h2>

                            <div className="max-w-[96%] mx-[4%]">
                                <p className="max-w-[96%] mx-[4%] mt-3 font-light leading-[1.5] text-center">We need healthy, intact ecosystems — from mangroves to rainforests to grasslands — that absorb and store immense amounts of carbon if we are to prevent climate change from causing irreparable harm humanity. The protection and restoration of these climate-critical ecosystems also directly benefits the local communities who rely on them for food, fresh water and livelihoods.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-between">

                            <div className="overflow-hidden relative w-1/2">
                                <div className="bg-[url('../../public/images/forests.avif')] bg-gray-300 relative bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-between w-full h-3/5 text-white mt-11 p-12 pt-12 pb-90.39548%">
                                    <h3 className="w-full uppercase" >
                                        Protect
                                        <span className="block text-6xl leading-8">Forests</span>
                                    </h3>
                                </div>

                                <div class="bg-[#303030] p-4 pt-4 pb-7 pl-9 pr-9 flex flex-col items-center justify-between w-full text-white">
                                    <div className="flex flex-col items-center justify-between w-full text-white">
                                        <p className="w-full mb-7 text-2xl uppercase leading-6">
                                            PROTECT FORESTS THAT ABSORB CARBON
                                        </p>

                                        <p className="leading-6 m-0">
                                        Protecting forests is crucial for biodiversity, climate stability, and sustainable development. Strategies include establishing legal protections, implementing sustainable management practices like selective logging and reforestation, and engaging local communities. These efforts aim to prevent deforestation, maintain ecological balance, and support livelihoods dependent on forest resources. Additionally, promoting eco-tourism and research can create economic incentives for conservation. Global cooperation and innovative policies are essential to safeguard forests, ensuring their long-term benefits for both people and the planet.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="overflow-hidden relative w-1/2">
                                
                                <div className="bg-[url('../../public/images/working_women.jpg')] bg-gray-300 bg-center bg-no-repeat bg-cover relative p-[12px] pt-[90.39548%] flex flex-col items-center justify-between w-full h-3/8 text-white mt-11 overflow-hidden ml-4">
                                    <h3 className="w-full uppercase">
                                        Benefit Local
                                        <span className="block text-6xl leading-8">Communities</span>
                                    </h3>
                                </div>

                                <div class="bg-[#303030] pb-7 pl-9 pr-9 flex flex-col items-center justify-between w-full text-white ml-4">
                                    <div className="flex flex-col items-center justify-between w-full text-white">
                                        <p className="text-2xl mb-7 leading-6 m-0 block my-4 mx-0 isolate text-white">
                                            BENEFIT LOCAL COMMUNITIES WHO RELY ON NATURE FOR LIVELIHOODS
                                        </p>

                                        <p className="leading-6 m-0">
                                        One of the impacts of validated and verified carbon projects is improving the well-being of resident communities by enabling the sustainable use of nature and by maintaining healthy ecosystems. Funds from carbon credits are used to improve health care facilities and schools; start local environmental education programs; and support local income-generating activities that promote conservation, such as ecotourism, tree nurseries, beekeeping and sustainable crafts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* fourth section */}
                <section className="mb-2 bg-white block isolate">
                    <div className="mb-6">
                        <h2 className="text-4xl leading-[0.94] font-bold text-center uppercase text-[#4bc36b]">More About this Calculator</h2>
                    </div>

                    <div className="min-h-[336px] max-w-[96%] mx-[4%]">
                        <div className="mt-4">
                            <p className="mb-6 leading-6 m-0">
                                Our carbon calculator is easy to use — and it will deliver your total estimated personal carbon emissions about as accurately as many hours of data-gathering and fact-finding.
                            </p>

                            <p className="mb-6 leading-6 m-0">
                                As with any online carbon calculator, ours includes a margin of error due to the difficulty and imprecision inherent in measuring the carbon dioxide (CO<sub>2</sub>) output of your morning commute or your dietary decisions. We combine the best available data and a range of informed assumptions to form the basis of our calculations and to provide you an emissions estimate you can rely on — and begin to neutralise.
                            </p>

                            <p className="mb-6 leading-6 m-0">
                                Because this is a personal carbon calculator, it does not account for emissions related to commercial or industrial energy or transportation. Our focus is on those everyday variables you can influence the most — namely, your residential energy, personal travel and food-related emissions.
                            </p>

                            <p className="mb-3 leading-6 m-0">
                                To avoid confusion, we express greenhouse gas (GHG) emissions figures in CO<sub>2</sub>  equivalents (CO<sub>2</sub>e), where 1 metric ton of carbon = 3.67 metric ton of carbon dioxide.
                            </p>
                        </div>
                    </div>
                </section>

                {/* fifth section */}
                <section className="bg-white">
                    <div className="bg-[url('../../public/images/green-field.jpg')] relative bg-cover bg-no-repeat bg-center w-full h-[700px] bg-blue-800 flex flex-col">
                        <div className="max-w-[600] mx-auto flex flex-row justify-content align-center  gap-x-28 p-0">
                            <div className="my-150px max-w-[500px] px-38 py-33 my-[200px] mr-[650px] bg-[rgba(255,255,255,0.65)] col-span-4">
                                <p className="text-2xl leading-normal mb-1 m-4 mt-2 font-semibold">
                                    A global conservation story 
                                </p>

                                <div className="my-5 text-gray-700 m-4">
                                    <p className="mb-6 leading-tight text-xl]">
                                    "A global conservation story" typically refers to efforts and achievements in preserving biodiversity, ecosystems, and natural resources worldwide. These narratives often highlight successful initiatives in protecting endangered species, restoring habitats, combating climate change impacts, and promoting sustainable practices. These stories underscore international cooperation, community engagement, and technological innovations that contribute to safeguarding the planet's natural heritage for future generations. They inspire hope and demonstrate the positive impact of collective action in addressing environmental challenges on a global scale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Home

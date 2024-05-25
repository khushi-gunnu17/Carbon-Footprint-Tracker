import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <main className="bg-white block">

                {/* first section */}
                <section className="bg-[url('../../public/images/forests-main.png')] bg-center bg-no-repeat bg-cover w-full bg-white text-white mb-16 ">
                    <div className="flex flex-row mx-auto px-0 text-white">
                        <div className=" px-[4%] py-[40px] pb-[20px] text-center">
                            <h2 className="text-4xl leading-[0.94] mb-11 max-w-[400px] mx-auto block my-[0.83em] text-center isolate shadow-lg font-bold ">
                                CALCULATE YOUR CARBON FOOTPRINT WITH OUR TEAM - TechCodeCrafters
                            </h2>

                            <div className="bg-[url('../../public/images/results-tree.78168e82.png')] bg-top bg-no-repeat bg-contain h-[200px] mx-auto mb-4 max-w-full relative w-[300px] text-center">
                                <p className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-[1.33] px-[22px] w-full block my-[1em] mx-0 text-center isolate">
                                    Deforestation contributes nearly 10% of global carbon emissions.
                                </p>
                            </div>

                            <p className="text-s leading-6 m-0 block my-[1em] mx-0 text-center isolate bg-[rgba(0,0,0,0.35)]">
                                On average, a hectare of tropical forest stores carbon equating to 550 metric tons of CO
                                <sub>2</sub>. With annual tropical deforestation rates averaging 0.5%, this results in 2.75 metric tons of CO<sub>2</sub> emitted per hectare each year.
                            </p>
                        </div>



                        <div className=" bg-[rgba(0,0,0,0.5)] p-[20px] px-[4%] block isolate h-[400px] mx-20 my-24">
                            <div className="mx-auto block isolate">
                                <h3 className="mb-3 text-xl leading-[1.33] font-semibold">
                                    Protect + Restore Our Planet
                                </h3>

                                <div className="mx-auto">
                                    <p className="mb-6 text-white leading-6 m-0 block my-4 mx-0 isolate">
                                        Nature is the most powerful technology to fight climate change. Yet we are losing vital ecosystems at alarming rates.
                                    </p>

                                    <p className="mb-6 text-white leading-6 m-0 block my-4 mx-0 isolate">
                                        To prevent complete climate breakdown, we must halt the degradation and deforestation of habitats and restore nature. The planet is at a tipping point, and we need your help.
                                    </p>

                                    <p className= "text-white leading-6 m-0 block my-4 mx-0 isolate">
                                        When you neutralize your footprint, you will protect forests around the world — a critical step in our fight against climate change.
                                    </p>
                                </div>

                    
                            </div>
                        </div> 
                        
                    </div>
                </section>


                {/* second section */}
                <section className="mb-16 bg-white">
                    <div className=" mx-4 block">
                        <div className="mb-6">
                            <h2 className="text-3xl leading-tight text-center uppercase text-green-700 mb-2 font-bold">
                                Tips to decrease your footprint
                            </h2>

                            <p className="mt-3 mb-16 text-center leading-relaxed">
                                Decreasing your impact on the climate could be easier than you think.
                            </p>



                            <div className="flex align-items justify-center mb-16">
                                {/* first */}
                                <div className="flex-col mb-6 text-center mx-16">
                                    <img  
                                        src="../../public/images/cow.png"
                                        alt="animal"
                                        className="ml-20 h-20 w-20 mb-3 text-center"
                                    />
                                    <h3 className="text-lg mb-4 leading-tight font-semibold">Try consuming less meat</h3>
                                    <p className="mb-1 leading-relaxed text-center text-sm">For every day of the week where you eliminate red meat:</p>
                                    <p className="mb-1 leading-relaxed text-center font-bold">0.4 metric tons saved annually</p>
                                </div>
                                
                                {/* second */}
                                <div className="flex-col mb-6 text-center mx-16">
                                    <img  
                                        src="../../public/images/mail.png"
                                        alt="animal"
                                        className="ml-24 h-20 w-20 mb-3 text-center"
                                    />
                                    <h3 className="text-lg mb-4 leading-tight font-semibold">Clean your inbox</h3>
                                    <p className="mb-1 leading-relaxed text-center text-sm">Delete your archived emails and unsubscribe from junk email:</p>
                                    <p className="mb-1 leading-relaxed text-center font-bold">0.07 metric tons saved annually</p>
                                </div>
                                
                                {/* third */}
                                <div className="flex-col mb-6 text-center mx-16">
                                    <img  
                                        src="../../public/images/clothes.png"
                                        alt="animal"
                                        className="ml-24 h-20 w-20 mb-3 text-center"
                                    />
                                    <h3 className="text-lg mb-4 leading-tight font-semibold">Purchase consignment clothing</h3>
                                    <p className="mb-1 leading-relaxed text-center text-sm">For buying second-hand or consignment for every clothing purchases:</p>
                                    <p className="mb-1 leading-relaxed text-center font-bold">0.5 metric tons saved annually</p>
                                </div>

                            </div>


                            <div className="flex align-items justify-center mb-16">
                                {/* fourth */}
                                 <div className="flex-col mb-6 text-center ml-20 mr-16">
                                    <img  
                                        src="../../public/images/tyre.png"
                                        alt="animal"
                                        className="ml-16 h-20 w-20 mb-3 text-center"
                                    />
                                    <h3 className="text-lg mb-4 leading-tight font-semibold">Keep inflated</h3>
                                    <p className="mb-1 leading-relaxed text-center text-sm">By keeping your car tires properly inflated:</p>
                                    <p className="mb-1 leading-relaxed text-center font-bold">0.4 metric tons saved annually</p>
                                </div>

                                {/* fifth */}
                                <div className="flex-col mb-6 text-center mx-14">
                                    <img  
                                        src="../../public/images/thermostat.png"
                                        alt="animal"
                                        className="relative left-[30px] ml-24 h-20 w-20 mb-3 text-center"
                                    />
                                    <h3 className="text-lg mb-4 leading-tight font-semibold">Change your thermostat</h3>
                                    <p className="mb-1 leading-relaxed text-center text-sm">For every degree that you turn down your thermostat in the winter:</p>
                                    <p className="mb-1 leading-relaxed text-center font-bold">0.06 metric tons saved annually</p>
                                </div>

                                {/* sixth */}
                                <div className="flex-col mb-6 text-center mx-16">
                                    <img  
                                        src="../../public/images/fuel.png"
                                        alt="animal"
                                        className="ml-24 h-20 w-20 mb-3 text-center"
                                    />
                                    <h3 className="text-lg mb-4 leading-tight font-semibold">Improve your fuel economy</h3>
                                    <p className="mb-1 leading-relaxed text-center text-sm">For every 5 km/L you improve the fuel economy of your car:</p>
                                    <p className="mb-1 leading-relaxed text-center font-bold">0.9 metric tons saved annually</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* third section */}
                <section className="bg-white">
                    <div className="bg-[#1a5eab] align-baseline relative ">
                        <img 
                            src="../../public/images/plant.avif" 
                            alt="green-field" 
                            className="w-full"
                        />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About




                    
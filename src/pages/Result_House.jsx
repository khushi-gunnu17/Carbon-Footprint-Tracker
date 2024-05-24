import React from "react";
import { useLocation } from "react-router-dom";

function Result() {

    const location = useLocation()
    const { carbonFootprintCalculated } = location.state || { carbonFootprintCalculated : null }

    return (
        <div>
            <main className="bg-white block">

                {/* first section */}
                <section className="bg-[url('../../public/images/forests-main.png')] bg-center bg-no-repeat bg-cover w-full bg-white text-white mb-16 ">
                    <div className="flex flex-row mx-auto px-0 text-white">
                        <div className=" px-[4%] py-[40px] pb-[20px] text-center">
                            <h2 className="text-4xl leading-[0.94] uppercase mb-11 max-w-[400px] mx-auto block my-[0.83em] text-center isolate shadow-lg font-bold ">
                                <div className=" bg-[rgba(100,255,255,0.40)] max-w-[170px] h-[40px] text-center flex align-center justify-center ml-3 mb-4">Result : </div>
                                Your carbon impact for your household is {carbonFootprintCalculated.toFixed(2)} kg C0<sub>2</sub>e
                            </h2>

                            <div className="bg-[url('../../public/images/results-tree.78168e82.png')] bg-top bg-no-repeat bg-contain h-[182px] mx-auto mb-4 max-w-full relative w-[291px] text-center">
                                <p className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-[1.33] px-[22px] w-full block my-[1em] mx-0 text-center isolate">
                                    Deforestation contributes nearly 10% of global carbon emissions.
                                </p>
                            </div>

                            <p className="text-s leading-6 m-0 block my-[1em] mx-0 text-center isolate">
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
                {/* insert some comparison data here */}




                {/* third section */}
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

                {/* fourth section */}
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

export default Result




                    
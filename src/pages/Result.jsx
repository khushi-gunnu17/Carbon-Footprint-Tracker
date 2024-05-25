import React from "react";
import { useLocation } from "react-router-dom";
import { PieChart} from '@mui/x-charts/PieChart';

function Result() {

    const location = useLocation()
    const { carbonFootprint, requiredToucanTokens, cost } = location.state || { carbonFootprint : null, requiredToucanTokens: null, cost: null }

    return (
        <div>
            <main className="bg-white block">

                {/* first section */}
                <section className="bg-[url('../../public/images/forests-main.png')] bg-center bg-no-repeat bg-cover w-full bg-white text-white mb-24 ">
                    <div className="flex flex-row mx-auto px-0 text-white">
                        <div className=" px-[4%] py-[40px] pb-[20px] text-center">
                            <h2 className="text-4xl leading-[1] uppercase mb-11 max-w-[400px] mx-auto block my-[0.83em] text-center isolate shadow-lg font-bold ">
                                <div className=" bg-[rgba(100,255,255,0.40)] max-w-[170px] h-[40px] text-center flex align-center justify-center ml-3 mb-4">Result : </div>
                                Your carbon impact is {carbonFootprint.toFixed(2)} kg C0<sub>2</sub>e
                            </h2>

                            <div className="bg-[url('../../public/images/results-tree.78168e82.png')] bg-top bg-no-repeat bg-contain h-[182px] mx-auto mb-4 max-w-full relative w-[291px] text-center">
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
                <section className="mb-24 bg-white">

                    <div className="text-3xl text-center text-green-700 font-bold uppercase mb-20">
                        How Do You Compare ? 
                    </div>

                    <div>
                    <PieChart 
                        className=" text-center flex flex-row mb-22 mt-22"
                        colors={["lightgreen", "green"]}
                        series={[
                            {
                                data :[
                                    { id : 0, value : carbonFootprint, label:'Your carbon footprint', color : 'lightgreen'},
                                    { id : 1, value : 7000, label : "Average person's carbon footprint", color : 'green' },
                                ] ,
                                innerRadius: 120,
                                outerRadius: 150,
                                paddingAngle: 5,
                                cornerRadius: 5,
                
                            }
                        ]}
                        width={1000}
                        height={300}
                    />

                    </div>
                </section>


                {/* Third section */}
                {/* Toucan token effect */}
                <section className="mb-24 bg-white">
                    <div className="text-3xl text-center text-green-700 font-bold uppercase mb-20">
                        Neutralize Your Carbon Footprint
                    </div>

                    <div className="text-center">
                        <p className="text-xl">To offset your carbon footprint of {carbonFootprint?.toFixed(2)} kg CO<sub>2</sub>e, you would need approximately {requiredToucanTokens?.toFixed(2)} Toucan tokens.</p>
                        <p className="text-xl">The estimated cost for the required Toucan tokens is ₹{cost?.toFixed(2)}.</p>
                    </div>
                </section>



                {/* fourth section */}
                <section className="mb-24 bg-white">
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


                {/* fifth section */}
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

export default Result




                    

const Banner = () => {
    return (
        <div className="flex lg:flex-row flex-col py-[30px] md:py-[30px] justify-between items-center bg-slate-800">
            {/* left */}
            <div className="flex-1 text-white text-left px-10 space-y-7">
                <div>
                    <h1 className="text-6xl">Dedicated Developers for Startups</h1>
                </div>
                <div className="text-2xl">
                    <p>With Hundred. Dev Builds Teams, <br />
                        that will help you succeed <br />
                        and beat the competition</p>
                </div>
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  px-6 rounded-md text-xl py-2 hover:shadow-purple-900 transition shadow-lg shadow-purple-600">Get Started</button>
            </div>
            {/* left */}


            {/* right */}
            <div className="flex-1 px-8 py-14">
                <div className="grid grid-cols-6 gap-4  ">

                    <div className="w-[100px] mx-auto h-[150px] col-start-2 col-span-4 rounded-full hover:opacity-50 hover:transition" style={{ backgroundColor: "orange" }}>
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>

                    <div className="w-[100px] mx-auto h-[150px] col-start-1 col-end-3 rounded-full hover:opacity-50 hover:transition" style={{ backgroundColor: "orange" }}>
                        <img className="w-full h-full rounded-full" src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>

                    <div className="w-[100px] mx-auto h-[150px] col-end-7 col-span-2 rounded-full hover:opacity-50 hover:transition" style={{ backgroundColor: "orange" }}>
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>

                    <div className="w-[100px] mx-auto h-[150px] col-start-2 col-span-4 rounded-full hover:opacity-50 hover:transition" style={{ backgroundColor: "orange" }}>
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                    </div>






                </div>


            </div>
            {/* right */}


        </div>
    );
};

export default Banner;
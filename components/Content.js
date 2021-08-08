function Content() {
    return (
        <div className="bg-white items-center text-center w-[330px] md:w-[350px] px-7 md:px-8 drop-shadow-2xl rounded-b-3xl py-6 md:py-8">
           <h4 className="text-xl font-redhat font-black text-blue-dark">Order Summary</h4> 
           <p className="text-[16px] font-redhat text-blue-desaturated mt-5 md:mt-3 md:text-[12px] md:mx-8">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
           <div className="flex items-center bg-blue-pale-200 p-5 rounded-xl mt-5">
               <img className="w-15 md:w-10" src="/icon-music.svg" alt="" />
               <div className="font-redhat ml-4">
                   <p className="text-blue-dark font-black text-[14px]">Annual Plan</p>
                   <p className="text-blue-desaturated text-[14px]">$59.99/year</p>
               </div>
               <a className="text-blue-bright font-redhat font-bold text-[12px] ml-auto underline cursor-pointer" href="">Change</a>
           </div>
            <button className="bg-blue-bright text-white font-redhat font-bold md:text-[12px] w-full py-4 md:py-3 rounded-xl mt-5 shadow-2xl active:opacity-80 cursor-pointer">Proceed to Payment</button>
            <button className="font-redhat font-bold text-blue-desaturated md:text-[12px] mt-5 cursor-pointer">Cancel Order</button>
        </div>
    )
}

export default Content

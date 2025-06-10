'use client'
import Information from "@/components/Information";
import { LayoutItens } from "@/components/ItensCheckout";
import Background from '../assets/background-image.png';

const Home = () => {
  return (
    <>
      <img className="w-full h-[20rem] z-10 absolute top-0" src={Background.src} alt="" />
      <div className="w-full h-screen flex flex-col justify-between items-center px-8 py-12 relative z-20">
        <div className="h-24 flex justify-center items-center relative gap-4 mb-8">
          <h1 className="font-semibold text-3xl">Checkout</h1>
          <span className="px-3 py-1 bg-[color:#1d1d1f] text-white rounded-3xl">3 ITEMS</span>
        </div>
        <div className="w-full flex-1 grid md:grid-cols-2 grid-cols-1 rounded-2xl bg-white">
          <LayoutItens />
          <Information />
        </div>
      </div>
    </>
  )
}

export default Home;
'use client'

import { useState } from "react";
import Iphone from '../assets/Gold@2x.png'
import Watch from '../assets/Apple-watchx2.png'
import iMac from '../assets/iMac@2x.png'

interface NamesCheckout {
    img: string;
    name: string;
    color: string;
    price: string;
    stock: string;
}

const ItensCheckout: React.FC<NamesCheckout> = ({ img, name, color, price, stock }) => {

    const [isOnMenu, setIsOnMenu] = useState(true);

    return (
        <>
            <div className="w-full h-24 flex gap-4 relative mb-12">
                <div className="relative flex justify-center items-center bg-white w-[12rem] h-[8rem] rounded-2xl">
                    <img className="w-full h-full object-contain p-4" src={img} alt="" />
                </div>
                <div className="w-full flex justify-between items-center ">
                    <div className="">
                        <h1>{name}</h1>
                        <p>{color}</p>
                        <p>{stock}</p>
                    </div>
                    <div className="flex flex-col gap-6 items-end">
                        <h1>{price}</h1>
                        <button onClick={() => (setIsOnMenu(!isOnMenu))}>X</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export const LayoutItens = () => {

    const products = [
        {
            img: '/Gold@2x.png',
            name: 'Iphone 12 Pro',
            price: '$999.00',
            color: 'Golden',
            stock: '1'
        },
        {
            img: '/Apple-watchx2.png',
            name: 'Apple Watch',
            price: '$399.00',
            color: 'Blue',
            stock: '1'
        },
        {
            img: '/iMac@2x.png',
            name: 'iMac',
            price: '$11999.00',
            color: 'Green',
            stock: '1'
        }
    ]

    return (
        <>
            <div className="flex flex-col gap-24 bg-[color:#e6e7eb] rounded-2xl text-black p-12">
                <div className="flex flex-col gap-8">
                    {products.map((product, index) => (
                        <ItensCheckout
                            key={index}
                            img={product.img}
                            name={product.name}
                            color={product.color}
                            stock={product.stock}
                            price={product.price}
                        />
                    ))}
                </div>
                <div className="relative">
                    <div className="">
                        <input type="text" placeholder="Enter coupon code" />
                        <button>Apply Coupon</button>
                    </div>
                    <div className="">
                        <p>Sub total</p>
                        <p>Tax</p>
                        <p>Total</p>
                    </div>
                </div>
            </div>
        </>
    )
}



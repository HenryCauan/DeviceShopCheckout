'use client'

import { useState } from "react";
import Iphone from '../assets/Gold@2x.png'
import Watch from '../assets/Apple-watchx2.png'
import iMac from '../assets/iMac@2x.png'

interface NamesCheckout {
    img: string;
    name: string;
    color: string;
    price: number;
    stock: string;
}

interface ItensCheckoutProps extends NamesCheckout {
    onRemove: () => void;
}

const ItensCheckout: React.FC<ItensCheckoutProps> = ({ img, name, color, price, stock, onRemove }) => {

    const [isOnMenu, setIsOnMenu] = useState(true);
    const [isValue, setIsValue] = useState({price})

    return (
        <>
            {isOnMenu && <div className="w-full h-24 flex gap-4 relative mb-12">
                <div className="relative flex justify-center items-center bg-white w-[12rem] h-[8rem] rounded-2xl">
                    <img className="w-full h-full object-contain p-4" src={img} alt="" />
                </div>
                <div className="w-full flex justify-between items-center font-semibold">
                    <div className="">
                        <h1>{name}</h1>
                        <p className="text-gray-600">{color}</p>
                        <p  className="text-gray-600">x{stock}</p>
                    </div>
                    <div className="flex flex-col gap-8 items-end">
                        <h1 >${price}.00</h1>
                        <button 
                            onClick={() => {
                                setIsOnMenu(false);
                                onRemove();
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export const LayoutItens = () => {
    const [products, setProducts] = useState([
        {
            img: '/Gold@2x.png',
            name: 'Iphone 12 Pro',
            price: 999.00,
            color: 'Golden',
            stock: '1'
        },
        {
            img: '/Apple-watchx2.png',
            name: 'Apple Watch',
            price: 399.00,
            color: 'Blue',
            stock: '1'
        },
        {
            img: '/iMac@2x.png',
            name: 'iMac',
            price: 1199.00,
            color: 'Green',
            stock: '1'
        }
    ]);

    // Função para remover um produto pelo índice
    const removeProduct = (index: number) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProducts(newProducts);
    };

    // Calcular o subtotal
    const subtotal = products.reduce((total, product) => total + product.price, 0);
    // Definir a taxa (pode ser dinâmica no futuro)
    const tax = 623.28;
    // Calcular o total
    const total = subtotal + tax;

    return (
        <>
            <div className="flex flex-col gap-6 bg-[color:#e6e7eb] rounded-2xl text-black p-12">
                <div className="flex flex-col gap-8">
                    {products.map((product, index) => (
                        <ItensCheckout
                            key={index}
                            img={product.img}
                            name={product.name}
                            color={product.color}
                            stock={product.stock}
                            price={product.price}
                            onRemove={() => removeProduct(index)}
                        />
                    ))}
                </div>
                <div className="relative">
                    <div className="w-full flex gap-4 border-t-2 border-gray-300 pt-12 mb-6">
                        <input className="flex-1 py-3 bg-white border-2 border-gray-300 rounded-[10px] p-4" type="text" placeholder="Enter coupon code" />
                        <button className="py-5 px-5 bg-[color:#1d1d1f] rounded-[10px] text-white">Apply Coupon</button>
                    </div>
                    <div className="flex flex-col gap-2 text-lg font-semibold text-gray-700">
                        <label className="w-full flex justify-between">
                            <p>Sub Total</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </label>
                        <label className="w-full flex justify-between">
                            <p>Tax</p>
                            <p>${tax.toFixed(2)}</p>
                        </label>
                        <label className="w-full flex justify-between">
                            <p>Total</p>
                            <p>${total.toFixed(2)}</p>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}



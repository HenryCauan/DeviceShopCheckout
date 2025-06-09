import { useState } from "react";
import Iphone from '../assets/Gold@2x.png'
import Watch from '../assets/Apple-watchx2.png'
import iMac from '../assets/iMac@2x.png'

Interface: { }

const ItensCheckout: React.FC = ({ img, name, color, price, stock }) => {

    const [isOnMenu, setIsOnMenu] = useState(true);

    return (
        <>
            <div className="w-full h-24 flex">
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center">
                    <div className="">
                        <h1>{name}</h1>
                        <p>{color}</p>
                        <p>{stock}</p>
                    </div>
                    <div className="">
                        <h1>{price}</h1>
                        <button onClick={() => (setIsOnMenu(!isOnMenu))}>X</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const LayoutItens = () => {

    const products = [
        {
            url: Iphone,
            name: 'Iphone 12 Pro',
            price: '$999.00',
            color: 'Golden',
            stock: '1'
        },
        {
            url: Watch,
            name: 'Apple Watch',
            price: '$399.00',
            color: 'Blue',
            stock: '1'
        },
        {
            url: iMac,
            name: 'iMac',
            price: '$11999.00',
            color: 'Green',
            stock: '1'
        }
    ]

    return (
        <>
            <div className="">
                <div className="">
                    {products.map((product, index) => (
                        <ItensCheckout
                            key={index}
                            url={product.img}
                            name={product.name}
                            color={product.color}
                            stock={product.stock}
                            price={product.price}
                            index={index}
                        />
                    ))}
                </div>
                <div className="">
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

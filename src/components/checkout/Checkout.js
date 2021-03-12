import './checkout.css'
import React from 'react'
import {useStateValue} from '../StateProvider'
import CheckoutList from './checkoutList/CheckoutList';
import Subtotal from './subtotal/Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__add"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZrlS9Y1Lfj5QxZhcLPDcCMyG_rcz266yOA&usqp=CAU"
                />

                {basket.length === 0 ? (
                    <div>
                        <h2> Your Shopping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one,
                            "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Basket</h2>

                        {
                            basket.map((item) => (
                                <CheckoutList
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}/>
                            ))
                        }
                    </div>
                )}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

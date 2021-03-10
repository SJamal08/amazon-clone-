import React from 'react'
import Product from '../product/Product'
import './home.css'

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZrlS9Y1Lfj5QxZhcLPDcCMyG_rcz266yOA&usqp=CAU"
                />

                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates"
                        price={11.96}
                        rating={5}
                        image="https://fakeimg.pl/300/"/>

                    <Product 
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates"
                        price={11.96}
                        rating={5}
                        image="https://fakeimg.pl/300/"/>

                </div>

            
        </div>
    )
}

export default Home

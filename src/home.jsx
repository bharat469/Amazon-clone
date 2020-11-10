import React from 'react'
import './home.css'
import Product from './product'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home__container">
                    <img
                        className="home__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                    <img
                        className="add__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/phase2/Phase2_Bank_PC_1500x140.jpg" alt="" />
                    <div className="home__row">
                        <Product
                            id="1"
                            title="The Lean Startup: How Constant Innovation Creates Radically" price={29.99}
                            image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}
                            rating={5}

                        />
                        <Product
                            id="2"
                            title="Zero to One: Notes on Start Ups, or How to Build the Future "
                            price={5.41}
                            image={'https://images-na.ssl-images-amazon.com/images/I/51JkDEpHUQL._SX317_BO1,204,203,200_.jpg'}
                            rating={4}
                        />

                    </div>

                    <div className="home__row">
                        <Product
                            id="3"
                            title="OPPO F17 Pro (Matte Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                            price={311.80}
                            image={'https://images-na.ssl-images-amazon.com/images/I/71cLxfNqyFL._SL1500_.jpg'}
                            rating={5} />

                        <Product
                            id="4"
                            title="Apple iPhone 11 (64GB) - White (Includes EarPods, Power Adapter)"
                            price={664.56}
                            image={'https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SL1024_.jpg'}
                            rating={5} />
                        <Product

                            id="5"
                            title="New Apple iPhone 12 Pro (128GB) - Pacific Blue"
                            price={1356.16}
                            image={'https://images-na.ssl-images-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg'}
                            rating={5} />

                    </div>

                    <div className="home__row">
                        <Product
                            id="6"
                            title="Samsung The Serif Series 138 cm (55 inches) 4K Ultra HD Smart QLED TV QA55LS01TAKXXL (Cloud White) (2020 Model)"
                            price={1005.65}
                            image={'https://images-na.ssl-images-amazon.com/images/I/81TykyxGSJL._SL1500_.jpg'}
                            rating={5} />

                        <Product
                            id="7"
                            title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black"
                            price={851.57}
                            image={'https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg'}
                            rating={4}
                        />

                    </div>

                    <div className="home__row">
                    <Product
                            id="8"
                            title="Amazon Brand - Tavasya Women's Rayon Straight Kurta"
                            price={51.17}
                            image={'https://images-na.ssl-images-amazon.com/images/I/71wm1S7SkNL._UX569_.jpg'}
                            rating={4}
                        />
                    <Product
                            id="9"
                            title="Amazon Brand - Myx Women's Straight Kurti"
                            price={41.17}
                            image={'https://images-na.ssl-images-amazon.com/images/I/71UrbKiRiAL._UL1500_.jpg'}
                            rating={4}
                        />
                    <Product
                            id="10"
                            title="BLACK MACY Women Cotton Blend Kurti with Palazzo Pant"
                            price={71.17}
                            image={'https://images-na.ssl-images-amazon.com/images/I/61heYg-VzzL._UL1500_.jpg'}
                            rating={4}
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="11"
                            title="PowerMax Fitness® TDM-100M (2.0HP) Motorized Foldable, Electric Treadmill (FREE INSTALLATION)【LED Display | BMI | Spring Resistance】Running Machine for Max Pro-Workout by Walk, Run & Jog at Home"
                            price={771.17}
                            image={'https://images-na.ssl-images-amazon.com/images/I/813dvRVB0XL._SL1500_.jpg'}
                            rating={4}
                        
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
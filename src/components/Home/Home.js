import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/pushnotification/PD_GW_Teaser-PC-hero_1x._CB409675600_.jpg"
          alt="Amazon Banner"
        />

        {/* Product id, title, price, rating, image */}
        <div className="home_row">
          <Product
            id={1}
            title="Trance Home Linen 100% Cotton 400TC Elasticated Fitted Bedsheet with Pillow Covers-White (King)"
            price={1800}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/71scGrXLlGL._AC_UL270_SR270,270_.jpg"
          />
          <Product
            id={2}
            title="PRO365 Double Ab Wheel Roller/Carver/Abdominal Workout Safe (6 MM Blue Knee Mat, Yellow Roller)"
            price={349}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/71F0zfxHUwL._AC_UL270_SR270,270_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id= {3}
            title="Milton Medical Box"
            price={199}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61VRSCbMQqL._SL1500_.jpg"
          />
          <Product
            id= {4}
            title="Fossil Gen 5 Garrett Touchscreen Smartwatch"
            price={22450}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/817%2BDdlKb8L._UL1500_.jpg"
          />
          <Product
            id= {5}
            title="Edifier S1000DB Audiophile Active Bookshelf Speakers"
            price={24580}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71NoQpyTu7L._SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id={6}
            title="VIFITKIT® Yoga Mat Anti Skid EVA Yoga mat with Bag for Gym Workout"
            price={700}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/81AT8rLWnkL._SL1500_.jpg"
          />
          <Product
            id={7}
            title="CeraVe Moisturizing Cream for Normal to Dry Skin | 19 Ounce | Fragrance Free"
            price={955}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/5118XlrWwlL._AC_US480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    );
}

export default Home;
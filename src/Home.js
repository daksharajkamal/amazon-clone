import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Rec_PC_Hero_1X_ENGLISH._CB416347901_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12345678"
            title="The Lean StartUp"
            price={299}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg"
          />
          <Product
            id="12345678"
            title="The Lean StartUp"
            price={299}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345678"
            title="The Lean StartUp"
            price={299}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg"
          />
          <Product
            id="12345678"
            title="The Lean StartUp"
            price={299}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg"
          />
          <Product
            id="12345678"
            title="The Lean StartUp"
            price={299}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345678"
            title="The Lean StartUp"
            price={299}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg"
          />``
        </div>
      </div>
    </div>
  );
}

export default Home;

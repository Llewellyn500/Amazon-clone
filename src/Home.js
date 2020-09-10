import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
        />
        <div className="home__row">
          <Product
            id="21124124124"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="873928672151"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$0"
          />
        </div>
        <div className="home__row">
          <Product
            id="6721358723912"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="8754362578437"
            title="Cubii Pro Seated Under Desk Elliptical Machine for Home Workout"
            price={249.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81kKxrwMv2L._AC_SL1500_.jpg"
          />
          <Product
            id="76734685723498"
            title="Lexar Professional 1667X 128GB SDXC Uhs-II/U3 Card (LSD128CBNA1667)"
            price={26.97}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/618JS8-mUjL._AC_SY355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="7617534432534791"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller"
            price={58.86}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SY355_.jpg"
          />
          <Product
            id="8536874283265882"
            title="Elite Series 2 Controller - Black"
            price={164.01}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71F6eID-ImL._SX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
            id="87874762652348"
            title="Marvel's Avengers for PlayStation 4"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81DugevkxJL._SX342_.jpg"
            rating={2}
            />
        </div>
        <div className="home__row">
          <Product 
            id="6387823572678"
            title="Oculus Rift S PC-Powered VR Gaming Headset"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg"
            rating={4}
          />
          <Product 
            id="8238756923487"
            title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card"
            price={469.00}
            image="https://images-na.ssl-images-amazon.com/images/I/61445UADu9L._AC_SX466_.jpg"
            rating={5}
          />
          <Product 
          //id="21124124124"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
        </div>
      <div className="home__row">
        <Product 
        //id="21124124124"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
        />
        <Product 
        //id="21124124124"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
        />
      </div>
        <div className="home__row">
        <Product 
        //id="21124124124"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
        />
      </div>
      </div>
    </div>
  );
};

export default Home;
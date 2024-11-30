import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="strawberry"
          price="350.00"
          color="fresh red"
          badge={true}
          des="Freshly hand picked and hygine is maintained."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="pumpkin"
          price="180.00"
          color="yellow"
          badge={false}
          des="Freshly hand picked and hygine is maintained"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="brinjal"
          price="250.00"
          color="purple"
          badge={true}
          des="Freshly hand picked and hygine is maintained."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="tomato"
          price="220.00"
          color="fresh red"
          badge={false}
          des="Freshly hand picked and hygine is maintained."
        />
      </div>
    </div>
  );
};

export default BestSellers;

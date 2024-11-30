import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="ground onion"
          price="350.00"
          color="fresh red"
          badge={true}
          des="Freshly hand picked and hygine is maintained"
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="avacado"
          price="180.00"
          color="green"
          badge={true}
          des="Freshly hand picked and hygine is maintained."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="brocolli"
          price="250.00"
          color="Mixed"
          badge={true}
          des="Freshly hand picked and hygine is maintained."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="peas"
          price="220.00"
          color="green"
          badge={true}
          des="Freshly hand picked and hygine is maintained."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;

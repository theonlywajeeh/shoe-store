import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* HEADING AND PARAGRAPH START */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/* HEADING AND PARAGRAPH END */}

        {/* CART CONTENT START */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* CART ITEMS START */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">
                Cart Item
                <CartItem/>
                <CartItem/>
                <CartItem/>
                
            </div>
          </div>
          {/* CART ITEMS END */}
          {/* CART Summary START */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
          </div>
          {/* CART Summary END */}



        </div>
        
      </Wrapper>
    </div>
  );
};

export default Cart;

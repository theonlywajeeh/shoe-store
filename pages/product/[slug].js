
import ProductDetailsCrousel from "@/components/ProductDetailsCrousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";

import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

export const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left col start */}
          <div className=" w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCrousel />
            
          </div>
          {/* left col end */}

          {/* RIGHT col start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Jordan g retro
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">SHOES HYN BHAI</div>

            {/* PRODUCT Price */}
            <div className="text-lg font-semibold mb-5">Price Rs.50,000</div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* size range start */}
            <div className="mb-10">
              {/* Heading start */}
              <div className="flex justify-between">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* Heading End */}

              {/* size start */}

              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 11
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 12
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 13
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 14
                </div>
                {/* size end */}
              </div>
              {/* error start */}
              <div className="text-red-500 mt-1">Size selection is required</div>
              {/* error end */}
              
              
              
            </div>
            {/* size range end */}
            <button
          className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
            Add to Cart
          </button>
          {/* ADD TO CART BUTTON END */}

           {/* WHISHLIST BUTTON START */}
           <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
            Whishlist
            <IoMdHeartEmpty size={20} />
             </button>
            {/* WHISHLIST BUTTON END */}

            <div>
            <div className="text-lg font-bold mb-5">
             Product Details
             </div>
              <div>

              </div>
            </div>



          </div>

          
          {/* RIGHT col end */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};
export default ProductDetails;

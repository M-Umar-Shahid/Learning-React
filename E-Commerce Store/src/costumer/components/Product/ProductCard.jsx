import "./ProductCard.css";
import propTypes from "prop-types";
function ProductCard({ product }) {
  return (
    <>
      <div className="product-card w-[15rem] m-3 transition-all cursor-pointer">
        <div className="h-[20rem]">
          <img
            className="w-full h-full object-cover object-left-top"
            src={product.imageUrl}
            alt=""
          />
        </div>
        <div className="textPart bg-white p-3">
          <div>
            <p className="font-bold opacity-60">{product.brand}</p>
            <p>{product.title}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p>{product.discountedPrice}</p>
            <p>{product.price}</p>
            <p>{product.discountPersent}</p>
          </div>
        </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  product: propTypes.object,
};

export default ProductCard;

import PropTypes from "prop-types";
const Cart = ({ cart, handleRemoveToCart }) => {
  return (
    <div>
      <h4 className="text-2xl text-center my-4 text-primary">
        Cart: {cart.length}
      </h4>
      <div className="w-3/12 flex flex-col md:flex-row justify-center items-center gap-8 my-10 mx-auto container px-4 md:px-8 lg:px-16 py-4 rounded">
        {cart.map((bottle) => (
          <div className="text-center" key={bottle.id}>
            <img src={bottle.img}></img>
            <button className="text-primary btn my-3" onClick={()=>handleRemoveToCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveToCart: PropTypes.func.isRequired,
};

export default Cart;

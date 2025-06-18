import { useCart } from "../../Components/CartProvider/CartProvider";

const CartItems = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Your Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No items in the cart.</p>
        </div>
      ) : (
        <div className="space-y-6">

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow-lg rounded-lg p-6"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.item_name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-medium text-gray-700">{item.item_name}</h3>
                  <p className="text-gray-500 text-sm">{item.subcategory_Name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold text-gray-900">{item.price}</p>
                <button onClick={()=>removeFromCart(index)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Checkout Section */}
      {cart.length > 0 && (
        <div className="mt-8 flex justify-between items-center bg-gray-50 p-6 rounded-lg shadow-md">
          <div>
            <p className="text-lg font-semibold text-gray-700">Total</p>
            <p className="text-2xl font-bold text-gray-900">
              {cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
            </p>
          </div>
          <button className="btn bg-[#D24545] text-white px-6 py-2 rounded-full hover:bg-[#A83939]">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItems;

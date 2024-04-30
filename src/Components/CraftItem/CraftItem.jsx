import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CraftItem = ({ craftItem }) => {
  const { item_name, image, subcategory_Name, price, rating, stockStatus } =
    craftItem;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="pt-4 h-52">
          <img
            src={image}
            alt="arts"
            className="border-[#D24545] border-8 h-full"
          />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title mx-auto mb-2">{item_name}</h2>
          <div className="flex justify-between border-b-2 pb-3 text-lg font-medium">
            <h3>Category:</h3>
            <h3>{subcategory_Name}</h3>
          </div>

          <div className="flex justify-between border-b-2 pb-3 text-lg font-medium">
            <h3>Rating: {rating}</h3>
            <h3>{stockStatus}</h3>
          </div>

          <div className="flex justify-between border-b-2 pb-3 text-lg font-medium">
            <h3>Price:</h3>
            <h3>{price}</h3>
          </div>
          <div className="card-actions">
            <Link to={`/viewDetails/${craftItem._id}`} className="w-full">
              <button className="btn bg-[#D24545] text-white text-lg w-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CraftItem.propTypes = {
  craftItem: PropTypes.object,
};

export default CraftItem;

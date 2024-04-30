import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyCraftItem = ({ myCraftItem, setMyCraftItems }) => {
  const { user } = useContext(AuthContext);

  const { item_name, image, price, rating, customization, stockStatus } =
    myCraftItem;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-and-craft-store-server-sigma.vercel.app/craftProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {

              fetch(`https://art-and-craft-store-server-sigma.vercel.app/craftProduct/email/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                  setMyCraftItems(data);
                });

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
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
          <h3>Customization:</h3>
          <h3>{customization}</h3>
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
          <Link to={`/updateItem/${myCraftItem._id}`} className="flex-1">
            <button className="btn bg-[#D24545] text-white text-lg w-full">
              Update
            </button>
          </Link>

          <Link to={""} className="flex-1">
            <button
              onClick={() => handleDelete(myCraftItem._id)}
              className="btn bg-[#D24545] text-white text-lg w-full"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

MyCraftItem.propTypes = {
  myCraftItem: PropTypes.object,
  setMyCraftItems: PropTypes.func
};

export default MyCraftItem;

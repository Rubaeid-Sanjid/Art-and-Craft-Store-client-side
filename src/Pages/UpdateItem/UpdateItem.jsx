import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const currCraftItem = useLoaderData();

  const {
    item_name,
    image,
    subcategory_Name,
    price,
    description,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = currCraftItem;

  const handleUpdate = (e) => {
    e.preventDefault();

    const updated_item_name = e.target.item_name.value;
    const updated_image = e.target.image.value;
    const updated_subcategory_Name = e.target.subcategory_Name.value;
    const updated_price = e.target.price.value;
    const updated_description = e.target.description.value;
    const updated_rating = e.target.rating.value;
    const updated_customization = e.target.customization.value;
    const updated_processing_time = e.target.processing_time.value;
    const updated_stockStatus = e.target.stockStatus.value;

    const updatedCraftInfo = {
      updated_item_name,
      updated_image,
      updated_subcategory_Name,
      updated_price,
      updated_description,
      updated_rating,
      updated_customization,
      updated_processing_time,
      updated_stockStatus,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://art-and-craft-store-server-sigma.vercel.app/craftProduct/${currCraftItem._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCraftInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("Saved!", "", "success");
              e.target.reset();
            }
          });
       
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div>
      <div className="hero min-h-screen mt-8">
        <div className="hero-content flex-col lg:w-3/4">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Update Craft Item
            </h1>
          </div>
          <div className="card shrink-0 lg:w-full shadow-2xl bg-base-100">
            <form
              onSubmit={handleUpdate}
              className="card-body lg:grid grid-cols-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Item Name</span>
                </label>
                <input
                  type="text"
                  placeholder="item name"
                  name="item_name"
                  defaultValue={item_name}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="image"
                  name="image"
                  defaultValue={image}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Subcategory Name</span>
                </label>
                <input
                  type="text"
                  placeholder="subcategory name"
                  name="subcategory_Name"
                  defaultValue={subcategory_Name}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control lg:col-span-2">
                <label className="label">
                  <span className="text-lg font-medium">Description</span>
                </label>
                <textarea
                  className="border p-3 rounded-xl"
                  name="description"
                  defaultValue={description}
                  id=""
                  cols="10"
                  rows="5"
                  placeholder="short description"
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Rating</span>
                </label>
                <input
                  type="number"
                  defaultValue={rating}
                  placeholder="rating"
                  name="rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Customization</span>
                </label>

                <div className="flex gap-6 p-3">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="yes"
                      name="customization"
                      value="yes"
                      defaultChecked={customization === "yes"}
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="no"
                      name="customization"
                      value="no"
                      defaultChecked={customization === "no"}
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Processing time</span>
                </label>
                <input
                  type="text"
                  placeholder="processing time"
                  name="processing_time"
                  defaultValue={processing_time}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Stock Status</span>
                </label>

                <div className="flex gap-6 p-3">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="inStock"
                      name="stockStatus"
                      defaultChecked={stockStatus === "In Stock"}
                      value="In Stock"
                    />
                    <label htmlFor="inStock">In stock</label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="order"
                      name="stockStatus"
                      defaultChecked={stockStatus === "Made to order"}
                      value="Made to order"
                    />
                    <label htmlFor="order">Made to Order</label>
                  </div>
                </div>
              </div>

              <div className="form-control col-span-2 lg:w-1/2 lg:mx-auto mt-6">
                <button className="btn bg-[#D24545] text-white text-lg">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;

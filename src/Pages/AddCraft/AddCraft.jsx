import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="hero min-h-screen mt-8">
        <div className="hero-content flex-col w-3/4">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Craft Item</h1>
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body grid grid-cols-1 lg:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Item Name</span>
                </label>
                <input
                  type="text"
                  placeholder="item name"
                  name="item_name"
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
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control col-span-2">
                <label className="label">
                  <span className="text-lg font-medium">Description</span>
                </label>
                <textarea
                  className="border p-3 rounded-xl"
                  name="description"
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
                  defaultValue={0}
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
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="no"
                      name="customization"
                      value="no"
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
                      value="inStock"
                    />
                    <label htmlFor="inStock">In stock</label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="order"
                      name="stockStatus"
                      value="order"
                    />
                    <label htmlFor="order">Made to Order</label>
                  </div>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">User Email</span>
                </label>
                <input
                  type="email"
                  placeholder="user email"
                  name="userEmail"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="user name"
                  name="userName"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control col-span-2 lg:w-1/2 lg:mx-auto mt-6">
                <button className="btn bg-[#D24545] text-white">
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;

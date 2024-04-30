import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
  // const craftItems = useLoaderData();

  return (
    <div className="overflow-x-auto my-12 container mx-auto lg:px-12">
      <h2 className="text-center text-4xl font-semibold mb-6">
        All Art & Craft Items
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Item Name</th>
            <th>Subcategory Name</th>
            <th>Added User</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {craftItems.map((craftItem, idx) => (
            <tr key={craftItem._id} className="hover">
              <th>{idx + 1}</th>
              <td>{craftItem.item_name}</td>
              <td>{craftItem.subcategory_Name}</td>
              <td>{craftItem.userName}</td>
              <td>{craftItem.price}</td>
              <Link to={`/viewDetails/${craftItem._id}`}>
              <button className="btn bg-[#D24545] text-white">
                View Details
              </button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllArtAndCraft;

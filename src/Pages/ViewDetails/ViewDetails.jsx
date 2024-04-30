import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const craftItem = useLoaderData();

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
  } = craftItem;

  return (
    <div className="container mx-auto lg:px-12 my-12">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="p-6 h-[500px]">
          <img
            src={image}
            alt="Art"
            className="border-[#D24545] border-8 object-contain h-full w-full"
          />
        </figure>

        <div className="card-body flex-1">
          <h2 className="card-title">{item_name}</h2>
          <p className="flex-grow-0 mb-5">{description}</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex justify-between border-t-2 pt-3 px-3 text-lg">
              <h3 className="font-medium">Subcategory:</h3>
              <h3>{subcategory_Name}</h3>
            </div>
            <div className="flex justify-between border-t-2 pt-3 px-3 text-lg">
              <h3 className="font-medium">Rating:</h3>
              <h3>{rating}</h3>
            </div>
            <div className="flex justify-between border-t-2 pt-3 px-3 text-lg">
              <h3 className="font-medium">Customization:</h3>
              <h3>{customization}</h3>
            </div>
            <div className="flex justify-between border-t-2 pt-3 px-3 text-lg">
              <h3 className="font-medium">Processing Time:</h3>
              <h3>{processing_time}</h3>
            </div>
            <div className="flex justify-between border-t-2 pt-3 px-3 text-lg">
              <h3 className="font-medium">Status:</h3>
              <h3>{stockStatus}</h3>
            </div>
            <div className="flex justify-between border-t-2 pt-3 px-3 text-lg text-[#D24545]">
              <h3 className="font-bold">Price:</h3>
              <h3 className="font-medium">{price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

import { useLoaderData } from "react-router-dom";
import CraftItem from "../CraftItem/CraftItem";


const CraftItems = () => {
    const craftItems = useLoaderData();
    return (
        <div className="container mx-auto lg:px-12 mt-12">
            <h2 className="text-center text-4xl font-semibold mb-5">Art Paintings</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                {
                    craftItems.map(craftItem => <CraftItem key={craftItem._id} craftItem={craftItem}></CraftItem>)
                }
            </div>
        </div>
    );
};

export default CraftItems;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import MyCraftItem from "../../Components/MyCraftItem/MyCraftItem";

const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext);

  const [myCraftItems, setMyCraftItems] = useState([]);

  useEffect(() => {
    fetch(`https://art-and-craft-store-server-sigma.vercel.app/craftProduct/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCraftItems(data);
      });
  }, [user]);

  return (    
    <div className="container mx-auto lg:px-12 my-12">
      <h2 className="text-center text-3xl lg:text-4xl font-semibold mb-6">
        My Art&Craft List
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {myCraftItems.map((myCraftItem) => (
          <MyCraftItem
            key={myCraftItem._id}
            myCraftItem={myCraftItem}
            setMyCraftItems={setMyCraftItems}
          ></MyCraftItem>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraft;

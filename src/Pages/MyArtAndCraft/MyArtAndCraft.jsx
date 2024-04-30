import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import MyCraftItem from "../../Components/MyCraftItem/MyCraftItem";

const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext);

  const [myCraftItems, setMyCraftItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/craftProduct/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCraftItems(data);
        console.log(data);
      });
  }, [user]);

  return (    
    <div className="container mx-auto lg:px-12 my-12">
      <h2 className="text-center text-4xl font-semibold mb-6">
        My Art&Craft List
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {myCraftItems.map((myCraftItem) => (
          <MyCraftItem
            key={myCraftItem._id}
            myCraftItem={myCraftItem}
          ></MyCraftItem>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraft;

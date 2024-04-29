import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import MyCraftItem from "../../Components/MyCraftItem/MyCraftItem";


const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext);

  const [myCraftItems, setMyCraftItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/craftProduct/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCraftItems(data);
          console.log(data);
      });
  }, [user]);
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold mb-6">
        My Art&Craft List
      </h2>
        <div>
            {
                myCraftItems.map(myCraftItem => <MyCraftItem key={myCraftItem._id} myCraftItem={myCraftItem}></MyCraftItem>)
            }
        </div>
    </div>
  );
};

export default MyArtAndCraft;

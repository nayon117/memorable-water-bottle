import { useEffect, useState } from "react";
import Bottle from "./Bottle";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    useEffect(() => {
        const loadBottle = async () => {
            const res =await fetch("bottles.json")
            const data = await res.json()
            console.log(data);
            setBottles(data)
        }
        loadBottle()
    },[])
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 my-10">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             
             {
                 bottles.map(bottle => <Bottle
                     key={bottle.id}
                     bottle={bottle}
                 ></Bottle>)
           }
         </div>
       </div>
    );
};

export default Bottles;
import { useEffect, useState } from "react";
import Bottle from "./Bottle";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        const loadBottle = async () => {
            const res =await fetch("bottles.json")
            const data = await res.json()
            console.log(data);
            setBottles(data)
        }
        loadBottle()
    }, [])
    
    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
    }

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 my-10">
            <div>
            <h2 className="text-3xl text-center text-primary">Memorable Water Bottle</h2>
                <h2 className="text-2xl text-center my-4 text-primary">Bottle Available: {bottles.length}</h2>
                <h4 className="text-2xl text-center my-4 text-primary">Cart: {cart.length }</h4>
            </div>
            
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             
             {
                 bottles.map(bottle => <Bottle
                     key={bottle.id}
                     bottle={bottle}
                     handleAddToCart={handleAddToCart}
                 ></Bottle>)
           }
         </div>
       </div>
    );
};

export default Bottles;
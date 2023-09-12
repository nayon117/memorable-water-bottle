import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addToLs, getStoredCart, removeFromLs } from "../Utilities/Localstorage";
import Cart from "./Cart";

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

    // load data from local storage 
    useEffect(() => {
        if (bottles.length > 0) {
        const storedCart = getStoredCart()
             const savedCart = []
            for (const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
       }
    },[bottles])
    
    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLs(bottle.id)
    }
    const handleRemoveToCart = (id) => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeFromLs(id)
    }

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 my-10">
            <div>
            <h2 className="text-3xl text-center text-primary">Memorable Water Bottle</h2>
                <h2 className="text-2xl text-center my-4 text-primary">Bottle Available: {bottles.length}</h2>
                <Cart cart={cart} handleRemoveToCart={handleRemoveToCart} />
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
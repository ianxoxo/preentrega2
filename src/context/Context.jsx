import {useState, createContext} from 'react';

export const CartContext = createContext({cart: [], total: 0, qtyTotal: 0});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQty, setQty] = useState(0);

    const addProducts = (item, qty) => {
        const isProduct = cart.find(prod => prod.item.id === item.id);

        if(!isProduct){
            setCart(prev => [...prev, {item, qty}])
            setQty(prev => prev + qty)
            setTotal(prev => prev + item.price * qty)
        }
        else {
            const newCart = cart.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, qty: prod.qty + qty}
                }
                else {
                    return prod
                }
            })
            setCart(newCart)
            setQty(prev => prev + qty)
            setTotal(prev => prev + item.price * qty)

            console.log(cart, total, totalQty)
        }
    }

    const deleteProduct = (id) => {
        const deletedProduct = cart.find(prod => prod.item.id === id)
        const newCart = cart.filter(prod => prod.item.id !== id);
        setCart(newCart)
        setQty(prev => prev - deletedProduct.qty)
        setTotal(prev => prev - (deletedProduct.item.price * deletedProduct.qty))
    }

    const deleteCart = () => {
        setCart([])
        setQty(0)
        setTotal(0)
    }

    return( 
        <CartContext.Provider value={{cart, addProducts, deleteProduct, deleteCart, total, totalQty}}>
            {children}
        </CartContext.Provider>
    )
}
const cartItems = {} 

export const getCartItems = () =>{

    // return [
    //     {
    //         "cart_item_id":1,
    //         "product_id":2,
    //         "price":300,
    //         "pname":"Apple iPhone 13 Pro Max",
    //         "quanity":3
    //     },
    //     {
    //         "cart_item_id":2,
    //         "product_id":2,
    //         "price":300,
    //         "pname":"Apple iPhone 13 Pro Max",
    //         "quanity":3
    //     }
    // ]
    console.log("Object "+Object.values(cartItems))
    return Object.values(cartItems);

}


export const addToCart = (productInfo) =>{
    
    cartItems[productInfo.product_id] = productInfo;
    
}

export const deleteFromCart = (id) =>{
    console.log('DELETE')
    delete cartItems[id]
}


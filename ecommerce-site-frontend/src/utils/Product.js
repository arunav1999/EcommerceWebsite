export const getProducts = () =>{
    return fetch('/api/getproducts')
            .then((res) => res.json())
            .catch((err) => {
                console.log('Error fetching the products',err)
                return [];
            })
}
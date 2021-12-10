export const getProducts = () =>{
    return fetch('/getProducts')
            .then((res) => res.json())
            .catch((err) => {
                console.log('Error fetching the products',err)
            })
}
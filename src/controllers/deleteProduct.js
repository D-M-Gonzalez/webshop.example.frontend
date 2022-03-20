export async function deleteProduct(input){
    const requestOptions = {
        method: 'DELETE',
    };
    fetch(`https://webshop-example-backend.herokuapp.com/api/products/${input}`, requestOptions)
        .then(response => response.json())
}
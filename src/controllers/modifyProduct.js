export async function modifyProduct(input){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name: input.name,
            category: input.category,
            description: input.description,
            image_url: input.image_url,
            price: input.price,
            brand: {
                brand_name: input.brand,
                logo_url: input.logo_url
            }
        })
    };
    await fetch(`https://webshop-example-backend.herokuapp.com/api/products?id=${input._id}&brand_name=${input.brand}`, requestOptions)
        .then(response => response.json())
}
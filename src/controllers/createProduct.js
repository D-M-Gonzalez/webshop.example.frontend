export function createProduct(input){
    const requestOptions = {
        method: 'POST',
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
    fetch('https://webshop-example-backend.herokuapp.com/api/products', requestOptions)
        .then(response => response.json())
}
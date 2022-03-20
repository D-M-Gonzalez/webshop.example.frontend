export async function createProduct(input) { //Does call for a product creation into the server
  const token = sessionStorage.getItem("token");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`, //token required to validate the user
    },
    body: JSON.stringify({
      name: input.name,
      category: input.category,
      description: input.description,
      image_url: input.image_url,
      price: input.price,
      brand: {
        brand_name: input.brand,
        logo_url: input.logo_url,
      },
    }),
  };

  const response = await fetch(
    "https://webshop-example-backend.herokuapp.com/api/products",
    requestOptions
  );
  const data = await response.json();
  return data; //server does return an object, that contains a status code, a message, and all the data returned by the DB
}

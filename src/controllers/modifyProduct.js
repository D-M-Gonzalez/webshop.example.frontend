export async function modifyProduct(input) { //Calls for the modification of a product in the server
 
  const token = sessionStorage.getItem("token");
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    }, //token required to validate the user
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
    `https://webshop-example-backend.herokuapp.com/api/products?id=${input._id}&brand_name=${input.brand}`,
    requestOptions
  );
  const data = await response.json();
  return data; //server does return an object, that contains a status code, a message, and all the data returned by the DB
}

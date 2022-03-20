export async function deleteProduct(input) {//Calls for the deletion of a product in the server
  
  const token = sessionStorage.getItem("token");
  const requestOptions = {
    method: "DELETE",
    headers: { Authorization: `JWT ${token}` }, //token required to validate the user
  };

  const response = await fetch(
    `https://webshop-example-backend.herokuapp.com/api/products/${input}`,
    requestOptions
  );
  const data = await response.json();
  return data; //server does return an object, that contains a status code, a message, and all the data returned by the DB
}

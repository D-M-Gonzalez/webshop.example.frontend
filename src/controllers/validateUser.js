export async function validateUser() { //Calls for token validation in the server
  const token = sessionStorage.getItem("token");
  const requestOptions = {
    method: "POST",
    headers: { Authorization: `JWT ${token}` },
  };
  const response = await fetch(
    "https://webshop-example-backend.herokuapp.com/api/users/validate",
    requestOptions
  );
  return response; //returns the status codes to validate the user
}

export async function registerUser(input) { //Calls for the creation of a new user in the server  
  const token = sessionStorage.getItem("token");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    }, //token required to validate the user
    body: JSON.stringify({
      user_name: input.name,
      password: input.password,
    }),
  };
  const response = await fetch(
    "https://webshop-example-backend.herokuapp.com/api/users",
    requestOptions
  );
  const data = await response.json();
  return data; //server does return an object, that contains a status code, a message, and all the data returned by the DB
}

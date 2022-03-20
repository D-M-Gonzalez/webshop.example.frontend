export async function logInUser(input){
    console.log(input.name)
    console.log(input.password)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            user_name: input.name,
            password: input.password
        })
    };
    const response = await (await fetch('https://webshop-example-backend.herokuapp.com/api/users/login/user', requestOptions)).json()
    return response.message;
}
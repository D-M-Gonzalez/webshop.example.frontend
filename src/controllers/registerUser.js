export async function registerUser(input){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            user_name: input.name,
            password: input.password,
        })
    };
    const response = await (await fetch('https://webshop-example-backend.herokuapp.com/api/users', requestOptions)).json()
    return response.message;
}
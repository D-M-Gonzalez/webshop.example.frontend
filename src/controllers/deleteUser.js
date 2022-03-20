export function deleteUser(input){
    const requestOptions = {
        method: 'DELETE',
    };
    fetch(`https://webshop-example-backend.herokuapp.com/api/users/${input}`, requestOptions)
        .then(response => response.json())
}
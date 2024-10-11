// fetch('https://reqres.in/api/users?page=2').then((response) => {
//     return response.json();
// }).then((json) => console.log(json));

const data = {
    "name": "morpheus",
    "job": "leader"
}

fetch('https://reqres.in/api/users', {method: 'post', body: JSON.stringify(data)}).then((response) => {
    return response.json();
}).then((json) => console.log(json));
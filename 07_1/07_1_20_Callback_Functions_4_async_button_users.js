// Asynchronous
// Using Callback (implies Function as an Argument)

const button = document.getElementById("fetchusersBtn");

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await resp.json();
    const names = users.map(({ name }) => name);
    console.log(names);
}

button.addEventListener("click", fetchUsers);

console.log(`This should be shown First
and just until push the Button
it will show the Users.`);

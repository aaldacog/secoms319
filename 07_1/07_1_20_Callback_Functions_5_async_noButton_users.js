// Asynchronous
// Using Callback (implies Function as an Argument)

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await resp.json();
    const names = users.map(({ name }) => name);
    console.log(names);
    console.log(`This just after show Users.`)
}

// FIRST - We run function fetchUsers()
fetchUsers();

// SECOND - We whos this message
console.log(`This 
is
after
show Users ...`);

// FINALLY - We wee the SECOND message and then the FIRST messages
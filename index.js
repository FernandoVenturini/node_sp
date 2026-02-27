// CRIANDO ESTRUTURA DA API:
// Import the Express library
const express = require('express'); 

// Create an instance of an Express server
const server = express(); 

// Use the express.json() middleware to parse JSON request bodies
server.use(express.json());

// Define a PORT number for the server to listen on
const PORT = 3000;

// CRUD - CREATE, READ, UPDATE, DELETE


// Define an array of courses
const cursos = ['Node JS', 'React', 'JavaScript']; 

server.get('/cursos/:index', (req, res) => {
    const { index } = req.params; // Get the 'index' parameter from the URL path
    return res.json(cursos[index]); // Send a JSON response that includes the course at the specified index
});

// QUERY E ROUTE PARAMS:
// Define a route for the root URL ("/") that sends a welcome message
server.get('/', (req, res) => {
    //res.send('Welcome to the Express server!'); // Send a response to the client
    res.json({ message: 'Welcome to the Express server!' }); // Send a JSON response to the client 
});

// Define a route for "/cursos" that sends the list of courses as a JSON response
server.get('/cursos', (req, res) => {
    return res.json(cursos); // Send a JSON response that includes the list of courses
});

// Define a route for "/cursos" that retrieves the 'nome' query parameter from the request
server.get('/cursos', (req, res) => {
    const { nome } = req.query; // Get the 'nome' query parameter from the request
    res.json({ message: `Olá, ${nome}!` }); // Send a JSON response that includes the 'nome' parameter in a greeting message
});

// Define a route for "/curso/:id" that retrieves the 'id' parameter from the URL path
server.get('/cursos/:id', (req, res) => {
    const id = req.params.id; // Get the 'id' parameter from the URL path    
    res.json({ curso: `Aprendendo o curso com ID ${id}!` }); // Send a JSON response that includes the 'id' parameter in a message
});

// METODO POST:
// Define a route for "/cursos" that handles POST requests to add a new course
server.post('/cursos', (req, res) => { // Handle POST requests to the "/cursos" route   
    const { name } = req.body; // Get the 'name' property from the request body
    cursos.push(name); // Add the new course name to the 'cursos' array
    return res.json(cursos); // Send a JSON response that includes the updated list of courses
});

// MEOTODO PUT: Edita e Atualiza um curso existente
server.put('/cursos/:index', (req, res) => { // Handle PUT requests to the "/cursos/:index" route
    const { index } = req.params; // Get the 'index' parameter from the URL path
    const { name } = req.body
    cursos[index] = name; // Update the course name at the specified index in the 'cursos' array
    return res.json(cursos); // Send a JSON response that includes the updated list of courses
});

// METODO DELETE: Exclui um curso existente
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params; // Get the 'index' parameter from the URL path
    cursos.splice(index, 1); // Remove the course at the specified index from the 'cursos' array
    return res.json({ message: `Curso ${index} deletado com sucesso!` }); // Send a JSON response that includes the updated list of courses
});


// Start the server and listen on the defined PORT
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`); // Log a message when the server starts
});

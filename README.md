### INSTALANDO EXPRESS:
    -> npm install express

### STARTANDO PROJETO:
    -> node index.js

### INSTALANDO NODEMON:
    -> npm install --save-dev nodemon
    -> Configure um script no package.json:
        -> "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "node index.js",
                "dev": "nodemon index.js" // Substitua 'index.js' pelo seu arquivo principal
            }

### STARTANDO PROJETO COM NODEMON:
    -> npm run dev
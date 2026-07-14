const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();
const PORT = 3000;

// Set EJS as the templating engine 
app.set('view engine', 'ejs');

// Middleware to parse form data 
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display form data
app.get('/', (req, res) => {
	res.render('index'); 
});

// Route to handle form submission 
app.post('/submit', (req, res) => { 
	// const name = req.body.name;
	// const email = req.body.email;
	const { name, email } = req.body; 
	res.render('result', { name: name, email: email }); 
});

// Start server 
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`); 
});
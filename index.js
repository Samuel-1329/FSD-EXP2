const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 
const PORT = 3000; 

// Set EJS as template engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); 

// Show the form
app.get('/', (req, res) => { 
	res.render('index'); 
});

// Process the form
app.post('/submit', (req, res) => { 
	const name = req.body.name; 
	const grade = req.body.grade; 
	
	// Set color based on grade 
	let color = "black"; 
	if (grade === 'A') 
		color = 'green'; 
	else if (grade === 'B') 
		color = 'blue'; 
	else 
		color = 'red'; 

	// Send values to result page 
	res.render('result', { name: name, grade: grade, color: color });
}); 

// Start server 
app.listen(PORT, () => { 
	console.log(`Server running at http://localhost:${PORT}`); 
});    
const express = require('express');

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
 
// Route
app.get('/', (req, res) => {
    const user = {
        name: 'SAMUEL',
        course: 'Full Stack Development',
        college: 'PSCMR College'
    };

    res.render('index', { user: user });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
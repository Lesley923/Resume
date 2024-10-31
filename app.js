const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/skill', (req, res) => res.sendFile(path.join(__dirname, 'views', 'skill.html')));
app.get('/projects', (req, res) => res.sendFile(path.join(__dirname, 'views', 'projects.html')));

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

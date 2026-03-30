const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'API Lab 2 CI/CD',
        status: 'running',
        version: '1.0.0',
        deploye_par: 'GitHub Actions'
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/info', (req, res) => {
    res.json({
        app: 'Backend Lab 2',
        technologie: 'Node.js + Express',
        azure: 'App Service'
    });
});

app.listen(port, () => {
    console.log('API demarree sur le port ' + port);
});

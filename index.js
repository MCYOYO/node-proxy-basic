const express = require('express');
const Unblocker = require('unblocker');
const app = express();

const unblocker = new Unblocker({ prefix: '/proxy/' });

app.use(unblocker);

app.get('/', (req, res) => {
    res.send('<h1>Proxy is Live</h1><p>Type <code>/proxy/https://google.com</code> at the end of the URL to browse.</p>');
});

const port = process.env.PORT || 8080;
app.listen(port).on('upgrade', unblocker.onUpgrade); 
console.log(`Unblocker running on port ${port}`);

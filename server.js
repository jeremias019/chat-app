const express = require('express');
const app = express();

// Stream chat server SDK 
const StreamChat = require('stream-chat').StreamChat;
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.get('/', (req,res) => {
    res.sendFile('/index.html');
});

app.listen(8800, () => {
    console.log('Example app listening on port 8800!');
});

// [...]

const serverClient = new StreamChat('mqvgcp7nr9fr', 'gzrkwp5fng73hbv8b437frhyfz2w3qjhk2hgp9axk34mynxp2mjdc39nevhh78jm');


app.get('/token', (req, res) => {
    const { username } = req.query;
    if (username) {
        const token = serverClient.createToken(username);
    } else {
        res.status(401).json({ message: 'invalid request', status: 'error'});
    }
});

// [...]
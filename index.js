const express = require('express');
const app = express();
const port = process.env.PORT || 8085;

app.get('/', (req,res) => {
    res.send('<h2>Hi there</h2>');
});

app.get('/wallet/eth/generate', (req,res) => {
    const wallet = generateETH();
    console.log('wallet is ', wallet);
    res.send('{"result":"OK"}');
});

app.get('/wallet/eth/connect', (req,res) => {
    
});

app.get('/wallet/eth/disconnect', (req,res) => {
    
});

app.get('/wallet/eth/deposit', (req,res) => {
    
});

app.get('/wallet/eth/withdrawal', (req,res) => {
    
});


app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
});


function generateETH(){
    const cw = require('crypto-wallets');
    const wallet = cw.generateEthereumWallet('ETH');
    return wallet
}
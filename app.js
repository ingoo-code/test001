var express = require('express');
const bodyParser = require('body-parser');
const rpcMethods = require("./routes/api");

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

const PORT = 9332;
const ACCOUNT = "kbpark";
const ID_STRING = "kga_litecoin";
const headers = {
  "content-type": "text/plain;"
};

// app.use("/", rpcMethods);

app.set('view engine', 'pug');

app.get('/', function (req, res) {  
    res.render('index')
});

app.get('/blog', function (req, res) {  
    res.render('blog');
});

app.get('/getaddressesbyaccount', function (req, res) {  
    res.render('getaddressesbyaccount');
});

app.post('/getaddressesbyaccount_result', (req, res) => {
    var account = req.body.account;
    // res.send(`Account : ${account}`);
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getaddressesbyaccount","params":["${account}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

app.get('/getbalance', function (req, res) {  
    res.render('getbalance');
});

app.post('/getbalance_result', (req, res) => {
    var account = req.body.account;
    // res.send(`Account : ${account}`);
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getbalance","params":["${account}"]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

app.get('/listaccounts', function (req, res) {  
    res.render('listaccounts');
});

app.post('/listaccounts_result', (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"listaccounts","params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

app.get('/listtransactions', function (req, res) {  
    res.render('listtransactions');
});

app.post('/listtransactions_result', (req, res) => {
    var account = req.body.account;
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"listtransactions","params":["${account}"]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


app.get('/getnewaddress', function (req, res) {  
    res.render('getnewaddress');
});

app.post('/getnewaddress_result', (req, res) => {
    var account = req.body.account;
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getnewaddress","params":["${account}"]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


app.get('/getpeerinfo', function (req, res) {  
    res.render('getpeerinfo');
});

app.post('/getpeerinfo_result', (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getpeerinfo","params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


app.get('/getreceivedbyaccount', function (req, res) {  
    res.render('getreceivedbyaccount');
});

app.post('/getreceivedbyaccount_result', (req, res) => {
    var account = req.body.account;
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getreceivedbyaccount","params":["${account}"]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

app.get('/getreceivedbyaddress', function (req, res) {  
    res.render('getreceivedbyaddress');
});

app.post('/getreceivedbyaddress_result', (req, res) => {
    var address = req.body.address;
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getreceivedbyaddress","params":["${address}"]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

app.get('/getnetworkinfo', function (req, res) {  
    res.render('getnetworkinfo');
});

app.post('/getnetworkinfo_result', (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getnetworkinfo","params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


app.get('/getinfo', function (req, res) {  
    res.render('getinfo');
});

app.post('/getinfo_result', (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getinfo","params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


app.get('/getmininginfo', function (req, res) {  
    res.render('getmininginfo');
});

app.post('/getmininginfo_result', (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getmininginfo","params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


app.get('/getconnectioncount', function (req, res) {  
    res.render('getconnectioncount');
});

app.post('/getconnectioncount_result', (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getconnectioncount","params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


app.get('/getdifficulty', function (req, res) {  
    res.render('getdifficulty');
});

app.post('/getdifficulty_result', (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getdifficulty","params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


app.listen(3000, function () {  
    console.log('litecoin API tutorial is running at http://localhost:3000/');
});

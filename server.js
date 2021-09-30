const express = require('express')
const request = require('request')
const cheerio = require('cheerio')
const app = express();

app.get('/',(req,res)=>{
    // 첫번쨰 인자값은 option 정보 , 두번째는 callback
    // 첫번째 인자값은 url주소 or Object 들어갑니다.
    request('https://naver.cm',(err, response, body)=>{
        //console.log(err) 에러반환
        console.log(err)
        // console.log(response) 이것은 객체로 반환
        // console.log(body) 스트링 그자체 반환 
        if ( err == null ) { 
            res.send('hello naver')
        } else {
            res.send(`err 났..`)
        }
    })

    // console.log('hello ingcoin api server start')
    // res.send(`hello ingcoin api server start`)
})

//크롤링 만들기?
app.get('/crawling',(req,res)=>{
    request(`https://naver.com`,(err,response,body)=>{
        let $ = cheerio.load(body)
        $('#footer > div > div.aside_area > div.partner_box_wrap > div:nth-child(3) > a').each((index,item)=>{
            let {data} = item.childNodes[0]
            console.log(data)
        })
    })

    res.send('크롤링중..')
})

const USER = process.env.RPC_USER || 'ingoo'
const PASS = process.env.RPC_PASSWORD || '1234'
const RPCPORT = process.env.RPC_PORT || 9233

const ACCOUNT = "ingoo";
const ID_STRING = "ingoo_coin";
const headers = {
  "content-type": "text/plain;"
};

router.get("/getbestblockhash", (req, res) => {
    let dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
    let options = {
        url: `http://${USER}:${PASS}@127.0.0.1:${RPCPORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    }

    callback = (error, response, body) => {
        if (!error && response.statusCode == 200) {
        const data = JSON.parse(body)
        res.send(data)
        }
    }

    request(options, callback);
});

app.listen(3000,()=>{
    console.log(`server start port 3000`)
})
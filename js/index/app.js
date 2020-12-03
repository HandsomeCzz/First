
// node.js启动服务器，需要通过代码自行完成

var http = require('http');
var https = require('https');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var cheerio = require('cheerio');

//创建一个服务器
var server = http.createServer(function(req,res){
    
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if( /\/api/.test(req.url) ){   // ajax发起过来的请求
        console.log(req.url);
           
        // 只要是自己网站发起的ajax请求，就可以得到数据，但是如果是其他方式：浏览器自身、反向代理都没有权限 , req.headers.referer 不能伪造的 csrf防御
        if( req.headers.referer && req.headers.referer.includes('localhost:3000') ){

            https.get('https://www.mi.com/?client_id=180100041080&masid=2110.0001',(resp)=>{
                var content = '';
                resp.on('data',(chunk)=>{
                    content += chunk;
                })

                resp.on('end',()=>{
                    var $ = cheerio.load(content);
                    var result

                    var elem = "req";

                    $(elem).each((i,elem)=>{
                        
                    })

                    res.end(JSON.stringify(result));
                    // console.log((res.end));

                })
            })


        }
        else{
            res.end(JSON.stringify({
                "errcode" : -1,
                "errmsg" : "非法访问"
            }));
        }

    }
    else{   // 请求资源 html文件\CSS文件\JS文件....

        if( /\.css/.test(req.url) ){
            res.setHeader('Content-Type','text/css;charset=utf-8');
        }
        else if(/\.html/.test(req.url)){
            res.setHeader('Content-Type','text/html;charset=utf-8');
        }
        
        var reqUrl = url.parse(req.url).pathname;

        console.log(url.parse(req.url));
    
        fs.readFile(`views/${reqUrl}`,(err,data)=>{
            console.log(reqUrl);
            if(err){
                res.end('404');
                return;
            }
            res.end(data);
        });

    }

    

});

//启动服务器
server.listen(3000,'localhost',(err)=>{
    if( err ){
        console.log('服务器启动失败！！！');
        return;
    }
    console.log('服务器启动成功');
    
});
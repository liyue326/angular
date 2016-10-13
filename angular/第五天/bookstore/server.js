/**
 * Created by yue on 2016/9/21 0021.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
var books=[
    {name:'nodejs',price:40,id:1,count:1},
    {name:'node',price:30,id:2,count:2},
    {name:'js',price:20,id:3,count:3},
    {name:'nos',price:40,id:4,count:4}
];
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='./'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./bookstore.html').pipe(res);
    }else if(/^\/book(\/\d+)?/.test(pathname)){
        //正则
        //匹配成功 判断有没有id 判断方法
        var method=req.method;
        var matcher=pathname.match(/^\/book\/(\d+)/);
        switch (method){
            case 'GET':
                if(matcher){
                    var id=matcher[1];
                    var book=books.find(function(item){
                        if(item.id==id){
                            return item;
                        }

                    });
                    res.end(JSON.stringify(book));
                }else{
                    res.end(JSON.stringify(books));
                }
                break;
            case 'DELETE':
                if(matcher){
                    var id=matcher[1];
                    books.filter(function(item){
                        return item.id!=id;
                    })
                    res.end(JSON.stringify({}));
                }else{
                    books=[];
                    res.end(JSON.stringify({}))

                }
                break;
            case 'PUT':
                if(matcher){
                    var id=matcher[1];
                    var result='';
                    req.on('data',function(){
                        result+=data;
                    })
                    req.on('end',function(){
                        var newBook=JSON.parse(result);
                        book.map(function(item){
                            if(item.id==id){
                                return newBook
                            }
                            return item;

                        })
                    })

                }


        }
        //if(matcher){
        //
        //}else{
        //
        //}
        //
      res.end(JSON.stringify(books))
    }
    else{
        var flag=fs.existsSync('.'+pathname);
        if(flag){
            //res.setHeader('Content-Type','text/html;charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode=404;
            res.end('404');
        }
    }

}).listen(3000);
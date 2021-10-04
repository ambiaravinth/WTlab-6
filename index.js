var http = require('http');
url = require('url');
var querystring = require('querystring');
var qs,val1,val2;

http.createServer(function(req,res){
	var data1 = '';
	req.on('data',function(chunk){
		console.log(chunk);
		data1 += chunk;
	});
	req.on('end',function(){
		qs=querystring.parse(data1);
		console.log(qs);
		val1=qs['usname'];
		val2=qs['pass'];	
		if(val1 == "abcd" && val2 == "123")
		{
    		res.write(" <h1 style=\"color:green; text-align: center;\">Welcome your login Succesfully!!!</h1> ");		
		}
		else
		{
			res.write(" <h1 style=\"color:red; text-align: center;\">Username/Password Invalid...</h1> ");
		}
		res.end("");
	});
}).listen(4000);
console.log('post server started');

function onRequest(request,response)
{
    var query = url.parse(request.url).query;   
    var val3 = querystring.parse(query)["usname"];
	var val4 = querystring.parse(query)["pass"];
    
	if (val3 == "abcd" && val4 == "123")
	{
		response.write(" <h1 style=\"color:green; text-align: center;\">Welcome your login Succesfully!!!</h1> ");		
	}
	else
	{
		response.write(" <h1 style=\"color:red; text-align: center;\">Username/Password Invalid...</h1> ");
	}
    response.end();
}
http.createServer(onRequest).listen(5001);
console.log('get server started');
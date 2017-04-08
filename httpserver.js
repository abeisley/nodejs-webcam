var fs = require("fs");
var http = require("http"), port = 1234;

var server = http.createServer(function(request,response){
	var img = fs.readFileSync("./image.jpg");
	response.writeHeader(200, {"Content-Type": "image/jpg"});
	response.end(img, 'binary');
});

server.listen(port);
console.log("Server Running on "+port+".\nLaunch http://localhost:"+port);

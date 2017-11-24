var user=require("./user.js")

module.exports = {
    logic: function(req,res) {

        console.log(req.url)
        if(req.url == "/save")
        {
            user.save("charlelie", function()
            {
                // Write a responsive header
                res.writeHead(201, {'Content-Type': 'text/plain'});

                // Write a responsive content
                res.end('user charlelie is saved');
            })
        } else if(req.url == "/get") {
            user.get("2984E87RKS", function() {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('got the user charlelie');
            })
        } else if(req.url == "/") {
            console.log("index page");
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Welcome here ! Non stop fun !');
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Route not found');
        }

    },
    port: "8888",
    address: "127.0.0.1"
}

// PHP SERVER CREATION /////
const PHPServer = require('php-server-manager');

const server = new PHPServer({
    port: 5555,
    directory: __dirname,
    directives: {
        display_errors: 1,
        expose_php: 1
    }
});

server.run();

var opn = require('opn');

// opens the url in the default browser 
opn('http://sindresorhus.com');

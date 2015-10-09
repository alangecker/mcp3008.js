/**
This is just a dumb test to check that the MCP3308 works. It requires the ADC to be wired up and have something connected to channel 0. Edit as necessary to suit your setup.
*/

var Mcp3308 = require('./mcp3308'),
    adc = new Mcp3308(),
    out = function (value) {
        console.log("Read", value);
    };

adc.read(0, out);
adc.poll(0, 50, out);
setTimeout(function () { adc.close(); }, 1000);

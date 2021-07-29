var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    console.log('Connection has been established successfully!');

    client.subscribe('shellies/shellydimmer2-E8DB84D6A2CA/temperature');
    client.subscribe('shellies/shellydimmer2-E8DB84D6A2CA/light/0/status');
    client.subscribe('shellies/shellydimmer2-E8DB84D6A2CA/light/0');
    client.publish("shellies/shellydimmer2-E8DB84D6A2CA/light/0/command", "off", function () {
        console.log("sent ==> ", "off");
    });

    
});


client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.reconnecting
})
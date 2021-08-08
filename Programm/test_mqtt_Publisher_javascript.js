var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    console.log('Connection has been established successfully!');

    //client.subscribe('shellies/shellydimmer2-E8DB84D6A2CA/temperature');
    //client.subscribe('shellies/shellydimmer2-E8DB84D6A2CA/light/0/status');
    //client.subscribe('shellies/shellydimmer2-E8DB84D6A2CA/light/0');
    //client.subscribe('esp32/distance/hcsr04/Value');
    client.subscribe('shellies/shellymotion-60A42386D374/status');
    client.subscribe('shellies/shellygas-E868E7C6E54A/sensor/operation');
    client.subscribe('shellies/shellygas-E868E7C6E54A/sensor/gas');
    client.subscribe('shellies/shellygas-E868E7C6E54A/sensor/concentration');
    client.subscribe('esp32/distance/hcsr04/Value');
    //client.publish('shellies/shellydimmer2-E8DB84D6A2CA/light/0/command', "on");
    //client.publish("shellies/shellydimmer2-E8DB84D6A2CA/light/0/command", "on", function () {
       // console.log("sent ==> ", "on");
    //});

    
});


client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.reconnecting
})
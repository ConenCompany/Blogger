var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    console.log('Connection has been established successfully!');

    //client.subscribe('shellies/shellydimmer2-E8DB84D6A2CA/temperature');
    client.subscribe('shellies/shellydimmer2-E8DB84D6A2CA/light/0/status');
    client.subscribe('shellies/shellydimmer2-E8DB84D6A2CA/light/0');
    //client.subscribe('esp32/distance/hcsr04/Value');
    client.subscribe('shellies/shellymotion-60A42386D374/status');
    client.subscribe('shellies/shellygas-E868E7C6E54A/sensor/operation');
    client.subscribe('shellies/shellygas-E868E7C6E54A/sensor/gas');
    client.subscribe('shellies/shellygas-E868E7C6E54A/sensor/concentration');
    client.subscribe('shellies/shellydw2-AA49E8/sensor/state');
    client.subscribe('esp32/distance/hcsr04/Value');
    //client.publish('shellies/shelly1-E8DB84A030C8/relay/0/command', "on");

    //client.publish('shellies/shelly1-E8DB84A030C8/relay/0/command', "off");
    //client.publish('shellies/shelly1-C45BBE5FC8F6/relay/0/command', "off");
    1

    //client.publish('shellies/shelly1-C45BBE5F68EE/relay/0/command', "off");
    //client.publish('shellies/shelly1-C45BBE5F6263/relay/0/command', "off");

    //Shelly_RGB
    client.publish('shellies/shellyrgbw2-80A7FE/color/0/set', JSON.stringify({
        "mode": "color",
        /* "color" */
        "red": 60,
        /* red brightness, 0..255 */
        "green": 230,
        /* green brightness, 0..255 */
        "blue": 25,
        /* blue brightness, 0..255 */
        "gain": 100,
        /* gain for all channels, 0..100 */
        "white": 0,
        /* white brightness, 0..255 */
        "effect": 0,
        /* applies an effect when set */
        "turn": "on" /* "on", "off" or "toggle" */
    }));
    client.subscribe('shellies/shellyrgbw2-80A7FE/color/0'); // On Off status RGB

    //client.publish("shellies/shellydimmer2-E8DB84D6A2CA/light/0/command", "on", function () {
    // console.log("sent ==> ", "on");
    //});
    client.publish('shellies/shellydimmer2-E8DB84D6A2CA/light/0/set', JSON.stringify({
        "brightness": 100,
        /* output brightness 1..100 */
        "turn": "on" /* one of "on", "off", or "toggle" */
    }));


});


client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    console.log(topic.toString())
    client.reconnecting
})
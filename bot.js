var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
args = args.splice(1);
switch(cmd) {
// !meyerland
case 'meyerland':
bot.sendMessage({
to: channelID,
message: '29.686701,-95.462250'
});
break;
// !610main
case '610main':
bot.sendMessage({
to: channelID,
message: '29.678337,-95.427597'
});
break;
// !holcombe
case 'holcombe':
bot.sendMessage({
to: channelID,
message: '29.704912,-95.425764'
});
break;
// !medical
case 'medical':
bot.sendMessage({
to: channelID,
message: '29.707443,-95.400444'
});
break;
// !westpark
case 'westpark':
bot.sendMessage({
to: channelID,
message: '29.727592,-95.430717'
});
break;
// !westheimer
case 'westheimer':
bot.sendMessage({
to: channelID,
message: '29.742638,-95.410149'
});
break;
// !memorial
case 'memorial':
bot.sendMessage({
to: channelID,
message: '29.760876,-95.417366'
});
break;
// !durham
case 'durham':
bot.sendMessage({
to: channelID,
message: '29.776346,-95.410889'
});
break;
// !yale
case 'yale':
bot.sendMessage({
to: channelID,
message: '29.774239,-95.398949'
});
break;
// !shearn
case 'shearn':
bot.sendMessage({
to: channelID,
message: '29.774250,-95.384857'
});
break;
// !mcgowen
case 'mcgowen':
bot.sendMessage({
to: channelID,
message: '29.746368,-95.376724'
});
break;
// !hadley
case 'hadley':
bot.sendMessage({
to: channelID,
message: '29.748571,-95.374420'
});
break;
// !rush
case 'rusk':
bot.sendMessage({
to: channelID,
message: '29.759851,-95.365578'
});
break;
// !echo
case 'echo':
bot.sendMessage({
to: channelID,
message: '29.782026,-95.521751'
});
break;
// !westoaks
case 'westoaks':
bot.sendMessage({
to: channelID,
message: '29.731506,-95.644814'
});
break;
// !eldridge
case 'eldridge':
bot.sendMessage({
to: channelID,
message: '29.653633,-95.621712'
});
break;
// !bayland
case 'bayland':
bot.sendMessage({
to: channelID,
message: '29.692295,-95.499428'
});
break;
// !discovery
case 'discovery':
bot.sendMessage({
to: channelID,
message: '29.752346,-95.359085'
});
break;
// !france
case 'france':
bot.sendMessage({
to: channelID,
message: '48.890587,2.238517'
});
break;
// !copenhagen
case 'copenhagen':
bot.sendMessage({
to: channelID,
message: '55.662278, 12.562462'
});
break;
// !germanmall
case 'germanmall':
bot.sendMessage({
to: channelID,
message: '51.48986, 6.875331'
});
break;
// !busan
case 'busan':
bot.sendMessage({
to: channelID,
message: '35.157269,129.055542'
});
break;
// !frystarbucks
case 'frystarbucks':
bot.sendMessage({
to: channelID,
message: '29.790443,-95.720520'
});
break;
// !frysprint
case 'frysprint':
bot.sendMessage({
to: channelID,
message: '29.785858,-95.723282'
});
break;
// !sugarland
case 'sugarland':
bot.sendMessage({
to: channelID,
message: '29.599909,-95.624336'
});
break;
// !pearland
case 'pearland':
bot.sendMessage({
to: channelID,
message: '29.556290,-95.386124'
});
break;
// !atascocita
case 'atascocita':
bot.sendMessage({
to: channelID,
message: '29.997538,-95.176704'
});
break;
// !humble
case 'humble':
bot.sendMessage({
to: channelID,
message: '30.009262,-95.266701'
});
break;
// !cypress
case 'cypress':
bot.sendMessage({
to: channelID,
message: '29.969549,-95.693634'
});
break;
// !jersey
case 'jersey':
bot.sendMessage({
to: channelID,
message: '29.891306,-95.584824'
});
break;
// !willowbrook
case 'willowbrook':
bot.sendMessage({
to: channelID,
message: '29.959717,-95.539078'
});
break;
// !willowbrookamc
case 'willowbrookamc':
bot.sendMessage({
to: channelID,
message: '29.953651,-95.541931'
});
break;
// !deerbrook
case 'deerbrook':
bot.sendMessage({
to: channelID,
message: '30.009281,-95.270515'
});
}
}
});

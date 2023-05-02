// Config
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
const guest = config['run-as-guest'];
const ooc = config['use-ooc'];
const dctoken = config['discord-token'];
const authtoken = config['character-ai-authtoken'];
const characterId = config['character-id'];
const prefix = config['prefix']

// Discord setup
const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false
});

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
});

// Character AI setup
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    if (guest == true) {
        await characterAI.authenticateAsGuest();
    } else {
        await characterAI.authenticateWithToken(authtoken);
    }

    const chat = await characterAI.createOrContinueChat(characterId);

    // Functions
    client.on('message', async(message) => {
        if (message.author.id === client.user.id) {
            return;
        }
        // Commands
        if (message.content === `${prefix}reset`) {
            // Reset the character's memory (Save and Start New Chat)
            const resp =  await chat.saveAndStartNewChat()
            message.channel.send(resp);
        }
        try {
            message.channel.sendTyping();
            if (ooc == true) {
                var msg = `[New message sent by '${message.author.username}#${message.author.discriminator}' in DMs]: ${message.content}`;
                const resp = await chat.sendAndAwaitResponse(msg, true);
                message.channel.send(resp.text);
            } else {
                const resp = await chat.sendAndAwaitResponse(message.content, true);
                message.channel.send(resp.text);
            }
            // message.channel.send(resp.text);
        } catch (error) {
            console.log(error);
        }
        
    });
})();

client.login(dctoken);
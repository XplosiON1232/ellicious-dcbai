// Discord setup
const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
	// See other options here
	// https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
	// All partials are loaded automatically
    checkUpdate: false
});

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
});

// Character AI setup
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    // await characterAI.authenticateAsGuest();
    const authtoken = "Enter CharacterAI Authtoken Here";
    await characterAI.authenticateWithToken(authtoken);

    // const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw" // Discord moderator
    const characterId = "aKm7p1EvQ9If1Apr0CDWWMWTJfE2-q0CBKTqtKEfQaI" // Ellie v2

    const chat = await characterAI.createOrContinueChat(characterId);
    // const response = await chat.sendAndAwaitResponse('*start of conversation*', true);

    // console.log(response);

    // Functions
    client.on('message', async(message) => {
        if (message.author.id === client.user.id) {
            return;
        }
        try {
            const resp = await chat.sendAndAwaitResponse(message.content, true);
            message.channel.send(resp.text);
        } catch (error) {
            console.log(error);
        }
        
    });
})();







dctoken = 'Enter Token Here';

client.login(dctoken);
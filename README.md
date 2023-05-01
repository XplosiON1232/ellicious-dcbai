# Ellicious ✨ Discord AI Conversation Bot
Ellicious is a Discord selfbot using AI powered by [character.ai](https://beta.character.ai) to create natural conversations with people on Discord. It currently has the ability to respond to people in dms and servers. However, it can not at the moment tell apart different persons. This will come very soon.

It uses the [unofficial character.ai node.js wrapper](https://github.com/realcoloride/node_characterai) by [realcoloride](https://github.com/realcoloride), as well as the [discord.js-selfbot](https://github.com/aiko-chan-ai/discord.js-selfbot-v13) for using Discord's API. For issues or to leave suggestions, please make a post [here](https://github.com/XplosiON1232/ellicious-dcbai/issues) :D

> ⚠ Ellicious is in **VERY** early development<br>
> ⚠ It can currely only have a conversation with one person at a time<br>
> ⚠ To reset a conversation, you must manually `Save and Start New Chat` at [character.ai](https://beta.character.ai) for that specific character

## Features
- ✨ Easy to setup and use
- 🤝 Works in dms and servers
- 😊 Realistic conversations powered by [character.ai](https://beta.character.ai)

### Upcoming features
- 👀 Ability to see and understand images
- 🖼️ Ability to generate images and send them
- 🔄 Reset memory (without having to do this manually at [character.ai](https://beta.character.ai))
- 🗣️ Can have conversations with multiple people at once
- 🧠 Remembers conversations with different people

# Setup
## Necessities
- [Node.js](https://nodejs.org/en/download) (for linux, run `sudo apt install nodejs`)
- [Character.ai](https://beta.character.ai) account
- [Discord](https://discord.com/register) account ([instructions below](#-discord-setup))

## ✨ Ellicious Setup
1. Click the green button saying `<> Code` and choose `Download ZIP`, or click here: [direct download](https://github.com/XplosiON1232/ellicious-dcbai/archive/refs/heads/main.zip)
2. Extract the ZIP file
3. Open `config.json` and enter your credentials (see `💬 Discord Setup` and ``)
4. Open CMD in that directory (click the file directory address field in Explorer when you're in that folder, and enter `cmd`)
5. Enter `node index.js`
6. 🎉 Done! Wait a minute and the bot should work :D

## 💬 Discord Setup
1. Go to [discord.com/register](https://discord.com/register)<br>- Use icongito mode on your browser if the link takes you to the Discord app interface.
2. Acquire a temporary email address through a temp-mail service, for example [mail.tm](https://mail.tm/).
3. Enter a username that you like for the account, and a password.
3. Save email, username and password somewhere, for example a text document on your computer.
4. Create the account and verify the email address using the temp-mail service.
5. Press `CTRL` + `SHIFT` + `J`, or press `F12` and navigate to the `Console` tab.
6. At the bottom, paste this snippet:
```js
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```
7. This will print your token, now copy it and save it along with the other credentials.
8. Paste the token in the `config.json` file, for Ellicious.
9. 🎉 Done! Now you just have to add the account to start chatting!

## 👁‍🗨 Character.ai Setup
### Getting Authorization Token (authtoken)
1. Go to [character.ai](https://beta.character.ai) and login
2. Press `F12`, or `CTRL` + `SHIFT` + `I` to open the developer tools, and go to the `Application` tab
3. Go to the `Storage` section and expand `Local Storage`, then click on `https://beta.character.ai/`
4. Look for the key named `@@auth0spajs@@::dyD3gE281MqgISG7FuIXYhL2WEknqZzv::https://auth0.character.ai/::openid profile email offline_access`
5. Expand the body and copy the access token (it is pretty long)

![Access_Token](https://i.imgur.com/09Q9mLe.png)

> Image from [node_characterai](https://github.com/realcoloride/node_characterai)

6. Now, paste it in `config.json` as the value of `character-ai-authtoken`
7. 🎉 Done! (make sure to save the `config.json` file)

### Gettting Character ID
You can find the characters ID in the URL of a character's chat page. Open your desired character's chat, and copy the value after `?char=` in the URL.
![Character_ID](https://i.imgur.com/nd86fN4.png)
Now you gotta paste it in the `config.json` file, as the value of `character-id` :D

# Ellicious ✨ Discord AI Conversation Bot
Ellicious is a Discord selfbot using AI powered by [character.ai](https://beta.character.ai) to create natural conversations with people on Discord. It currently has the ability to respond to people in dms and servers. However, it can not at the moment tell apart different persons. This will come very soon.

It uses the [unofficial character.ai node.js wrapper](https://github.com/realcoloride/node_characterai) by [realcoloride](https://github.com/realcoloride), as well as the [discord.js-selfbot](https://github.com/aiko-chan-ai/discord.js-selfbot-v13) for using Discord's API.

## Features
- ✨ Easy to setup and use
- 🤝 Works in dms and servers
- 🗣️ Can have conversations with multiple people at once
- 😊 Realistic conversations powered by [character.ai](https://beta.character.ai)
- 🧠 Remembers conversations with different people

### Upcoming features
- 👀 Ability to see and understand images
- 🖼️ Ability to generate photos and send them
- 🔄 Reset memory (without having to do this manually at [character.ai](https://beta.character.ai))

# Setup
## ✨ Ellicious Setup
Setup...

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
8. Paste the token in the `creds.json` file, for Ellicious.
9. 🎉 Done! Now you just have to add the account to start chatting!

const simplydjs = require('simply-djs')

module.exports = {
    name: "sugestie",
    category: "advanced",
    run: async (client, message, args) => {
        try {
            let arguments = args.slice(0).join(' ');
            if(!arguments) return message.reply("Ai uitat sa completezi boss");
            if(message.member.roles.cache.some(r => r.id === "973815019227725864") ) {
                await simplydjs.suggestSystem(client, message, args, {
                    chid: '974686114038313000'
                 })
            }else {
                message.reply(`Nu ai rolul bengos`).then(msg => {setTimeout(() => msg.delete(), 30000)})
            }
            
        } catch (err) {
          client.error(err);
        }
    },
}
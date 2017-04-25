const { Command } = require('discord.js-commando');

module.exports = class RateWaifuCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ratewaifu',
            aliases: [
                'waifu'
            ],
            group: 'response',
            memberName: 'ratewaifu',
            description: 'Rates your Waifu.',
            args: [{
                key: 'waifu',
                prompt: 'Who do you want to rate?',
                type: 'string'
            }]
        });
    }

    run(message, args) {
        const { waifu } = args;
        const rating = Math.floor(Math.random() * 10) + 1;
        return message.say(`I'd give ${waifu} a ${rating}/10!`);
    }
};

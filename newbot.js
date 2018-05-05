const Bootbot = require('bootbot')

const bot = new Bootbot({
        accessToken: 'EAANkZAQojPZBUBAB05hiulQ9lUUZB9GEQg4Iom0ufKTRwosTgrOWbvkNw3I3VWmv40vSyjbHJG3yqDPZCnbtZAX3XFVGxsgqH4cv5WQHNMbVHJW62PscaJLyPamsYjhMt9XqiILDhqmLZA3GkZAkJZCVUPU5GFvwSG16X4ZCsAvCJYwZDZD',
        verifyToken: 'devfBot2018',
        appSecret: 'fb76dcbd292d92aa16ace1601659f652'
    })
    /*
    bot.on('message', (payload, chat) => {
        console.log(payload)
        chat.say(`Echo: ${payload.message.text}`)
    })*/

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
    // Send a text message followed by another text message that contains a typing indicator
    chat.say('Hola soy el chatbot de Godel,Escher & Bach')
        .then(() => {
            chat.say('Cómo te puedo apoyar?', { typing: true });
        });
});

bot.hear(['comida', 'hambre'], (payload, chat) => {
    // Send a text message with quick replies
    chat.say({
        text: 'Que deseas comer el día de hoy?',
        quickReplies: ['Mexicana', 'Italiana', 'Americana', 'Argentina']
    });
});

bot.hear([/ayuda( there)?/i], (payload, chat) => {
    // Send a text message with buttons
    chat.say({
        text: 'En que te puedo apoyar?',
        buttons: [
            { type: 'postback', title: 'Settings', payload: 'HELP_SETTINGS' },
            { type: 'postback', title: 'FAQ', payload: 'HELP_FAQ' },
            { type: 'postback', title: 'Talk to a human', payload: 'HELP_HUMAN' }
        ]
    });
});

bot.on('postback', (payload, chat) => {
    console.log(payload)
})

bot.start()
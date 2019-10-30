client.on('message', message => {
    if (message.content === 'sa') {
        const attachment = new Attachment('https://pbs.twimg.com/media/DzHYmeHWsAA8QXW.jpg');
        message.channel.send(attachment);
    }
});

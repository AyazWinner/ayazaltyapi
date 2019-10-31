client.on('message', message => {
    if (message.content === 'sa') {
        const attachment = new Attachment('https://media.giphy.com/media/XDMRnqsUjno0L88kja/giphy.gif');
        message.channel.send(attachment);
    }
});

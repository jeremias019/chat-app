async function initializeChannel(members) {
    // [...]
    channel.on('message.new', event => {
      appendMessage(event.message);
    });
}

async function initializeChannel(members) {
    // [...]
    channel.state.messages.forEach(message => {
      appendMessage(message);
    });
};
const subscribeTickers = (w) => {
    let msg = JSON.stringify({ command: 'subscribe', channel: 1002 });
    w.on('open', () => w.send(msg));
};

export default { subscribeTickers };

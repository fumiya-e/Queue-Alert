const Window = require('./window');

module.exports = function QueueAlert(mod) {
    let myId;
    const win = new Window();

    function message(msg) {
        mod.command.message(`<font color="#e0d3f5">${msg}`);
    }

    //-- Commands
    /*mod.command.add('open', () => {
        win.show();
    });

    mod.command.add('close', () => {
        win.close();
    });*/

    //-- Hooks
    mod.hook('S_LOGIN', 10, (event) => {
        myId = event.gameId;
    });

    mod.hook('S_FIN_INTER_PARTY_MATCH', 1, () => {
        win.show();
    });

    mod.hook('S_LEAVE_PARTY', 1, () => {
        win.close();
    });
};

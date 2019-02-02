module.exports = function QueueAlert(mod) {
    let myId;

    function message(msg) {
        mod.command.message(`<font color="#e0d3f5">${msg}`);
    }

    //-- Commands
    mod.command.add('que', () => {
        message('neat');
    });

    //-- Hooks
    mod.hook('S_LOGIN', 10, (event) => {
        myId = event.gameId;
    });

    mod.hook('S_FIN_INTER_PARTY_MATCH', 1, () => {
        message('S_FIN_INTER_PARTY_MATCH'); //bingo
    });

    /*mod.hook('S_LEAVE_PARTY', 1, () => {
        partyMembers = []
    });*/

};

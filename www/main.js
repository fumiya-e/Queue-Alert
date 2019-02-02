const events = require('events');
const {
    ipcRenderer,
    remote
} = require('electron');
const debug = false;
const CHANNEL_NAME = 'queue-alert'

class IPC extends events.EventEmitter {
    constructor() {
        super();
        ipcRenderer.on(CHANNEL_NAME, (event, ...args) => {
            if (debug)
                console.log('on', ...args);
            this.emit(...args);
        });
    }
    send(...args) {
        if (debug)
            console.log('send', ...args);
        ipcRenderer.send(CHANNEL_NAME, ...args);
    }
}
const ipc = new IPC();

jQuery(($) => {
    /* Samples
    ipc.on('xxx', (obj) => {

    });

    $('.el').click(function (e) {
        ipc.send('text', {
            id: $override.data('id'),
            text: $(this).val()
        });
    });*/

    ipc.send('load');
});
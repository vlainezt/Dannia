import * as io from 'socket.io-client';

declare const ss: any;

export class IoService {
    public socket: any;
    public socketio: any;
    public lang: string;

    constructor() {
      this.socketio = io();
      this.socket = this.socketio.on('connect', function() {
          console.log('connected');
      });
      this.socket.binaryType = 'arraybuffer';
      this.lang = 'es';
    }

    setDefaultLanguage(lang: string) {
        this.lang = lang;
    }

    sendBinaryStream(blob: any) {
        const me = this;
        const stream = ss.createStream();
        // stream directly to server
        // it will be temp. stored locally
        ss(me.socket).emit('stream-speech', stream, {
            name: '_temp/stream.wav',
            size: blob.size,
            language: me.lang
        });
        // pipe the audio blob to the read stream
        ss.createBlobReadStream(blob).pipe(stream);
    }

    sendMessage(eventName: string, obj: any) {
        obj.audio.language = this.lang;
        this.socketio.emit(eventName, obj);
    }

    receiveStream(eventName: string, callback: any) {
        this.socket.on(eventName, function(data) {
            callback(data);
        });
    }
}

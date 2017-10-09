import Ember from 'ember';

export default Ember.Component.extend({

  socketIOService: Ember.inject.service('socket-io'),
  compInput: '',
  messagesfoo: [],
  messagesbar: [],
  currUser: `guest${Math.ceil(Math.random() * 9999)}`,
  room: 'foo',
  roomInput: '',
  setSockets(room){
    let socket = this.get('socketIOService').socketFor(`ws://localhost:7000/${this.get('room')}`)
    socket.on('open', ()=>{
        console.log(this.get('currUser'));
        socket.send(`${this.get('currUser')} has joined the room.`);
    }, this);
    socket.on('close', ()=>{
      socket.send(`${this.get('currUser')} has left the room.`);
    }, this);
    socket.on('message', (message)=>{
      this.set(`messages${this.get('room')}`, this.get(`messages${this.get('room')}`).concat(message))
    })
    this.get('actions')[`submitText`] = function(){
      socket.send(`${this.get('currUser')}: ${this.get(`compInput`)}`, true);
      this.set(`compInput`, '')
    }
  },
  init(){
      this._super(...arguments);
      this.setSockets(this.get('room'))
      console.log(this.get('currUser'));
  },
  actions: {
    changeRoom: function(){
      this.set('room', this.get('roomInput'));
    }
  }
});

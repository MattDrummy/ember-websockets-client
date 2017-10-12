import Ember from 'ember';

export default Ember.Component.extend({

  socketIOService: Ember.inject.service('socket-io'),
  compInput: '',
  messagesfoo: [],
  messagesbar: [],
  currUser: Ember.computed(function(){
    return `guest${Math.ceil(Math.random() * 9999)}`
  }),
  room: 'foo',
  roomInput: '',
  setSockets(){
    let socket = this.get('socketIOService').socketFor(`ws://localhost:7000/`);
    socket.emit("open", [
      this.get('currUser'),
      this.get('room')
    ]);
    socket.on('message', (message)=>{
      console.log(message);
      this.set(`messages${this.get('room')}`, this.get(`messages${this.get('room')}`).concat(message))
    })
    this.get('actions')[`submitText`] = function(){
      socket.emit("message", [
        this.get('room'),
        `${this.get('currUser')}: ${this.get(`compInput`)}`
      ]);
      this.set(`compInput`, '')
    }
  },
  init(){
      this._super(...arguments);
      this.setSockets()
  },
  actions: {
    changeRoom: function(){
      this.set('room', this.get('roomInput'));
      this.get('socketIOService').closeSocketFor('ws://localhost:7000/');
      this.setSockets();
      this.set('roomInput', '');
    },
  }
});

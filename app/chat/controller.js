import Ember from 'ember';

export default Ember.Controller.extend({
  // 
  // init: function(){
  //   this._super();
  //   var socket1 = this.get('websockets').socketFor('ws://localhost:7001/');
  //   var socket2 = this.get('websockets').socketFor('ws://localhost:7002/');
  //
  //   socket1.on('open', this.myOpenHandler1, this);
  //   socket1.on('message', this.myMessageHandler1, this);
  //   socket1.on('close', function(event){
  //     var socket1 = this.get('websockets').socketFor('ws://localhost:7001/');
  //     socket1.send(`${this.get('currUser')} has left the room.`);
  //   }, this);
  //   socket2.on('open', this.myOpenHandler2, this);
  //   socket2.on('message', this.myMessageHandler2, this);
  //   socket2.on('close', function(event){
  //     var socket2 = this.get('websockets').socketFor('ws://localhost:7002/');
  //     socket2.send(`${this.get('currUser')}: has left the room.`);
  //
  //   }, this);
  //
  //   this.set('currUser', `guest${Math.ceil(Math.random() * 9999)}`)
  // },
  // messages1: [],
  // messages2: [],
  // currUser: '',
  // input1: '',
  // input2: '',
  //
  // myOpenHandler1: function(event){
  //   var socket1 = this.get('websockets').socketFor('ws://localhost:7001/');
  //   socket1.send(`${this.get('currUser')} has joined the room.`);
  // },
  //
  // myOpenHandler2: function(event){
  //   var socket2 = this.get('websockets').socketFor('ws://localhost:7002/');
  //   socket2.send(`${this.get('currUser')} has joined the room.`);
  //
  // },
  //
  // myMessageHandler1: function (event) {
  //   this.set('messages1', this.get('messages1').concat(event.data))
  //
  // },
  //
  // myMessageHandler2: function (event) {
  //   this.set('messages2', this.get('messages2').concat(event.data))
  // },
  // actions: {
  //   sendButtonPressed1: function () {
  //     var socket1 = this.get('websockets').socketFor('ws://localhost:7001/');
  //     socket1.send(`${this.get('currUser')}: ${this.get('input1')}`);
  //     this.set('input1', '')
  //
  //   },
  //   sendButtonPressed2: function(){
  //     var socket2 = this.get('websockets').socketFor('ws://localhost:7002/');
  //     socket2.send(`${this.get('currUser')}: ${this.get('input2')}`);
  //     this.set('input2', '')
  //   }
  // }
});

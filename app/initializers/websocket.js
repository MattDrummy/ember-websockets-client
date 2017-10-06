export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'websockets',
  initialize: function(controller, app){
    app.inject('controller', 'websockets', 'service:websockets');
  }
};

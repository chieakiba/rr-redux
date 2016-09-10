var actions = require('./actions');
var reducers = require('./reducers');
var store = require('./store');
store.dispatch(actions.addRepository('joe'));
store.getState();
save rr-REPL.js

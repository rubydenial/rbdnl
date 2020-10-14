const alert = require('./pack');

alert({type: 'success', msg: 'All done !', name: 'SUCCESS'});
alert();
alert({type: 'warning', msg: `You didn't add something !`, name: 'WARNING'});
alert({type: 'info', msg: `Rubydenial is awesome !`, name: 'INFO'});

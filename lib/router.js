// lib/router.js

Router.configure({
  layoutTemplate: 'main'
});
Router.route('/', 'clients');
Router.route('/clients/:_id', function () {
  var item = Clients.findOne({_id: this.params._id});
  this.render('client', {data: item});
}, {
  name: 'client.show'
});
// client/posts.js

Template.clients.helpers({
  clients: function(){
    return Clients.find();
  }
})
AdminConfig = {
adminEmails: ['jose@netavantage.com'],
collections:
{
Clients: {}
}
} 
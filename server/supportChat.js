Meteor.publish('chat', function() {
    return Chat.find();
});
Meteor.publish('clients', function(){
	return Clients.find();
});
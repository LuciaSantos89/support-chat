Template.chat.helpers({
	chat:function(){
		return Session.get('chat');
	},
	clients:function(){
		return Clients.find();
	}
});

Template.chat.events({
	'keypress textarea': function(event) {
      var $textarea = $('.input textarea')
      if (event.which === 13 && $textarea.val().trim() !== ''){
        event.stopPropagation();
        Chat.insert({user:"Support", message:$textarea.val(), to:Session.get('clientId') });
        $textarea.val('');
      }
    },
    'click li.client':function(event){
    	var clientId = event.target.id;
    	var chat = Chat.find({user:clientId}).fetch();
    	Session.set('clientId',clientId);
    	Session.set('chat',chat);
    }
});
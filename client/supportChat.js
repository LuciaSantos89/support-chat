Template.chatClient.events({
	'keypress textarea': function(ev) {
      var textarea = $('.input textarea').val();
      if (ev.which === 13 && textarea.trim() !== ''){
        ev.stopPropagation();
        //Meteor.call('insertMessage', {content: $textarea.val(), channel: Session.get('channel')})
        Messages.insert({
        	body:textarea
        });

        $textarea.val('');
      }
    }
});

Template.chatClient.helpers({
	'messages': function(){
		return Messages.find();
	}
});
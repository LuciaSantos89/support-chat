Template.chatClient.events({
	'keypress textarea': function(ev) {
      var $textarea = $('.input textarea');
      if (ev.which === 13 && $textarea.val().trim() !== ''){
        ev.stopPropagation();
        //Meteor.call('insertMessage', {content: $textarea.val(), channel: Session.get('channel')})
        $textarea.val('');
      }
    }
});

Template.chatClient.helpers({
	'messeges': function(){
		return Messages.find();
	}
});
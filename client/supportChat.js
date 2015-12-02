Template.chatClient.events({
	'keypress textarea': function(ev) {
      var textarea = $('.input textarea').val();
      if (ev.which === 13 && textarea.trim() !== ''){
        ev.stopPropagation();
        Messages.insert({
        	body:textarea
        });
        $('.input textarea').val('');
      }
    }
});

Template.chatClient.helpers({
	'messages': function(){
		return Messages.find();
	}
});
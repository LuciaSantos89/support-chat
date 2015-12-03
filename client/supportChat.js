Template.chat.helpers({
	chat: function () {
		return Chat.find();
	},
	clients:function(){
		return Clients.find();
	}
});

Template.chat.events({
	'keypress textarea': function(ev) {
      var $textarea = $('.input textarea')
      if (ev.which === 13 && $textarea.val().trim() !== ''){
        ev.stopPropagation();
        Chat.insert({user:"Support", message:$textarea.val(), to:"" });
        $textarea.val('');
      }
    }
});
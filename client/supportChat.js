Template.chat.helpers({
    chat: function() {
        if (Session.equals("clientId", undefined)) {
            return [];
        } else {
            return Chat.find({$or: [{user: Session.get('clientId')}, {to: Session.get('clientId')}]});
        }
    },
    clients: function() {
        return Clients.find();
    }
});

Template.chat.events({
    'keypress textarea': function(event) {
        var $textarea = $('.input textarea')
        if (event.which === 13 && $textarea.val().trim() !== '') {
            event.stopPropagation();
            Chat.insert({
                user: "Support",
                message: $textarea.val(),
                to: Session.get('clientId')
            });
            $textarea.val('');
        }
    },
    'click li.client': function(event) {
        var clientId = event.target.id;
        Session.set('clientId', clientId);
    }
});
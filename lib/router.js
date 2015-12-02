Router.route('/',{
	template:'chatClient'
});

Router.route('/admin',{
	template:'chatSupport'
});

Router.route('/message', { where: 'server' })
  .get(function () {
    return Messages.find();
  })
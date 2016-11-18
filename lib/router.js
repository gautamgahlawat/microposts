Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

	//Posts Route
	this.route('posts',{
		path: '/',
		template: 'posts'
	});

	//about Route
	this.route('about');

	//about Profile
	this.route('profile');
});


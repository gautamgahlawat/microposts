Meteor.publish("posts", function(){
	return Posts.find();
});

Meteor.publish("profileImages", function(){
	return profileImages.find();
});

Meteor.publish("UserImages", function(){
	return UserImages.find();
});
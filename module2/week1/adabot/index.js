var Botkit = require('botkit')

if (!process.env.token){
	console.log('Error. No token specified')
	process.exit(1)
}

var controller = Botkit.slackbot({
	debug:false
})

controller.spawn({
	token:process.env.token
}).startRTM(function(err){
	if(err){
		throw new Error(err)
	}
}); 
//this is the "Create a Bot" starter code. no need to memorise; just copy/paste lol
//bot is called controller
controller.hears(['hi', 'howdy', 'hello'],
	'direct_mention,direct_message,mention',
	function(bot, message) {
		bot.reply(message, 'Hello there :sun_with_face:')
});

controller.hears(['wod'],
	'direct_mention, direct_message, mention',
	function(bot, message) {
		var students = ['Saravanan', 'Alan', 'Shino', 'Cathy', 'Alisa', 'Jordan', 'Mavis', 'Abel', 'Aliya', 'Nico']
		var luckyStudent = students[Math.floor(Math.random() * (students.length+1))]
		var messages = [
		`${luckyStudent} is happy to go in front`, // the ` symbol is similar to using '' and "", ie. for strings.
		`${luckyStudent} came early just to do the exercise`,
		`My favourite student ${luckyStudent} volunteers to give the answer`]
		var randomMessage = messages[Math.floor(Math.random() * (messages.length+1))]
		// bot.reply(message, luckyStudent+' has to do the exercise')
		bot.reply(message, randomMessage)
});

controller.hears(['trip'],
	'direct_mention, direct_message, mention',
	function(bot,message) {

  // start a conversation to handle this response.
  bot.startConversation(message,function(err,convo) {

    // var place = ""
    // var person = 0
    // var duration = 0
    convo.addQuestion('Where do you want to go?',
    	function(response,convo) {
    		// place = response.text

      convo.say(response.text + '? Sounds fun!');
      convo.next();

    },{},'default');

    convo.addQuestion('Who is your travel buddy?',
    	function(response,convo) {
    		// person = Integer.parseInt(response.text)

    	convo.say('Oh, ' + response.text + '! That should be nice. :smile:');
    	convo.next();

    },{},'default');

   	convo.addQuestion('How many days are you planning on staying there?',
   		function(response,convo) {
   			// duration = parseInt(response.text)

   			// var randomPrice = 100+(Math.floor(Math.random() * 400))
   			// var totalPrice = randomPrice * duration * person

    	convo.say('Nice! ' + response.text + ' days is a good duration. :thumbsup:');
    	// convo.say(`Cool, so you are going to ${place} with ${person} persons for ${duration} days.
    	// 	Price per person is ${randomPrice} and total will be ${totalPrice}`);
    	convo.next();

    },{},'default');

  })

});

	controller.hears(['weather'],
		'direct_mention, direct_message, mention',
		function(bot, message) {
			bot.startConversation(message, function(err,convo) {
				city = ""

				convo.addQuestion('Which city would you like to have the info on?',
					function(response, convo) {
						city = response.text

				convo.say('Wait a second. I will get the info of ' + response.text);
				var url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`
				request(url, (err, response, body) {
					convo.say('Something wrong. Sorry, could not get you the weather.')
				} else {
					console.log('body: ', body);
					convo.say('scrambled weather is ' +body)
				}
				})
					

		},{},'default');
	})
});

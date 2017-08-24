var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
    var personality_insights = new PersonalityInsightsV3({
    url: "https://gateway.watsonplatform.net/personality-insights/api",

    //username: '{username}',
    //password: '{password}',
    version_date: '2016-10-20',
    headers: {
        'X-Watson-Learning-Opt-Out': 'true'
    }
    });
    personality_insights.profile({
          text: 'you text goes here',
          consumption_preferences: true
          },
          function (err, response) {
            if (err)
              console.log('error:', err);
            else
              console.log(JSON.stringify(response, null, 2));
});
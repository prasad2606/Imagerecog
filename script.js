//var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
//var fs = require('fs');

//var visualRecognition = new VisualRecognitionV3({
//	version: '2018-03-19',
//	iam_apikey: 'Tz0WnY2gET8Jv09qMgIBbUu00CTQdRW81046zhzcFORv'
//});

//var images_file= fs.createReadStream('./2001.jpg');
//var classifier_ids = ["DefaultCustomModel_1797565080"];
//var threshold = 0.6;

//var params = {
//	images_file: images_file,
//	classifier_ids: classifier_ids,
//	threshold: threshold
//};

//visualRecognition.classify(params, function(err, response) {
//	if (err) { 
//		console.log(err);
//	} else {
  //      console.log('Done')
    //    console.log(JSON.stringify(response, null, 2))
	//}
//});

const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  authenticator: new IamAuthenticator({
    apikey: 'Tz0WnY2gET8Jv09qMgIBbUu00CTQdRW81046zhzcFORv',
  }),
  url: 'https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/364f4fa3-e3ad-4a79-846f-3699d48b6895',
});

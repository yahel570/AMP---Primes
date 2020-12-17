define(['pipAPI', 'https://github.com/yahel570/AMP---Primes/blob/main/MinnoJS%20AMP%20Script.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Affiliation Approach',  //Will be used in the user feedback 
				nameForLogging : 'Affiliation Approach', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'AH01.jpg'}, 
					{image : 'AH02.jpg'}, 
					{image : 'AH03.jpg'}, 
					{image : 'AH04.jpg'}, 
					{image : 'AH05.jpg'}, 
					{image : 'AH06.jpg'}, 
					{image : 'AH07.jpg'}, 
					{image : 'AH08.jpg'}]

			}, 
			{
				nameForFeedback : 'Affiliation Avoidance',  //Will be used in the user feedback 
				nameForLogging : 'Affiliation Avoidance', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'AF01.jpg'}, 
					{image : 'AF02.jpg'}, 
					{image : 'AF03.jpg'}, 
					{image : 'AF04.jpg'}, 
					{image : 'AF05.jpg'}, 
					{image : 'AF06.jpg'}, 
					{image : 'AF07.jpg'}, 
					{image : 'AF08.jpg'}]
			},
			{
				nameForFeedback : 'Power Approach',  //Will be used in the user feedback 
				nameForLogging : 'Power Approach', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'PH01.jpg'}, 
					{image : 'PH02.jpg'}, 
					{image : 'PH03.jpg'}, 
					{image : 'PH04.jpg'}, 
					{image : 'PH05.jpg'}, 
					{image : 'PH06.jpg'}, 
					{image : 'PH07.jpg'}, 
					{image : 'PH08.jpg'}]

			}, 
			{
				nameForFeedback : 'Power Avoidance',  //Will be used in the user feedback 
				nameForLogging : 'Power Avoidance', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'PF01.jpg'}, 
					{image : 'PF02.jpg'}, 
					{image : 'PF03.jpg'}, 
					{image : 'PF04.jpg'}, 
					{image : 'PF05.jpg'}, 
					{image : 'PF06.jpg'}, 
					{image : 'PF07.jpg'}, 
					{image : 'PF08.jpg'}]

			}, 
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://github.com/yahel570/AMP---Primes/blob/main/'
		}
	});
});

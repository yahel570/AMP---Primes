define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

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
					{image : 'AH08.jpg'}, 
					{image : 'AH09.jpg'}, 
					{image : 'AH10.jpg'}, 
					{image : 'AH11.jpg'}, 
					{image : 'AH12.jpg'}]

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
					{image : 'AF08.jpg'}, 
					{image : 'AF09.jpg'}, 
					{image : 'AF10.jpg'}, 
					{image : 'AF12.jpg'}, 
					{image : 'AF11.jpg'}]
			} 
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://yahel570.github.io/AMP---Primes/'
		}
	});
});

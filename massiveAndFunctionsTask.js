let data= ['молоко', 34, 717, false, 'копы', true, 74, 108,
	'погроммист', 'котик', 'мемчик', true, true, 666, false
];

function getDataTypeArrays(array) {
	let numberArray = [],
		booleanArray = [],
		stringArray = [],
		undefinedArray = [],
		objectArray = [];
	for(item of array) {
		switch(typeof item) {
			case "number":
				numberArray.push(item);
				break;
			case "string":
				stringArray.push(item);
				break;
			case "object":
				objectArray.push(item);
				break;
			case "boolean":
				booleanArray.push(item);
				break;
			case "undefined":
				undefinedArray.push(item);
				break;
		}
	}
	return {
		numberArray,
		booleanArray,
		stringArray,
		undefinedArray,
		objectArray,
	};
}

let sortedData = getDataTypeArrays(data);

sortedData.numberArray = sortedData.numberArray.map(item => item*2);
sortedData.booleanArray = sortedData.booleanArray.map(item => item = !item);
sortedData.stringArray = sortedData.stringArray.map(function(item) {
	if(item.match(/о/ui)) {
		item = item.split("о");
		return item = item.join("л");
	}
	return item;
});

console.log(sortedData);
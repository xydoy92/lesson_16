let data = ['молоко', 34, 717, false, 'копы', true, 74, 108,
	'погроммист', 'котик', 'мемчик', true, true, 666, false
];
let numberArray = [],
	booleanArray = [],
	stringArray = [],
	undefinedArray = [],
	objectArray = [];

function getDataTypeArrays(array) {
	for (item of array) {
		switch (typeof item) {
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
}
function getTwiceNumberArray(array) {
	return array.map(item => item * 2);
}
function getReverseBooleanArray(array) {
	return array.map(item => item = !item);
}
function getLetterChangedArray(array) {
	return array.map(function (item) {
		if (item.match(/о/ui)) {
			item = item.split("о");
			return item = item.join("л");
		}
		return item;
	});
}

getDataTypeArrays(data);
numberArray = getTwiceNumberArray(numberArray);
booleanArray = getReverseBooleanArray(booleanArray);
stringArray = getLetterChangedArray(stringArray);

console.log(numberArray);
console.log(booleanArray);
console.log(stringArray);
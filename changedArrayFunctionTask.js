let array = [];
	// Добавил ещё два параметра, потому что так функция кажется более переиспользуемой
function getChangedArray(array, amount, moreOrLess, factor) {
	while(array.length < amount) {
		array.push(+prompt("Введите число массива"));
	}
	if(moreOrLess) {
		return array.map(item => item*factor);
	}
	return array.map(item => item/factor);
}

let userAmount = +prompt("Сколько чисел вы хотите в массиве?");
let moreOrLess = confirm("Увеличить(ОК) или уменьшить(Отмена) массив?");
let userFactor = +prompt("Во сколько увеличить/уменьшить массив?");
let changedArray = getChangedArray(array, userAmount, moreOrLess, userFactor);

console.log(array);
console.log(changedArray);
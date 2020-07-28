let array = [];
	// Добавил ещё два параметра, потому что так функция кажется более переиспользуемой
function getChangedArray(array,
						amount = +prompt("Сколько чисел вы хотите в массиве?"),
						moreOrLess = confirm("Увеличить(ОК) или уменьшить(Отмена) массив?"),
						factor = +prompt("Во сколько увеличить/уменьшить массив?")) {
	while(array.length < amount) {
		array.push(+prompt("Введите число массива"));
	}
	if(moreOrLess) {
		return array.map(item => item*factor);
	}
	return array.map(item => item/factor);
}

let changedArray = getChangedArray(array);

console.log(array);
console.log(changedArray);
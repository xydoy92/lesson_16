let person = {
	createPerson() {
		this.name = prompt("Введите ваше имя");
		this.surname = prompt("Введите вашу фамилию");
		this.age = +prompt("Введите ваш возраст");
		this.married = confirm("Вы состоите в браке?");
		if(this.married) {
			this.spouse = {
				spouseName: prompt("Введите имя супруга"),
				spouseAge: +prompt("Введите возраст супруга"),
			};
		}
		this.childrenExist = confirm("У вас есть дети?");
		if(this.childrenExist) {
			this.childrenAmount = +prompt("Сколько у вас детей?");
			this.createChildren = function() {
				let childrenArray = [];
				for (let i = 0; i < this.childrenAmount; i++) {
					childrenArray[i] = {};
					childrenArray[i].childName = prompt("Введите имя ребёнка");
					childrenArray[i].childAge = +prompt("Введите возраст ребёнка");
				}
				return childrenArray;
			}
			this.children = this.createChildren();
		}
		this.profession = prompt("Введите вашу профессию");
	}
};

person.createPerson();

console.log(person);
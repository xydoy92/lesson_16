let family = {
	amount: 5,
	familyMembers: [
		{name: 'Borya', age: 15},
		{name: 'Tolya', age: 54},
		{name: 'Anjela', age: 45},
		{name: 'Snejana', age: 14},
		{name: 'Gavriil', age: 24},
	],
	getOldestMember() {
		let oldestMember;
		let oldestMemberAge = 0;
		for(member of this.familyMembers) {
			if(oldestMemberAge < member.age) {
				oldestMemberAge = member.age;
				oldestMember = member;
			}
		}
		return this.oldestMember = oldestMember;
	},
}

family.getOldestMember();
console.log(family);
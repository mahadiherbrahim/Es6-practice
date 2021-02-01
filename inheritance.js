class parent {
    constructor() {
        this.fatherName = "Karim Uddin";
    }
}

class Child extends parent {
    constructor(cName) {
        super();
        this.name = cName;
    }
    getFullName() {
        return this.name + ' ' + this.fatherName;
    }
}
const firstChild = new Child("Rahim");
const secondChild = new Child("Abdullah");
console.log(firstChild.getFullName(), secondChild.getFullName());
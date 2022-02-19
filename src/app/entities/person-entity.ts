import { v4 as uuidv4 } from 'uuid';


class PersonEntity {
    id: string;
    firstName: string;
    lastName: string;
    age: number;


    constructor(firstName, lastName, age, id?) {
        if (!id) {
            this.id = uuidv4();
        } else
            this.id = id;

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

}

export { PersonEntity };


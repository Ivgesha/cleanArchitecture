import { PersonEntity } from "../../app/entities/person-entity";

const store = {

    persons: [new PersonEntity("Yossi", "Cohen", 30, "1"), new PersonEntity("Avraam", "Tal", 31, "2")]

}

export { store };
import * as queries from "../../../app/queries/index";
import { store } from "../store"

class PersonListQuery extends queries.PersonListQuery {


    getPersonEntity() {
        const persons = store.persons;
        return persons;
    }


}

export { PersonListQuery };
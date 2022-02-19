import { PersonEntity } from "../entities/person-entity";

abstract class PersonListQuery {


    protected abstract getPersonEntity();


    private isAllowed(): boolean {

        return true;
    }

    readonly doExecute = () => {
        if (this.isAllowed) {
            const personEntity = this.getPersonEntity();
            return personEntity;
        }
    }

}

export { PersonListQuery };
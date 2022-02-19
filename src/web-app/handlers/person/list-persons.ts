import * as queries from "../../../app-adapter/in-memory-data-access/index"

const listPersons = {
    schema: {},
    handler: async (request, reply) => {
        const query = new queries.PersonListQuery();

        const persons = query.doExecute();
        console.log(persons);


        reply.send(persons);
    }
}

export { listPersons };
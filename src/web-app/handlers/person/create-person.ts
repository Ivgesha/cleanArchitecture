const createPerson = {
    schema: {},
    handler: async (request, reply) => {
        reply.send("Created a person");
    }
}

export { createPerson };
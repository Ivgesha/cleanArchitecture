const getPerson = {
    schema: {},
    handler: async (request, reply) => {
        reply.send("Get single person");
    }
}

export { getPerson };
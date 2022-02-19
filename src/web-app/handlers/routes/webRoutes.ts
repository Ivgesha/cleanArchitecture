import fastify from "fastify";
import { router } from "./router";
import * as handlers from "../index"

const routes = async (fastify, option) => {

    fastify.get(router.root, (request, reply) => {
        reply.send("root");
    });

    fastify.get(router.person.list, handlers.listPersons);

    fastify.get(router.person.get, handlers.listPersons);

    fastify.get(router.person.create, handlers.createPerson);

}
export { routes }
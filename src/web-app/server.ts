import Fastify from "fastify";
import { routes } from "./handlers/routes/webRoutes"


const fastify = Fastify({ logger: true });

fastify.register(routes);


fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
    }
})
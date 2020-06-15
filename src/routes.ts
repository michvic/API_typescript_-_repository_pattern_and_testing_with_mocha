import { Router, Response, Request } from "express";

const routes = Router();

/**
 * @api {get} / It's work
 * @apiName Root path
 * @apiGroup index
 */
routes.get('/', (request: Request, response: Response) => {
    return response.json({message: "It's Work"})
})

export default routes
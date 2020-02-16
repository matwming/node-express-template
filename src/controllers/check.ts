import {Request, Response, RequestHandler} from "express";
import {HttpRequest} from "../config";

export const check: RequestHandler = (req: Request, res: Response) => {
    let requestData = req.body;
    HttpRequest.post(``, {...requestData})
        .then((response:any ) => {
            console.log(response);
        })
        .catch((e: { response: { data: string } }) => {
            console.log('there is an error', e.response.data);
            return res.json(e.response.data);
        })
};
export default check;

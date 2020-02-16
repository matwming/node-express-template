import {Router, Response, Request} from "express";
import {check} from '../controllers/check';
const router = Router();

/**
 * @method Get
 * @header
 * @return
 */
router.get('/', (req:Request, res:Response) =>
    res.send('<h1>This is nodejs hello world get request</h1>'));
/**
 * @method Post
 * @header
 * @param
 * @return
 */
router.post('/hello-world', check);

export default router;

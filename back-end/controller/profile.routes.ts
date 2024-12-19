import profileService from '../service/profile.service';
import express,  {Request, Response, NextFunction} from 'express';

const profileRouter = express.Router(); 

profileRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profile = await profileService.getProfileById(Number(req.params.id));
        res.status(200).json(profile);
    } catch (error) {
        next(error);
    }
});
export {profileRouter};
import { User } from '../model/user';
import database from '../util/database';


const getAllUsers = async (): Promise<User[]> => {
    try {
        const usersPrisma = await database.user.findMany();
        return usersPrisma.map((userPrisma) => User.from(userPrisma));
    } catch ( error ) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
}



export default {
    getAllUsers,
}
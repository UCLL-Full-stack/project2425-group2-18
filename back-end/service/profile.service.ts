import {Profile} from '../model/profile';
import profileDB from '../repository/profile.db';

const getProfileById = async (id: number): Promise<Profile> => {
   const profile = await profileDB.getProfileById({id});
   if (!profile) throw new Error(`Profile with id: ${id} does not exist.`);
    return profile;
}

export default {getProfileById};
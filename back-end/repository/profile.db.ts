import database from '../util/database';
import { Profile } from '../model/profile';

const createProfile = async (profile: Profile): Promise<Profile> => {
    try {
        const profilePrisma = await database.profile.create({
            data: {
                firstName: profile.getFirstName(),
                lastName: profile.getLastName(),
                email: profile.getEmail(),
            },
        });

        return Profile.from(profilePrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getProfileById = async ({ id }: { id: number }): Promise<Profile | null> => {
    try {
        const profilePrisma = await database.profile.findUnique({
            where: { id },
        });

        return profilePrisma ? Profile.from(profilePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default { getProfileById };
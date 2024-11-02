import { Profile } from "./profile";
export class User{
    readonly id?: number
    readonly username: string
    readonly password: string
    readonly profile?: Profile

    constructor(user: {
        id?: number
        username: string
        password: string
        profile: Profile
    }) {
        this.validate(user)

        this.id = user.id
        this.username = user.username
        this.password = user.password
        this.profile = user.profile
    }

    validate(user: {
        username: string
        password: string
        profile: Profile
    }) {
        if (!user.username?.trim()) {
            throw new Error('Username is required')
        }
        if (!user.password?.trim()) {
            throw new Error('Password is required')
        }
        if (!user.profile) {
            throw new Error('Role is required')
        }
    }

    // checks if current user is equal to another user instance
    equals({ id, username, password, profile }: { id?: number, username: string, email: string, password: string, profile: Profile }): boolean {
    return (
        this.id === id &&
        this.username === username &&
        this.password === password &&
        JSON.stringify(this.profile) === JSON.stringify(profile)
    );
    }
}
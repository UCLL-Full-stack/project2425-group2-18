import { Profile } from "./Profile";
export class User{
    private id?: number;
    private username: string;
    private password: string;
    private profile: Profile;

    constructor(username: string, password: string, profile: Profile){
        this.username = username;
        this.password = password;
        this.profile = profile;
    }

    public getId(): number | undefined{
        return this.id;
    }

    public setId(id: number): void{
        this.id = id;
    }

    public getUsername(): string{
        return this.username;
    }

    // TODO: validation for username, username must be unique
    public setUsername(username: string): void{
        this.username = username;
    }

    public getPassword(): string{
        return this.password;
    }

    // TODO: validation for password
    public setPassword(password: string): void{
        this.password = password;
    }

    public getProfile(): Profile{
        return this.profile;
    }

    public setProfile(profile: Profile): void{
        this.profile = profile;
    }
}
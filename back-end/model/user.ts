import { Profile } from "./profile";
import { Role } from "../types";
export class User{
    private id?: number;
    private username: string;
    private password: string;
    private profile: Profile;
    private role: Role;

    // constructor(username: string, password: string, profile: Profile, role: Role){
    //     this.username = username;
    //     this.password = password;
    //     this.profile = profile;
    //     this.role =role;
    // }

    constructor(user: {
        id?:number;
        username: string;
        password: string;
        profile: Profile;
        role: Role;
    }) {
        this.validate(user);

        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.profile = user.profile;
        this.role = user.role;
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

    // TODO: validation for password other than only length
    public setPassword(password: string): void{
        
        if (password.length < 8){
            throw new Error("Password must be at least 8 characters long");
        }
        else{
            this.password = password;
        }
    }

    public getProfile(): Profile{
        return this.profile;
    }

    public setProfile(profile: Profile): void{
        this.profile = profile;
    }

    public getRole(): Role{
        return this.role;
    }

    public setRole(role: Role): void{
        this.role = role;
    }

    validate(user: {
        id?: number;
        username: string;
        password: string;
        profile: Profile;
        role: Role;
    }): void{
        if (user.username.trim() === ""){
            throw new Error("Username cannot be empty");
        }
        if (user.password.trim() === ""){
            throw new Error("Password cannot be empty");
        }
        if (user.password.length < 8){
            throw new Error("Password must be at least 8 characters long");
        }
    }

    equals(user: User): boolean{
        return (
            this.username === user.getUsername() &&
            this.password === user.getPassword() &&
            this.profile.equals(user.getProfile()) &&
            this.role === user.getRole()
        );
    }

    static from({id, username, password, profile, role}: UserPrisma){
        return new User({
            id, 
            username, 
            password, 
            profile: profile as Profile, 
            role: role as Role
        });
    }
}
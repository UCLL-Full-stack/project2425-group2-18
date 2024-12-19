export class Profile {
    private id?: number;
    private firstName: string;
    private lastName: string;
    private email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getEmail(): string {
        return this.email;
    }

    // TODO: validation for email
    public setEmail(email: string): void {
        this.email = email;
    }

    equals(profile: Profile): boolean {
        return (
            this.firstName === profile.getFirstName() &&
            this.lastName === profile.getLastName() &&
            this.email === profile.getEmail()
        );
    }

    static from({ id, firstName, lastName, email }: { id: number, firstName: string, lastName: string, email: string }): Profile {
        const profileInstance = new Profile(firstName, lastName, email);
        profileInstance.setId(id);
        return profileInstance;
    }
}
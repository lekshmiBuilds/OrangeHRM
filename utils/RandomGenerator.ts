export class RandomGenerator {

    static generateUsername(prefix: string): string 
    {
        const timestamp = Date.now();
        return `${prefix}${timestamp}`;
    }
    static generateEmployeeId(): string 
    {
        const randomNumber = Math.floor(100000 + Math.random() * 900000);
        return randomNumber.toString();
    }
    static generateEmployee(): {
        firstName: string;
        lastName: string;
        fullName: string;
    }
     {
        const timestamp = Date.now();
        const firstName = `Auto${timestamp}`;
        const lastName = 'Employee';
        return {
            firstName,
            lastName,
            fullName: `${firstName} ${lastName}`
        };
    }

}
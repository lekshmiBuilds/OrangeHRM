export class RandomGenerator 
{

    static generateEmployeeId(): string 
    
    {

        const timestamp = Date.now().toString().slice(-6);
        const randomNumber = Math.floor(Math.random() * 1000);
        return `${timestamp}${randomNumber}`        

    }

        static generateUsername(prefix: string): string 
        
        {

        return Date.now().toString().slice(-6);
                  

    }
}
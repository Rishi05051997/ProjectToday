export class Users
{
    id: number;
    name: string;
    
    username: string;
    email: string;
    phone: number;
    constructor(id, name, username, email, phone)
{
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
}
}
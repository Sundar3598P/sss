
import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User', 
        email: 'admin@example.com',
        passsword: bcrypt.hashSync('123456', 10) ,
        isAdmin: true
    },
    {
        name: 'Sundar', 
        email: 'sundar@example.com',
        passsword: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Tiru', 
        email: 'tiru@example.com',
        passsword: bcrypt.hashSync('123456', 10)
    }
];

export default users;
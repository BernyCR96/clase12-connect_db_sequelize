const User = require('../config/user');

async function createUser(username, password, email){
    try {
        //insert into users (username, password, email) values ('${username}', '${password}', '${email}');
        const user = await User.create({
            username,
            password,
            email
        })
        return user;
    }catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

async function login(username, password){
    try {
        //select * from users where username = '${username}' and password = '${password}';
        const user = await User.findOne({
            where: {
                username,
                password
            }
        });
        return user;
    }catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

module.exports = { createUser, login };
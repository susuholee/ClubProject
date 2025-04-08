

require('dotenv').config();
const Sequelize = require('sequelize');



const User = require('./users/users2');
const Userintrest = require('./users/userintrests1');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
        port: process.env.DATABASE_PORT
    }
);

const users = User.init(sequelize);
const userintrests = Userintrest.init(sequelize);

const db ={
    Users: users,
    Userintrests : userintrests,
    sequelize
    

}

users.associate(db);
userintrests.associate(db);


sequelize.sync({ force: false }).then(() => {
    console.log('database on~');
}).catch(console.log);


module.exports = db;
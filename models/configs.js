



const Sequelize = require('sequelize');
const User = require('../models/users/users')
const Userintrest = require('./users/userintrests');
// const Category = require('./categorys');
// const Club = require('./clubs');
// const Event = require('./events');
// const Heart = require('./hearts');
// const Location = require('./locations');
// const Member = require('./members');
// const Participant = require('./participants');
// const Point = require('./points');
// const Verification = require('./verifications');
// const Review = require('./reviews')



const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : 'mysql',
        port : process.env.DATABASE_PORT
    }
)


const users = User.init(sequelize);
const userintrests = Userintrest.init(sequelize);
// const members = Member.init(sequelize);
// const categorys = Category.init(sequelize);
// const clubs = Club.init(sequelize);
// const events = Event.init(sequelize);
// const locations = Location.init(sequelize);
// const hearts = Heart.init(sequelize);
// const participants = Participant.init(sequelize);
// const points = Point.init(sequelize);
// const verifications = Verification.init(sequelize);
// const reviews = Review.init(sequelize);

const db = {
    Users : users,
    Userintrests : userintrests,
    // Members : members,
    // Categorys : categorys,
    // Clubs : clubs,
    // Events : events,
    // Locations : locations,
    // Hearts : hearts,
    // Participants : participants,
    // Points : points,
    // Verifications : verifications,
    // Reviews : reviews,
    sequelize
}

users.associate(db)
userintrests.associate(db)
// members.associate(db)
// categorys.associate(db)
// clubs.associate(db)
// events.associate(db)
// locations.associate(db)
// hearts.associate(db)
// participants.associate(db)
// points.associate(db)
// verifications.associate(db)
// reviews.associate(db)



sequelize.sync({force : true}).then(() => {
    console.log('database on~')
}).catch(console.log)

module.exports = db
require('dotenv').config();
const Sequelize = require('sequelize');

// 모델 import
const User = require('./users');
const UserInterest = require('./userintrests');
const Category = require('./categorys');
const Club = require('./clubs');
const Event = require('./events');
const Heart = require('./hearts');
const ClubLocation = require('./locations');
const ClubMember = require('./members');
const EventParticipant = require('./participants');
const Point = require('./points');
const Verification = require('./verifications');
const Review = require('./reviews');
const ClubTag = require('./club_tags');

// Sequelize 연결
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

// 모델 초기화
const UserModel = User.init(sequelize);
const UserInterestModel = UserInterest.init(sequelize);
const CategoryModel = Category.init(sequelize);
const ClubModel = Club.init(sequelize);
const EventModel = Event.init(sequelize);
const HeartModel = Heart.init(sequelize);
const ClubLocationModel = ClubLocation.init(sequelize);
const ClubMemberModel = ClubMember.init(sequelize);
const EventParticipantModel = EventParticipant.init(sequelize);
const PointModel = Point.init(sequelize);
const VerificationModel = Verification.init(sequelize);
const ReviewModel = Review.init(sequelize);
const ClubTagModel = ClubTag.init(sequelize);

// DB 객체 등록
const db = {
    User: UserModel,
    UserInterest: UserInterestModel,
    Category: CategoryModel,
    Club: ClubModel,
    Event: EventModel,
    Heart: HeartModel,
    ClubLocation: ClubLocationModel,
    ClubMember: ClubMemberModel,
    EventParticipant: EventParticipantModel,
    Point: PointModel,
    Verification: VerificationModel,
    Review: ReviewModel,
    ClubTag: ClubTagModel,
    sequelize
};

// 관계 설정
UserModel.associate(db);
UserInterestModel.associate(db);
CategoryModel.associate(db);
ClubModel.associate(db);
EventModel.associate(db);
HeartModel.associate(db);
ClubLocationModel.associate(db);
ClubMemberModel.associate(db);
EventParticipantModel.associate(db);
PointModel.associate(db);
VerificationModel.associate(db);
ReviewModel.associate(db);
ClubTagModel.associate(db);

// DB 동기화
sequelize.sync({ force: true }).then(() => {
    console.log('database on~');
}).catch(console.log);

// export
module.exports = db;


const {Users, Userintrests} = require('../models/configs');
const Userintrest = require('../models/users/userintrests');


const Createuser = async ( kakao_id1, kakao_name1, kakao_profile_image1, age1, gender1, introduction1, latitude1, longitude1) => {
    try {
        const data = await Users.findOne({where : {kakao_id : kakao_id1}})
        if (data) {
            // console.log(data, 'asdf')
            await Users.update({age : age1, gender : gender1, introduction : introduction1, latitude : latitude1, longitude : longitude1}, {where : {kakao_id : kakao_id1}})
            console.log('done')
            return ({state : 200, message : '수정 완료료 1'})
        } else {
            console.log('hhhhhhhhhhh')            
            const data = await Users.create({kakao_id : kakao_id1, kakao_name : kakao_name1, kakao_profile_image : kakao_profile_image1, age : age1, gender : gender1, introduction : introduction1, latitude : latitude1, longitude : longitude1})
            
            return ({state : 200, message : '수정 완료료'})
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

// Users.create({'a','a','a','a','a','a','a','a'})

const Finduser = async (uid) => {
    const [data] = await Users.findAll({where : {kakao_id : uid}})
    // console.log(data, 'finduser')
    return data;
}

const Updatecategory = async (id, content) => {
    console.log(id, content)
    try {
        
        const data = await Userintrest.create({uid : id , category_name : content})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    return {state : 200, message : '획인'}
}


module.exports = {Createuser, Finduser, Updatecategory}
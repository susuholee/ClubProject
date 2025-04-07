
const {Users} = require('../models/configs');


const Createuser = async ( kakao_id1, kakao_name1, kakao_profile_image1, age1, gender1, introduction1, latitude1, longitude1) => {
    try {
        const {data} = await Users.findOne({where : {kakao_id1}})
        console.log(data, 'asdf')
        if (data) {
            await Users.update({age : age1, gender : gender1, introduction : introduction1, latitude : latitude1, longitude : longitude1})
            console.log('done')
            return ({state : 200, message : '수정 완료료 1'})
        } else {
            
            console.log('sss', kakao_id, kakao_name, kakao_profile_image, age, gender, introduction, latitude, longitude)
            const data = await Users.create({kakao_id : kakao_id1, kakao_name : kakao_name1, kakao_profile_image : kakao_profile_image1, age : age1, gender : gender1, introduction : introduction1, latitude : latitude1, longitude : longitude1})
            
            return ({state : 200, message : '수정 완료료'})
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

// Users.create({'a','a','a','a','a','a','a','a'})







module.exports = {Createuser}
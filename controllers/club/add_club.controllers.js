* {
    margin : 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.main-content {
    margin-top: 90px;
    width: 100vw;
    max-width: 1600px;
    /* height: 100vh; */
    height: fit-content;
    padding: 10px;
    
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(215, 214, 214);
}
.page-title {
    font-size: 17px;
    font-weight: 600;
    color: #333;
}
#club-form{
    max-width: 1000px;
    margin: 0 auto;
    padding:40px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    
}
.form-header{
    margin-bottom: 30px;
    border-bottom: 1px solid rgb(215, 214, 214);
    padding-bottom: 15px;
}
.form-information{
    color: #666;
    font-size: 17px;
}
.form-header {
    width: 100%;
}   

/* 폼 스타일 통일 */
.addFrom-group{
    margin-bottom: 25px;
}
/* 라벨 전체 스타일  */
.label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;;
}
/* 인풋 전체 스타일 */
.form-input {
    width: calc(100% - 20px);
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 1em;
}

.form-input-txtarea{
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ddd;
    /* border: 1px solid black; */
    border-radius: 4px;
    min-height: 120px;
    resize: none;
    font-size: 1.2em;
}
.form-container{
    display: flex;
    gap: 20px;
    align-items: flex-start;
}
.image-upload{
    flex: 1;
    color: #666;
    border : 2px dashed #ddd;
    padding: 30px;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    height: calc(100%/4*3);
}
.image-upload:hover {
        border-color: #ffb402;
}
.upload-icon{
    font-size: 2em;
    color : #999;
    margin-bottom: 10px;
}
#club-image{
    display: none;
}
.add-tag{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    min-height: 40px;
}
.tag{
    display: flex;
    background-color:#f5f5f5;
    margin: 3px;
    padding: 5px 10px;
    border-radius: 20px;
    align-items: center;
    font-size: 0.9em;
}
.tag-remove {
    margin-left: 5px;
    cursor: pointer;
}
.tag-input{
    border: none;
    outline: none;
    padding: 8px;
    font-size: 1em;
    min-width: 400px;
}
.category-container{
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
}
.main-category-text , .sub-category-text{
    font-weight: 500;
    margin-bottom: 8px;
    display: block;   
}
.category-select{
    margin-bottom: 15px;
    height: 35px;
    padding: 5px;
    min-width: 200px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
.category-select-option{
    padding: 10px;
}
/* 스크립트에서 처리 */
.sub-category-box{
    display:block;
}
.sub-category-cardBox{
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
}
.sub-category-card{
    display: inline-block;
    background-color: #f5f5f5;
    margin: 3px;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.9em;
    cursor: pointer;
    min-height: 30px;
    min-width: 30px;
    text-align: center;
    line-height: 30px;
}
.sub-category-card:hover{
    background-color: #cdcdcd;
}
.selected-categories{
    margin-top: 15px;
    padding-top: 15px;
    border-top:1px dashed rgb(215, 214, 214);
}
.selected-categories-text{
    font-weight: 500;
    margin-bottom: 8px;
    display: block;
}
.selected-categories-container{
    display: flex;
    align-items: center;
    gap: 8px;
}
.selected-main-category{
    background-color: #ffb402;
    color: #333;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.9em;
    min-height: 30px;
    line-height: 30px;
    font-weight: 500;
}
.selected-sub-category{
    background-color: #ffd993;
    color: #333;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.9em;
    min-height: 30px;
    line-height: 30px;
    font-weight: 500;
}
.member-container{
    display: flex;
    gap: 10px;
    align-items: center;
}
.memeber-input{
    padding: 10px;
    flex: 1;
    height: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1em;
}
.member-noti{
    margin-top: 8px;
    font-size: 0.85em;
    color : #666;
}

.form-input-txtarea2{
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    max-height: 80px;
    resize: none;
    font-size: 1.2em;
    min-height: 50px;
}
.addForm-btn-container{
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    border-top: 1px solid #ddd;
}
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
    transition: all 0.2s;
}
.btn-cancel {
    background-color: #f5f5f5;
    color: #666;
    margin-right: 10px;
}
.btn-cancel:hover {
    background-color: #bbbbbb;
}
.btn-ok {
    background-color: #ffb402;
    color: white;
}
.btn-ok:hover {
    background-color: #e07000;
}


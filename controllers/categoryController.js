//  더미 동호회 데이터
const dummyClubs = [
    {
        name: "서울 축구 동호회",
        category: "스포츠",
        subCategory: "축구",
        location: "서울",
        members: 12,
        img: "/public/images/축구.png",
        guestExperience: true
    },
    {
        name: "부산 산악회",
        category: "등산",
        subCategory: "백패킹",
        location: "부산",
        members: 8,
        img: "/public/images/등산.png",
        guestExperience: true
    },
    {
        name: "책 읽는 사람들",
        category: "독서",
        subCategory: "자기계발",
        location: "대구",
        members: 20,
        img: "/public/images/독서.png",
        guestExperience: true
    },
    {
        name: "강남 락밴드 동호회",
        category: "음악",
        subCategory: "락",
        location: "서울",
        members: 16,
        img: "/public/images/락밴드.png",
        guestExperience: true
    },
    {
    name: "대구 야구 동호회",
    category: "스포츠",
    subCategory: "야구",
    location: "대구",
    members: 9,
    img: "/public/images/야구.png",
    guestExperience: false
    }
];

// 💡 카테고리별 세부 카테고리 목록
const detailCategories = {
    "스포츠": ["전체", "축구", "농구", "야구", "배드민턴"],
    "음악": ["전체", "락", "클래식", "힙합", "재즈"],
    "독서": ["전체", "자기계발", "소설", "에세이"],
    "등산": ["전체", "백패킹", "암벽등반", "트레킹"]
};

// 전체 동호회 페이지 렌더링
exports.getAllCategories = (req, res) => {
    const recommendedClubs = dummyClubs.filter(club => club.guestExperience);

    res.render('categories/all_category', {
        categoryName: null,      // 전체일 경우 null
        clubs: dummyClubs,
        recommendedClubs         // 모든 더미 동호회 전달
    });
};

// 세부 카테고리 페이지 렌더링
exports.getDetailCategory = (req, res) => {
    const { categoryName } = req.params;
    const { subCategory } = req.query; // 세부 카테고리 가져오기
    

    const subCategories = detailCategories[categoryName] || []; // 서브카테고리 배열

    let filtered = dummyClubs.filter(c => c.category === categoryName); // 해당 카테고리만 필터링

    // subCategory가 있고 "전체"가 아니면 다시 필터링
    if (subCategory && subCategory !== '전체') {
        filtered = filtered.filter(club => club.subCategory === subCategory);
    }

    const recommendedClubs = filtered.filter(club => club.guestExperience);

    res.render('categories/detail_category', {
        categoryName,
        clubs: filtered,
        subCategories,
        selectedSubCategory: subCategory || '전체', // 어떤 서브카테고리를 눌렀는지 view로 넘겨줌
        recommendedClubs // ✅ 추천 동호회 리스트
    });
};

const mapContainer = document.getElementById('map');
const defaultLat = 37.5443765;
const defaultLng = 127.1276202;

// 기본 위치로 지도 생성
const mapOptions = {
    center: new kakao.maps.LatLng(defaultLat, defaultLng),
    level: 5
};

const map = new kakao.maps.Map(mapContainer, mapOptions);

// 브라우저에서 위치 정보 가져오기
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const currentLoc = new kakao.maps.LatLng(lat, lng);

        // 지도의 중심을 현재 위치로 이동
        map.setCenter(currentLoc);

        // 현재 위치에 마커 표시 (선택사항)
        const marker = new kakao.maps.Marker({
            position: currentLoc,
            map: map,
            title: '현재 위치'
        });

    }, function(error) {
        console.warn("위치 정보를 가져올 수 없습니다. 기본 위치를 사용합니다.", error);
    });
} else {
    alert("이 브라우저는 위치 정보를 지원하지 않습니다.");
}
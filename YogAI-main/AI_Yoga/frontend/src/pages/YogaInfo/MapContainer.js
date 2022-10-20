import React, { useEffect } from 'react';

const { kakao } = window;


let MapContainer = ({ searchPlace }) => {

  

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    const container = document.getElementById('myMap')


    // let componentDidMount = () => {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    //   });
    // };

    // Lat: 37.4659 Lon: 127.0284

    const options = {
  
      center : new kakao.maps.LatLng(37.4659,127.0284),
      // center : locPosition,
      // center : new kakao.maps.LatLng(position.coords.latitude,position.coords.longitude),
      level: 3,
    }

    // 설정한 지도 생성
    const map = new kakao.maps.Map(container, options)

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.4659,127.0284);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition,
    });

    var iwContent = '<div style="padding:5px;">내 위치<br><a href="https://map.kakao.com/link/map/,37.473889,127.0292881" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/,37.473889,127.0292881" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.4659,127.0284); //인포윈도우 표시 위치입니다


    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
      
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker); 

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);


    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(searchPlace, placesSearchCB)

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        map.setBounds(bounds)
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
        infowindow.open(map, marker)
      })
    }
  }, [searchPlace])

  return (
     <div
        id="myMap"
        style={{
          width: '1000px',
          height: '500px',
          textAlign : "center",
          justifyContent : "center",
          padding : "30px 0 30px 0",
          display: "block", margin : "auto",
          border: "4px ridge", borderRadius : "20px"
          
        }}>
     </div>
  )
}

export default MapContainer;

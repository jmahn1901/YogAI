/* eslint-disable */
// import React, { useEffect, useState } from "react";
// import { Map, MapMarker } from "react-kakao-maps-sdk";

// const { kakao } = window;

import React, { useState } from "react";
import MapContainer from "./MapContainer.js";

let InfoMap = () => {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <>
      <div
        className="container"
        style={{ marginBottom: "100px", width: "center" }}
      >
        <div className="row justify-content-center">
          <h3 style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            요가정보 리스트
          </h3>
          <form className="inputForm" onSubmit={handleSubmit}>
            <input
              placeholder="검색어를 입력하세요"
              onChange={onChange}
              value={InputText}
            />
            <button type="submit">검색</button>
          </form>
          <MapContainer searchPlace={Place} />
        </div>
      </div>
    </>
  );
};

export default InfoMap;

// let InfoMap = () => {

//   const [info, setInfo] = useState();
//   const [markers, setMarkers] = useState([]);
//   const [map, setMap] = useState();

//   useEffect(() => {
//     if (!map) return;
//     const ps = new kakao.maps.services.Places();

//     ps.keywordSearch("이태원 맛집", (data, status, _pagination) => {
//       if (status === kakao.maps.services.Status.OK) {
//         // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
//         // LatLngBounds 객체에 좌표를 추가합니다
//         const bounds = new kakao.maps.LatLngBounds();
//         let markers = [];

//         for (var i = 0; i < data.length; i++) {
//           // @ts-ignore
//           markers.push({
//             position: {
//               lat: data[i].y,
//               lng: data[i].x,
//             },
//             content: data[i].place_name,
//           });
//           // @ts-ignore
//           bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
//         }
//         setMarkers(markers);

//         // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
//         map.setBounds(bounds);
//       }
//     });
//   }, [map]);

//   return (
//     <>
//       <div
//         className="container"
//         style={{ marginBottom: "100px", width: "center" }}
//       >
//         <div className="row justify-content-center">
//           <h3 style={{ paddingTop: "100px", paddingBottom: "100px" }}>
//             요가학원 찾기의 이름은 가제이다
//           </h3>

//           <Map // 로드뷰를 표시할 Container
//             center={{
//               lat: 37.566826,
//               lng: 126.9786567,
//             }}
//             style={{
//               width: "100%",
//               height: "350px",
//             }}
//             level={3}
//             onCreate={setMap}
//           >
//             {markers.map((marker) => (
//               <MapMarker
//                 key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
//                 position={marker.position}
//                 onClick={() => setInfo(marker)}
//               >
//                 {info && info.content === marker.content && (
//                   <div style={{ color: "#000" }}>{marker.content}</div>
//                 )}
//               </MapMarker>
//             ))}
//           </Map>
//         </div>
//       </div>

//       <div>

//       </div>
//     </>
//   );
// };

// export default InfoMap;

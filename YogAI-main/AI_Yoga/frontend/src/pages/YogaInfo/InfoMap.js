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
    <div className="color bg-light" >
      <div
        className="container"
        style={{ marginBottom: "100px", width: "center" }}
      >

        <div className="row justify-content-center">
          <h3
            style={{
              paddingTop: "100px",
              paddingBottom: "100px",
              textAlign: "center",
            }}
          >
            요가 학원 찾기

          </h3>
          <div>
            <form
              className="inputForm"
              onSubmit={handleSubmit}
              style={{textAlign: "center", padding: "30px 0 30px" }}
            >
              <input
                placeholder="요가학원을 입력하세요"
                onChange={onChange}
                value={InputText}
              />
              <button type="submit">검색</button>
            </form>
            <div>
              <MapContainer searchPlace={Place} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMap;

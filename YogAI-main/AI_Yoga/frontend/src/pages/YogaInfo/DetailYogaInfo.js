let DetailYogaInfo = ({ modalData }) => {
    const yoga_url = "http://www.selfyoga.co.kr/";
    
    return (
        <div className="modal fade" id="dailyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{modalData.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            modalData.yogaImg === "" ? (<></>) : (
                                <img alt="요가사진" src={yoga_url + modalData.yogaImg} 
                                style = {{width:"60%", display: "block", margin : "auto", padding : "20px 0 10px 0"}} />
                            )
                        }
                        <h5>자세명 : {modalData.name}</h5>
                        <h5>분류 : {modalData.type}</h5>
                        <h5>내용</h5>
                        <p>{modalData.yogaContent}</p>
                        <h5>수련효과</h5>
                        <p>{modalData.yogaEffect}</p>
                        <h5>주의사항</h5>
                        <p>{modalData.yogaWarning}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={()=> window.location.reload()}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailYogaInfo;
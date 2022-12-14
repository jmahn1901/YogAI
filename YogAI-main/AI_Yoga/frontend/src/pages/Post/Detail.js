let Detail = ({ modalData }) => {
    return (
        <div className="modal fade" id="dailyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{modalData.kind}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            modalData.url === "" ? (<></>) : (
                                <img style={{width:'100%', height:'100%'}} alt="게시글 이미지" src={modalData.url} />
                            )
                        }
                        <h5>제목</h5>
                        <p>{modalData.title}</p>
                        <h5>내용</h5>
                        <p>{modalData.content}</p>
                        {/* 배포 시 작성자(사용자) 구분 필요 */}
                        {/* <h5>작성자</h5>
                        <p>{modalData.name}</p> */}
                        <h5>수정 날짜</h5>
                        <p>{modalData.date}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;
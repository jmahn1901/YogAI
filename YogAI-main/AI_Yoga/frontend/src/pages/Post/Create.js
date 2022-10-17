import axios from "axios";
import server from "./../../config/server.json";
import { useCookies } from "react-cookie";

let Create = ({ modalData, changeModalData }) => {

    const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    //게시글 생성 버튼을 눌렀을때 함수
    let createDaily = async () => {
        if (modalData.title === "") {
            alert("제목을 입력해주세요.");
            return;
        }
        if (modalData.content === "") {
            alert("내용을 입력해주세요.");
            return;
        }

        return await
            axios.post(server.url + '/daily', modalData, {
                headers: {
                    accessToken: cookies.token.accessToken
                }
            });
    }

    //게시글 수정 버튼을 눌렀을때
    let updateDaily = async () => {
        if (modalData.title === "") {
            alert("제목을 입력해주세요.");
            return;
        }
        if (modalData.content === "") {
            alert("내용을 입력해주세요.");
            return;
        }
        return await // http://localhost:8080/daily/shortId/update
            axios.post(`${server.url}/daily/${modalData.shortId}/update`,
                modalData, {
                headers: {
                    accessToken: cookies.token.accessToken
                }
            });
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{modalData.kind}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3" style={{ textAlign: "center" }}>
                                {
                                    modalData.url === "" ? (<></>) : (
                                        <img alt="일기장 사진" src={modalData.url} style={{ borderRadius: "20px", width: "50%" }} />
                                    )
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="url" className="col-form-label">사진</label>
                                <input type="text" value={modalData.url} onChange={changeModalData} className="form-control" id="url" name={"url"} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="col-form-label">제목</label>
                                <input type="text" value={modalData.title} onChange={changeModalData} className="form-control" id="title" name="title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="content" className="col-form-label">내용</label>
                                <textarea className="form-control" value={modalData.content} onChange={changeModalData} id="content" name="content"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                        {
                            modalData.kind === "게시글 생성" ? (
                                <button type="button" className="btn btn-primary"
                                    onClick={() => {
                                        createDaily().then(res => {
                                            console.log(res);
                                            if (res.data.status) {
                                                alert(res.data.message);
                                                window.location.reload();
                                            }
                                        }).catch(err => {
                                            console.log(err);
                                        })
                                    }}>일기장 생성</button>
                            ) : (
                                <button type="button" className="btn btn-warning"
                                    onClick={() => {
                                        updateDaily().then(res => {
                                            console.log(res);
                                            if (res.data.status) {
                                                alert(res.data.message);
                                                window.location.reload();
                                            }
                                        }).catch(err => {
                                            console.log(err);
                                        })
                                    }}>일기장 수정</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Create;
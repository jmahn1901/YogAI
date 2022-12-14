import { useEffect, useState } from "react";
import Create from "./Create";
import Detail from "./Detail";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import server from "./../../config/server.json";
import moment from "moment";


let List = () => {

    const [cookies, setCookie, removeCookie] = useCookies(["cookie"]);
    const navigate = useNavigate();

    //게시글 리스트를  dailise 에 담음
    const [dailise, setDailise] = useState([]);

    //페이징 처리를 위한곳
    const [page, setPage] = useState({
        page: 1,
        totalPage: 0
    });

    console.log(dailise)

    useEffect(() => {
        // 리스트 페이지로 들어 올 경우, 로그인 되어있는 사용자인지 확인하는 부분.
        if (cookies.cookie === undefined) {
            alert("로그인이 필요합니다.");
            navigate("/"); // 페이지 '/' 경로로 이동
            return;
        }


        //현재 로그인되어있는 정보의 이메일을 먼저 modalData에 담아줌

        setModalData({
            ...modalData,
            email: cookies.cookie.email
        })

        // 게시글 목록을 가져오는 부분
        getListDaily().then(res => {
            console.log(res);
            setDailise(res.data.daily);

            setPage({
                ...page, // 현재 페이지는 유지
                totalPage: res.data.totalPage // 전체 페이지가 몇개인지 가져옴
            });

        }).catch(err => {
            console.log(err)
        })

    }, []);

    const [modalData, setModalData] = useState({
        kind: "",
        shortId: "",
        title: "",
        content: "",
        url: "",
        email: ""
    });

    useEffect(() => {
        console.log(modalData);
    }, [modalData]);

    // input값을 변경할 때, 각 input name에 맞는 value값을 넣어줌.
    let changeModalData = (e) => {
        setModalData({
            ...modalData,
            [e.target.name]: e.target.value
        });
    }

    //게시글 리스트를 가져오는 서버 요청 함수
    let getListDaily = async () => {
        return await axios.get(server.url + '/community', {
            headers: {
                accesscookie: cookies.cookie.accesscookie
            }
        });
    }

    //게시글을 삭제하는 서버 요청 함수
    let deleteDaily = async (shortId, title) => {
        if (window.confirm(`${title}를 삭제하시겠습니까?`)) {
            return await //http://localhost:8080/community/shortId/delete
                axios.post(`${server.url}/community/${shortId}/delete`, {}, {
                    headers: {
                        accesscookie: cookies.cookie.accesscookie
                    }
                });
        }
    }

    let detailDaily = (data) => {
        console.log(data);
        setModalData({
            ...modalData,
            kind: "게시글 상세보기",
            shortId: data.shortId,
            title: data.title,
            content: data.content,
            url: data.url,
            name: data.author.name,
            date: data.updatedAt
        })
    }

    let changePage = (page) => {
        axios.get(`${server.url}/community?page=${page}&perPage=6`, {
            headers: {
                accesscookie: cookies.cookie.accesscookie
            }
        }).then(res => {
            console.log(res);
            setDailise(res.data.daily); //게시글 가져온거 넣기
            setPage({
                page: page,
                totalPage: res.data.totalPage
            });
        });
    }

    return (
        <main>
            <Create modalData={modalData}
                changeModalData={changeModalData} />
            <Detail modalData={modalData} />
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">인증 게시판</h1>
                        <p className="lead text-muted">나의 요가 자세를 공유해보세요!</p>
                        <div>
                            <button className="btn btn-primary"
                                data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                    setModalData({
                                        // ...modalData,
                                        kind: "게시글 생성",
                                        shortId: "",
                                        title: "",
                                        content: "",
                                        url: "",
                                        email: cookies.cookie.email
                                    })
                                }}
                            >게시글 생성</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 게시글이 나타나는 부분 */}
            <div className="album py-5 bg-light">

                {/* 게시글 영역 */}
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/* <ul class="table"> */}
                        {
                            // 가져온 게시글 리스트를 보여주는 코드
                            dailise.map(data => (

                                // <li>
                                <div className="col" key={data.shortId}>
                                    <div className="card shadow-sm">
                                        {
                                            // 이미지가 존재하지 않을경우 안보여줌
                                            data.url === "" ? (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACjCAMAAAAzSxLiAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDTAMS/AAE4hXR0AAAAAElFTkSuQmCC" />) : (
                                                <img className="card-img-top" 
                                                data-bs-toggle="modal"
                                                data-bs-target="#dailyModal"
                                                onClick={() => { detailDaily(data) }}
                                                style={{ width: '100%', height:'184px', cursor: 'pointer' }} alt="게시글 사진" src={data.url} />
                                            )
                                            
                                        }
                                        <div className="card-body">
                                            <h5 className="card-title"
                                                // data-bs-toggle="modal"
                                                // data-bs-target="#dailyModal"
                                                // onClick={() => { detailDaily(data) }}>{data.title}</h5>
                                                >{data.title}</h5>
                                                
                                            {/* 수정 전 내용 */}
                                            {/* <p className="card-text">{data.content.substring(0, ((data.content).length / 2))} &nbsp;&nbsp;</p> */}
                                            {/* 수정 후 내용 */}
                                            
                                            <p className="card-text">
                                                {
                                                    // data.content === "" ? (data.content).length > 15
                                                data.content.substring(0, ((data.content).length / 2.5))} &nbsp;&nbsp;</p>
                                                {/* }</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button"
                                                        style={{  margin: '0', 
                                                        paddingTop:'0px', 
                                                        paddingBottom:'0px',
                                                        paddingLeft:'15px',
                                                        paddingRight:'15px',
                                                        borderRadius:'10px'}}
                                                        class="btn btn-outline-warning"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        onClick={() => {
                                                            // 게시글 수정 버튼을 눌렀을 경우,
                                                            // 수정을 원하는 게시글의 정보를 저장함
                                                            setModalData({
                                                                kind: "게시글 수정",
                                                                shortId: data.shortId,
                                                                title: data.title,
                                                                content: data.content,
                                                                url: data.url,
                                                                email: data.author.email
                                                            });
                                                        }}
                                                    >수정</button><span>&nbsp;</span>
                                                    <button type="button"
                                                        style={{ margin: '0', 
                                                        paddingTop:'0px', 
                                                        paddingBottom:'0px',
                                                        paddingLeft:'15px',
                                                        paddingRight:'15px',
                                                        borderRadius:'10px'}}
                                                        class="btn btn-outline-danger"
                                                        onClick={() => {
                                                            //삭제를 시키는 실질적인 코드
                                                            // 인자로 받는 shortId 와 title == 제목
                                                            deleteDaily(data.shortId, data.title).then(res => {
                                                                if (res.data.status) {
                                                                    alert(res.data.message);
                                                                    window.location.reload();
                                                                }
                                                            }).catch(err => {
                                                                console.log(err);
                                                            })
                                                        }}
                                                    >삭제</button>
                                                </div>
                                                <small className="text-muted">{data.author.name}
                                                    {moment(data.updatedAt).format("YYYY-MM-DD HH:mm:ss")}</small>
                                            </div>
                                            {/* npm i npm i moment */}

                                        </div>
                                    </div>
                                </div>
                                // </li>
                            ))
                        }
                        {/* </li> */}
                        {/* </ul> */}
                    </div>
                </div>

                {/* 페이징 처리하는 부분 */}
                <div style={{
                    padding: "10px",
                    margin: "5px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {
                                page.page <= 1 ? (<></>) : (
                                    <>
                                        <li className="page-item">
                                            <a className="page-link"
                                                onClick={() => { changePage(1) }}
                                                aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link"
                                                onClick={() => {
                                                    changePage(Number(page.page) - 1)
                                                }}>{Number(page.page) - 1}
                                            </a>
                                        </li>
                                    </>
                                )
                            }
                            <li className="page-item">
                                <a className="page-link"
                                    onClick={() => { changePage(Number(page.page)) }}
                                    href="#">{page.page}
                                </a>
                            </li>
                            {
                                page.totalPage <= page.page ? (<></>) : (
                                    <>
                                        <li className="page-item">
                                            <a className="page-link"
                                                onClick={() => { changePage(Number(page.page) + 1) }}
                                            >{Number(page.page) + 1}
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link"
                                                onClick={() => { changePage(page.totalPage) }}
                                                aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </nav>
                </div>
            </div>

        </main>
    )
}

export default List;
import { useEffect, useState } from "react";
import Create from "./Create";
import Detail from "./Detail";
import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import server from "./../../config/server.json";
import moment from "moment";

let List = () => {

    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    // const navigate = useNavigate();

    //게시글 리스트를 담아두는 곳
    const [dailise, setDailise] = useState([]);

    //페이징 처리를 위한곳
    const [page, setPage] = useState({
        page: 1,
        totalPage: 0
    });

    useEffect(() => {
        //리스트 페이지로 들어 올 경우, 로그인 되어있는 사용자인지 확인하는 부분.
        // if (cookies.token === undefined) {
        //     alert("로그인이 필요합니다.");
        //     navigate("/");
        //     return;
        // }


        //현재 로그인되어있는 정보의 이메일을 먼저 modalData에 담아줌

        // setModalData({
        //     ...modalData,
        //     email: cookies.token.email
        // })

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

    // useEffect(() => {
    //     console.log(modalData);
    // }, [modalData]);

    // input값을 변경할 때, 각 input name에 맞는 value값을 넣어줌.
    let changeModalData = (e) => {
        setModalData({
            ...modalData,
            [e.target.name]: e.target.value
        });
    }

    //일기장 리스트를 가져오는 서버 요청 함수
    let getListDaily = async () => {
        return await axios.get(server.url + '/daily', {
            headers: {
                accessToken: cookies.token.accessToken
            }
        });
    }

    //일기장을 삭제하는 서버 요청 함수
    let deleteDaily = async (shortId, title) => {
        if (window.confirm(`${title}를 삭제하시겠습니까?`)) {
            return await //http://localhost:8080/daily/shortId/delete
                axios.post(`${server.url}/daily/${shortId}/delete`, {}, {
                    headers: {
                        accessToken: cookies.token.accessToken
                    }
                });
        }
    }

    let detailDaily = (data) => {
        console.log(data);
        setModalData({
            ...modalData,
            kind: "일기장 상세보기",
            shortId: data.shortId,
            title: data.title,
            content: data.content,
            url: data.url,
            name: data.author.name,
            date: data.updatedAt
        })
    }

    let changePage = (page) => {
        axios.get(`${server.url}/daily?page=${page}&perPage=6`, {
            headers: {
                accessToken: cookies.token.accessToken
            }
        }).then(res => {
            console.log(res);
            setDailise(res.data.daily); //일기장 가져온거 넣기
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
                        <h1 className="fw-light">Daily List</h1>
                        <p className="lead text-muted">나만의 일기장을 작성하세요.</p>
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
                                        email: cookies.token.email
                                    })
                                }}
                            >일기장 생성</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            //가져온 일기장 리스트를 보여주는 코드
                            dailise.map(data => (
                                <div className="col" key={data.shortId}>
                                    <div className="card shadow-sm">
                                        {
                                            //이미지가 존재하지 않을경우 안보여줌
                                            data.url === "" ? (<></>) : (
                                                <img className="card-img-top" alt="일기장 사진" src={data.url} />
                                            )
                                        }
                                        <div className="card-body">
                                            <h5 className="card-title"
                                                data-bs-toggle="modal"
                                                data-bs-target="#dailyModal"
                                                onClick={() => { detailDaily(data) }}>{data.title}</h5>
                                            <p className="card-text">{data.content.substring(0, ((data.content).length / 2))}...&nbsp;&nbsp;
                                                <a href="#" onClick={() => { detailDaily(data) }}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#dailyModal">상세보기</a></p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-secondary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        onClick={() => {
                                                            //일기장 수정 버튼을 눌렀을 경우,
                                                            //수정을 원하는 일기장의 정보를 저장함
                                                            setModalData({
                                                                kind: "게시글 수정",
                                                                shortId: data.shortId,
                                                                title: data.title,
                                                                content: data.content,
                                                                url: data.url,
                                                                email: data.author.email
                                                            });
                                                        }}
                                                    >수정</button>
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-secondary"
                                                        onClick={() => {
                                                            //삭제를 시키는 실질적인 코드
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
                                                {/* npm i npm i moment */}
                                                <small className="text-muted">작성자 : {data.author.name} | {moment(data.updatedAt).format("YYYY-MM-DD HH:mm:ss")}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* 페이징 처리하는 부분 10월12일 할 예정 */}
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
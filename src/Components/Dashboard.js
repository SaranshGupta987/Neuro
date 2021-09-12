import {Container, Row, Col} from 'react-bootstrap';
import LineChart from './LineChart';

export const Dashboard = () => {
    return (
        <div>
            <Container fluid>
                <Row className="row">
                    <Col className=" " md ={2}>
                    <div className=" d-flex flex-column align-items-center my-2 leftColumn">
                    <img className="my-3"   src="https://neurolingua.in/assets_school_front/img/black-logo.png" alt="logo" width="180px"/>
                    
                    <a  className="   mx-3 sidePanel  selected"><i className="bi bi-speedometer mx-2"> Dashboard</i></a >
                    <a  className="btn   mx-3 sidePanel"><i className="bi bi-arrow-left-circle "> Courses</i></a >
                    <a  className="btn   mx-3 sidePanel"><i className="bi bi-calendar "> Availabilty</i></a >
                    <a  className="btn   mx-3 sidePanel"><i className="bi bi-arrow-left-circle "> Students</i></a >
                    <a  className="btn   mx-3 sidePanel"><i className="bi bi-journals "> Blog</i></a >
                    <a  className="btn   mx-3 sidePanel"><i className="bi bi-arrow-left-circle "> Coupons</i></a >
                    <a  className="btn   mx-3 sidePanel"><i className="bi bi-currency-dollar  "> Earnings</i></a >
                    <a  className="btn  mx-3 sidePanel"><i className="bi bi-gear "> Settings</i></a >
                    <a  className=" text-center  my-2  btnLogout"><i className="bi bi-box-arrow-right "> Logout</i></a >
                    
                    </div>
                    </Col>

                    <Col md ={7}>
                    <div className="d-flex my-3 justify-content-around">
                    <a className="d-flex flex-column p-4 midSection">
                        <div className="d-flex justify-content-between   mx-2">
                        Courses
                        <i className="mb-4 bi bi-three-dots "></i>
                        
                        </div>

                        <div className="d-flex justify-content-between   mx-2">
                        <i className="  bi bi-journals "></i>
                         2
                        </div>
                    </a>
                    <a className="d-flex flex-column p-4 midSection">
                        <div className="d-flex justify-content-between   mx-2">
                        Class Taken
                        <i className="mb-4 bi bi-three-dots "></i>
                        
                        </div>

                        <div className="d-flex justify-content-between   mx-2">
                        <i className="  bi bi-journals "></i>
                         2
                        </div>
                    </a>
                    <a className="d-flex flex-column p-4 midSection">
                        <div className="d-flex justify-content-between   mx-2 ">
                        Verified <br/> Courses
                        <i className="  bi bi-three-dots "></i>
                        
                        </div>

                        <div className="d-flex justify-content-between  mt-2 mx-2">
                        <i className="  bi bi-journals "></i>
                         2
                        </div>
                    </a>
                    <a className="d-flex flex-column p-4 midSection">
                        <div className="d-flex justify-content-between   mx-2">
                        Non-Verified <br/> Courses
                        <i className="mb-4 bi bi-three-dots "></i>
                        
                        </div>

                        <div className="d-flex justify-content-between  mt-2 mx-2">
                        <i className="  bi bi-journals "></i>
                         2
                        </div>
                    </a>
                    {/* <a className="d-flex justify-content-between  midSection">
                        <div className="d-flex flex-column p-3 mx-3">
                        Class Taken
                        <i className=" mt-4 bi bi-journals "></i>
                        </div>

                        <div className="d-flex flex-column p-3 mx-2">
                        <i className="mb-4 bi bi-three-dots "></i>
                         2
                        </div>
                    </a>
                     */}

                    </div>

                    <div className="d-flex  my-5 justify-content-around ">

                     <div className="text-center midSection2 ">
                         <div className="mt-2 mb-1">My Earnings</div>
                     <div className="line"></div>
                     <div className="d-flex justify-content-between">
                         
                     <div className="d-flex  my-2 w-50 flex-column">
                        Today Earnings
                        <div>$1000</div>
                     </div>
                    <div className="vl"></div>
                     <div className="d-flex  my-2 w-50 flex-column">
                        Pending
                        <div>$60</div>
                     </div>
                     
                     </div >
                     <div className="p-3 withdraw">
                     <a className="btnWithdraw">Withdraw</a>
                     </div>
                    
                     </div>



                     <div className="text-center midSection2">
                        <div className="mt-2 mb-1"> Session Overview </div>
                     <div className="d-flex sessionOverview pt-4 pb-3">
                         <div className="d-flex flex-column mx-2 ">Scheduled
                         <div className="my-3">1</div>
                         </div>
                         
                         <div className="d-flex flex-column mx-2 ">UpComing
                         <div className="my-3">2</div>
                         </div>
                         <div className="d-flex flex-column mx-2 ">cancelled
                         <div className="my-3">0</div>
                         </div>
                     </div>
                    
                     </div>

                     <div className="text-center midSection2">
                        <div className="mt-2 mb-1"> My Students </div>
                     <div className="d-flex flex-column sessionOverview">
                        
                         <div className="d-flex  mx-2 mb-2">
                         <img src="https://cdn.discordapp.com/attachments/711612387073064992/886549353597116436/Dashboard_Task_for_Intern.png" alt="sample" height="70px" width="90px"/>
                         
                         </div>
                         <div className="line"></div>
                         <a className="p-2 seeAll">See All Students</a>
                     </div>
                    
                     </div>

                    
                    </div>

                     <div className="chart">
                      
                         <LineChart></LineChart>
                         
                     </div>
                    </Col>



                    <Col md ={3}>
                     
                    <div class="right_nav d-flex flex-column align-items-center justify-content-between">
        <div class="right_top d-flex justify-content-between">
            <a href="#"><i class="bi bi-chat"></i></a>
            <a href="#"><i class="bi bi-bell-fill"></i></a>
        </div>
        <div class="profile-pic ">
            <img src="https://cdn.discordapp.com/attachments/711612387073064992/886549353597116436/Dashboard_Task_for_Intern.png"/>
        </div>
        <div class="name ">Welcome Aayush!</div>
        <div class="right_bottom">
            <p>Upcoming Class</p>
            <div class="upcoming-class">
                <div class="up-classname">
                    <img src="https://image.shutterstock.com/image-vector/canada-leaf-600w-589189172.jpg"/> French
                </div>
                <hr />
                <div class="upcome-date">
                    <i class="bi bi-calendar"> 17th August 2021</i>
                    <i class="bi bi-clock"> 11:00 AM</i>
                    <i class="bi bi-hourglass-split"> 60 Minutes</i>
                    <i class="bi bi-currency-dollar "> $10</i>
                </div>
                <button onclick="" class="join-btn">
                    Join Class
                </button>
            </div>
        </div>

    </div>
                    </Col>
                    
                </Row>

            </Container>
        </div>
    )
}

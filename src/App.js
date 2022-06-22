import React from 'react';
import img2 from "./image/img2.PNG";
import imgw from "./image/imgw.PNG";
import v1 from "./image/v1.PNG";
import v2 from "./image/v2.PNG";
import v3 from "./image/v3.PNG";
import imgchat from "./image/imgchat.PNG";
import imgcal from "./image/imgcal.PNG";
import imgpro from "./image/imgpro.jpg";
import 'boxicons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import './App.css';

function App() {
  return (
    <div className="row d-flex size">

      <div className="col ">
        <div className="position-fixed navbar-light bg-light ps-3 pe-3 pt-3" style={{ height: "100%", maxWidth: "47%" }}>
          <div className="row"> <div className="profile  " style={{ height: "40%" }}>
            <img src={imgpro} alt="shihab" style={{ height: "200px", width: "200px" }} className="img-fluid rounded-circle" />
            <h2 className="text-light text-center mt-1 grow"><a href="#scrollspyHeading1" style={{ textDecoration: "none", color: "black" }}>SRS SHIHAB</a></h2>
            <div className="social-links mt-3 d-flex justify-content-around align-self-center">
              <a href="https://github.com/Shihab-Sabbir/" target="_blank" className="grow1"  ><i> <box-icon type='logo' name='github'></box-icon></i></a>
              <a href="https://join.skype.com/invite/vJt1PIJ87VnP" target="_blank" className="grow1"  ><i><box-icon name='skype' type='logo' ></box-icon></i></a>
              <a href="https://www.linkedin.com/in/shihab-sabbir-034879224/" target="_blank" className="grow1"  ><i><box-icon name='linkedin-square' type='logo' ></box-icon></i></a>
            </div>
          </div></div>
          <div className="row mt-2" ><div className="nav-menu navbar" style={{ height: "40%" }} >
            <ul className="nav-pills" >
              <p className="nav-item  text-center "> <a className="nav-link border border-1 button rounded-pill me-1" href="#scrollspyHeading1" style={{ color: "black" }} >Home</a></p>
              <p className="nav-item  text-center"> <a className="nav-link border border-1 button rounded-pill me-1" href="#scrollspyHeading2" style={{ color: "black" }}>About</a></p>
              <p className="nav-item  text-center"> <a className="nav-link border border-1 button rounded-pill me-1" href="#scrollspyHeading3" style={{ color: "black" }}>Education</a></p>
              <p className="nav-item  text-center"> <a className="nav-link border border-1 button rounded-pill me-1" href="#scrollspyHeading4" style={{ color: "black" }}>Projects</a></p>
              <p className="nav-item  text-center"> <a className="nav-link border border-1 button rounded-pill me-1" href="#scrollspyHeading5" style={{ color: "black" }}>Experience</a></p>
              <p className="nav-item  text-center"> <a className="nav-link border border-1 button rounded-pill me-1" href="#scrollspyHeading6" style={{ color: "black" }}>Contact</a></p>
            </ul>
          </div></div>
          <div className="row">

            <div style={{ height: "20%" }}>
              <div className="copyright">
                &copy; Copyright <strong><span>iResume</span></strong>
              </div>
              <div className="credits">Designed by <a >Shihab-Sabbir</a>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="col size1 margin" style={{ maxWidth: "fit-content", minWidth: "fit-content" }}>
        <div className=" scrollspy-example ms-5 " tabindex="0">
          <div id="scrollspyHeading1" className="me-5 ms-5 row">

            <div className="col"><img className="image ms-auto" src={img2} style={{ minWidth: "150px", maxWidth: "100%", minHeight: "200px" }} /></div>
            <div className="col text-center m-auto name" style={{ width: "100%" }}><h3 > Hi I am MD SABBIR REZA SHAFI</h3></div>
          </div>
          <div id="scrollspyHeading2" className="ms-3 section-title mt-5 mb-5" >
            <h2>About Me</h2>

            <span>I have more than three and half years of experience in machine maintenance , qualifications and validation process from Incepta Pharmaceutical Ltd. I have successfully faced CE, ISO 13485 ,ISO 9001 audits.
              However , I want to start my career with software development or IT related works. I have some experience in HTML , CSS3 , Bootstrap5, React JS , C++ , MySQL , basic level full stack e-commerce Website development , Arduino based robotics work etc...
            </span>
            <br />
            <strong> Carrer Goal : </strong>
            <span> To be a part of a software industry that is to update my knowledge and skills as well as be part of a good team dynamically work towards growth of organization and gain satisfaction thereof. </span>
          </div>
          <div id="scrollspyHeading3" className=" ms-3 mt-5 mb-5 section-title">
            <h2>Education</h2>
            <div className="section-bg"><i style={{ color: "#149ddd" }} className="bi bi-chevron-right"></i><strong > B.Sc</strong>
              <p>Subject : Electrical and Electronic Engineering</p>
              <p>Passing Year : 2017</p>
              <p>Organization : Ahsanullah University of Science and Technology</p>
              <p>Result : 3.68 out of 4.00</p></div>
            <div><i style={{ color: "#149ddd" }} className="bi bi-chevron-right"></i><strong > H.S.C</strong>
              <p>Subject : Science</p>
              <p>Passing Year : 2013</p>
              <p>Organization : Sirajganj Govt. College</p>
              <p>Result : 5.00 out of 5.00</p></div>
            <div className="section-bg"><i style={{ color: "#149ddd" }} className="bi bi-chevron-right"></i><strong > S.S.C</strong>
              <p>Subject : Science</p>
              <p>Passing Year : 2011</p>
              <p>Organization : B.L Govt. High School</p>
              <p>Result : 5.00 out of 5.00</p></div>
          </div>

          <div id="scrollspyHeading4" className=" ms-3 mt-5 mb-5 section-title">
            <h2 className=" mb-5 ">Projects</h2>

            <div className="row mb-5 pe-3 section-bg pt-3">
              <div className="col m-auto">
                <h3 > Weather-App </h3>
                <p><span className="fw-bolder" >Live Here :</span> <a href="https://srs-weather-app.web.app" target="_blank" className="pe-auto" style={{ textDecoration: "none" }}> https://srs-weather-app.web.app</a></p>
                <p><span className="fw-bolder">GitHub Link :</span> <a href="https://github.com/Shihab-Sabbir/Weather-App" target="_blank" className="pe-auto" style={{ textDecoration: "none" }}> https://github.com/Shihab-Sabbir/Weather-App</a></p>
                <p>Features : Search by City , Time & Date , Deatailed Weather Condition , 4 days Weather Forecast , Dynamic Weather Icons , Background Animation</p>
              </div>
              <div className="col">
                <img className=" shadow-lg mb-1 me-auto bg-body rounded" src={imgw} style={{ width: "100%", minHeight: "200px", minWidth: "80px" }} />
              </div>
            </div>

            <div className="row mb-5 pe-3 pt-3">
              <div className="col m-auto">
                <h3 >
                  Realtime-ChatRoom-with-ReactJs-Firebase </h3>
                <p><span className="fw-bolder" >Live Here :</span> <a className="pe-auto" href="https://whatsapp-clone-485a9.web.app/" target="_blank" style={{ textDecoration: "none" }}> https://chat-room.web.app</a></p>
                <p><span className="fw-bolder">GitHub Link :</span> <a href="https://github.com/Shihab-Sabbir/Realtime-ChatRoom-with-ReactJs-Firebase" target="_blank" className="pe-auto" style={{ textDecoration: "none" }}> https://github.com/Shihab-Sabbir/ChatRoom</a></p>
                <p>Features : Features : Creating Chatrooms , RealTime Text Chating , Delete Chat , Login with Google Acoount , Logout .</p>
              </div>
              <div className="col">
                <img className=" shadow-lg mb-1 me-1 ms-auto bg-body rounded" src={imgchat} style={{ width: "100%", minHeight: "200px", minWidth: "70px" }} />
              </div>
            </div>
            <div className="row mb-5 pe-3 section-bg pt-3">
              <div className="col m-auto">
                <h3 > Voice-Recognition-App
                </h3>
                <p><span className="fw-bolder" >Live Here :</span> <a href="https://srs-voice-recognition.web.app" target="_blank" className="pe-auto" style={{ textDecoration: "none" }}> https://voice-recognition.web.app</a></p>
                <p><span className="fw-bolder">GitHub Link :</span> <a href="https://github.com/Shihab-Sabbir/Voice-Recognition-App" target="_blank" className="pe-auto" style={{ textDecoration: "none" }}> https://github.com/Shihab-Sabbir/Voice-Recognition-App</a></p>
                <p>Features : Features : Voice to Text conversion , Follow Voice Command like : Speak "Reset" for Resetting , Speak "Stop" for Stop convertion , Speak "Open Google/Youtube etc.." for start opening the said sites , Speak "Change Background Color to (any color name)" for change background color , Speak "Reset Background Color " for Resetting background color etc..</p>
              </div>
              <div className="row ms-1 me-2">
                <img className=" row shadow-lg mb-5 bg-body rounded ms-1" src={v3} style={{ width: "100%", maxHeight: "400px", maxWidth: "650px", minWidth: "70px" }} />
                <img className="row shadow-lg mb-5 bg-body rounded ms-1" src={v2} style={{ width: "100%", maxHeight: "400px", maxWidth: "650px", minWidth: "70px" }} />
                <img className="shadow-lg mb-5 bg-body rounded ms-1" src={v1} style={{ width: "100%", maxHeight: "400px", maxWidth: "650px", minWidth: "70px" }} />
              </div>
            </div>
            <div className="row mb-5 pe-3 pt-3">
              <div className="col ">
                <h3 >
                  Calculator </h3>
                <p><span className="fw-bolder" >Live Here :</span> <a href="https://srs-calculator.web.app/" target="_blank" className="pe-auto" style={{ textDecoration: "none" }}> https://calculator.web.app</a></p>
                <p><span className="fw-bolder">GitHub Link :</span> <a href="https://github.com/Shihab-Sabbir/Calculator" target="_blank" className="pe-auto" style={{ textDecoration: "none" }}> https://github.com/Shihab-Sabbir/Calculator</a></p>
                <p>Features : Features : Basic Calculation</p>
              </div>
              <div className="col">
                <img className=" shadow-lg mb-5 me-5 ms-5 bg-body rounded " src={imgcal} style={{ width: "45%", minHeight: "200px", minWidth: "80px" }} />
              </div>
            </div>
          </div>


          <div id="scrollspyHeading5" className=" ms-3 mt-5 section-title">
            <h2>Experience</h2>
            <div>
              <h6>Maintenance Engineer ( March 11, 2018 - Continuing)</h6>
              <h6>	Incepta Pharmaceutical Ltd.</h6>
              <h6>Duties/Responsibilities:</h6>

              <p> 1. To ensure the quality production of of Medical Device (Infusion and Scalp Vein Set ,     Surgical Suture, mold components bulk )</p>
              <p> 2. Regular maintenance and repair operation of electrical utility service, trouble shooting of electrical malfunction in related production machines.</p>
              <p>3. To ensure the availability of spare parts required for the maintenance of relevant machine.</p>
              <p>4. To prepare and review the production related SOP, URS and conducts training for stuffs.</p>
              <p> 5. To maintain and prepare the necessary documents (Such as BMR, BPR, Logbook etc).</p>
              <p> 6. To make the production Plan for the production of suture components with best use of Man, Machine & utility services.</p>
              <p> 7. To ensure environmental monitoring of production floor.</p>
              <p>  8. To prepare and maintain the daily production plan, production report.</p>
              <p>  9. To ensure the daily production with maximum capacity of machine & manpower.</p>
              <p> 10. To supervise and delegate the work or assignments to subordinate stuffs of suture operations to ensure a timely and cost effective completion of all tasks.</p>
            </div>
          </div>

          <div id="scrollspyHeading6" className=" ms-3 mt-5 section-title">
            <h2>Contact</h2>
            <div>
              <p> Address: 10/3 Tajmahal road , Mohammadpur, Dhaka . Block C , Flat no : A4, Mohammadpur
                Housing, Mohammadpur, Dhaka 1207</p>
              <p> Primary Mobile No : 01521255003</p>
              <p> Secondary Mobile No : 01315471362</p>
              <p> Emergency Contact No : 01724081353</p>
              <p> Email : shihab11231@gmail.com</p>
            </div>
          </div>
          <a href="#" className="back-to-top d-flex position-fixed bottom-0 end-0 my-icon" style={{ height: "50px", width: "50px" }}><box-icon name='up-arrow-circle' type='solid' animation='fade-up' flip='horizontal' color='#141ee4'  ></box-icon></a>
        </div>
      </div>
    </div>
  )
}

export default App


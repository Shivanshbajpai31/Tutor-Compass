import logo1 from "../../../assets/logo1.png";
import Ellipse from "../../../assets/Ellipse 9.png";
import teacher from "../../../assets/teacher.png";
import chat from "../../../assets/chat.png";
import { useNavigate } from "react-router-dom";
const LiveLecture1Dup = () => {
    const navigate= useNavigate();
    const handleQuiz=()=>{
        navigate('/quiz');
    }
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          width: "100%",
          height: "2475px",
          overflow: "hidden",
          textAlign: "left",
          fontSize: "20px",
          color: "#000",
          fontFamily: "Poppins",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "165px",
            left: "calc(50% - 697px)",
            borderRadius: "40px",
            width: "1383px",
            height: "612px",
            objectFit: "cover",
          }}
          alt=""
          src={teacher}
        />
        <div
          style={{
            position: "absolute",
            top: "642px",
            left: "44px",
            width: "272px",
            height: "135px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "15px",
              left: "18px",
              borderRadius: "0px 40px 0px 40px",
              backgroundColor: "rgba(0, 0, 0, 0.29)",
              width: "254px",
              height: "120px",
            }}
          />
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "245px",
              height: "135px",
              objectFit: "cover",
            }}
            alt=""
            src={logo1}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "710px",
            left: "1307px",
            width: "77px",
            height: "42px",
            fontSize: "28px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "13px",
              left: "0px",
              borderRadius: "50%",
              backgroundColor: "#cb0000",
              width: "16px",
              height: "16px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "22px",
              fontWeight: "600",
            }}
          >
            Live
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "812px",
            left: "62px",
            fontSize: "27px",
            fontWeight: "500",
            fontFamily: "Montserrat",
            color: "#272727",
          }}
        >
          Computer Networks
        </div>
        <div
          style={{
            position: "absolute",
            top: "891px",
            left: "63px",
            fontSize: "27px",
            fontFamily: "Montserrat",
            color: "#272727",
          }}
        >
          Lecture 14 : Application Layer
        </div>
        <div
          style={{
            position: "absolute",
            top: "856px",
            left: "63px",
            fontFamily: "Montserrat",
            color: "rgba(0, 0, 0, 0.8)",
            textAlign: "right",
          }}
        >
          Instructor : Garry Lawrence
        </div>
        <div
          style={{
            position: "absolute",
            top: "1028px",
            left: "82px",
            width: "1350px",
            height: "1035px",
            fontSize: "25px",
            color: "rgba(0, 0, 0, 0.75)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "40px",
              backgroundColor: "#fff",
              border: "2px solid #000",
              boxSizing: "border-box",
              width: "1290px",
              height: "1035px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "903px",
              left: "2px",
              borderRadius: "0px 0px 40px 40px",
              backgroundColor: "#b2deff",
              boxShadow: "0px 1px 13px rgba(0, 0, 0, 0.13)",
              width: "1290px",
              height: "130px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "930px",
              left: "50px",
              width: "1100px",
              height: "67px",
              fontSize: "22px",
              color: "rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "27px",
                backgroundColor: "#fff",
                width: "1100px",
                height: "67px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 16.5px)",
                left: "41px",
              }}
            >
              Enter your question
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "926px",
              left: "1200px",
              borderRadius: "50%",
              backgroundColor: "#0e538c",
              width: "75px",
              height: "71px",
            }}
          />
          <img
            style={{
              position: "absolute",
              height: "2.9%",
              width: "2.73%",
              top: "91.5%",
              right: "4.5%",
              bottom: "5.6%",
              left: "1230px",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src={chat}
          />
          <div
            style={{
              position: "absolute",
              top: "96.5px",
              left: "1331.5px",
              borderRight: "9px solid rgba(0, 0, 0, 0.5)",
              boxSizing: "border-box",
              width: "9px",
              height: "647px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "120px",
              left: "56px",
              width: "1165px",
              height: "84px",
            }}
          >
            <div style={{ position: "absolute", top: "0px", left: "0px" }}>
              Nayan Singh
            </div>
            <div
              style={{
                position: "absolute",
                top: "43px",
                left: "0px",
                fontSize: "27px",
                color: "#000",
                display: "inline-block",
                width: "1165px",
              }}
            >
              What is the difference between TCP and UDP?
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "230px",
              left: "56px",
              width: "1165px",
              height: "84px",
            }}
          >
            <div style={{ position: "absolute", top: "0px", left: "0px" }}>
              Shravan Modi
            </div>
            <div
              style={{
                position: "absolute",
                top: "43px",
                left: "0px",
                fontSize: "27px",
                color: "#000",
                display: "inline-block",
                width: "1165px",
              }}
            >
              How is data transferred in the form of packets?
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "340px",
              left: "53px",
              width: "1165px",
              height: "84px",
            }}
          >
            <div style={{ position: "absolute", top: "0px", left: "0px" }}>
              Moksha Rai
            </div>
            <div
              style={{
                position: "absolute",
                top: "43px",
                left: "0px",
                fontSize: "27px",
                color: "#000",
                display: "inline-block",
                width: "1165px",
              }}
            >
              What is the purpose of DNS?
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "450px",
              left: "50px",
              width: "1165px",
              height: "84px",
            }}
          >
            <div style={{ position: "absolute", top: "0px", left: "0px" }}>
              Rungshit Saha
            </div>
            <div
              style={{
                position: "absolute",
                top: "43px",
                left: "0px",
                fontSize: "27px",
                color: "#000",
                display: "inline-block",
                width: "1165px",
              }}
            >
              What is the function of SMTP?
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "560px",
              left: "47px",
              width: "1165px",
              height: "84px",
            }}
          >
            <div style={{ position: "absolute", top: "0px", left: "0px" }}>
              Adarsh Paul
            </div>
            <div
              style={{
                position: "absolute",
                top: "43px",
                left: "0px",
                fontSize: "27px",
                color: "#000",
                display: "inline-block",
                width: "1165px",
              }}
            >
              What are the TCP connections required?
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "670px",
              left: "44px",
              width: "1165px",
              height: "84px",
            }}
          >
            <div style={{ position: "absolute", top: "0px", left: "0px" }}>
              Jeevan Harish
            </div>
            <div
              style={{
                position: "absolute",
                top: "43px",
                left: "0px",
                fontSize: "27px",
                color: "#000",
                display: "inline-block",
                width: "1165px",
              }}
            >
              What is the difference between MAA and MTA?
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "780px",
              left: "41px",
              width: "1165px",
              height: "84px",
            }}
          >
            <div style={{ position: "absolute", top: "0px", left: "0px" }}>
              Shaunak Dalai
            </div>
            <div
              style={{
                position: "absolute",
                top: "43px",
                left: "0px",
                fontSize: "27px",
                color: "#000",
                display: "inline-block",
                width: "1165px",
              }}
            >
              How do we know is something is following the FTA protocol?
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "40px 40px 0px 0px",
              backgroundColor: "#cce9ff",
              width: "1290px",
              height: "82px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "650px",
              height: "82px",
              fontSize: "27px",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "40px 0px 0px 0px",
                backgroundColor: "#0e538c",
                borderTop: "2px solid #000",
                borderLeft: "2px solid #000",
                boxSizing: "border-box",
                width: "650px",
                height: "82px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 16px)",
                left: "calc(50% - 62.47px)",
                display: "inline-block",
                width: "211.31px",
              }}
            >
              Live Chat
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "1px",
              left: "610px",
              width: "650px",
              height: "81px",
              fontSize: "27px",
              color: "rgba(14, 83, 140, 0.58)",
              fontFamily: "Montserrat",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "0px 40px 0px 0px",
                backgroundColor: "#cce9ff",
                borderTop: "2px solid #000",
                borderRight: "2px solid #000",
                boxSizing: "border-box",
                width: "680px",
                height: "81px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 16.5px)",
                left: "calc(50% - 78px)",
                display: "inline-block",
                width: "302.75px",

              }}
              onClick={handleQuiz}
            >
              Module Quiz
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "-2px",
            left: "0px",
            backgroundColor: "#0e538c",
            width: "1520px",
            height: "107px",
            fontSize: "15px",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "2px",
              left: "0px",
              width: "197.81px",
              height: "109px",
              objectFit: "cover",
            }}
            alt=""
            src={logo1}
          />
          <div
            style={{
              position: "absolute",
              top: "34px",
              left: "1065px",
              width: "250.98px",
              height: "46px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "23px",
                backgroundColor: "#fff",
                width: "250.98px",
                height: "46px",
              }}
            />
            <div style={{ position: "absolute", top: "12px", left: "19px" }}>
              Explore
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              top: "calc(50% - 30.5px)",
              left: "1340px",
              borderRadius: "50%",
              width: "62px",
              height: "62px",
              objectFit: "cover",
            }}
            alt=""
            src={Ellipse}
          />
        </div>
        <div style={{ position: "absolute", top: "116px", left: "63px" }}>
          Home
        </div>
        <div style={{ position: "absolute", top: "116px", left: "199px" }}>
          In Progress
        </div>
        <div style={{ position: "absolute", top: "116px", left: "398px" }}>
          Completed
        </div>
        <div
          style={{
            position: "absolute",
            height: "1.74%",
            width: "100.07%",
            top: "94.51%",
            right: "0%",
            bottom: "3.76%",
            left: "-0.07%",
            fontFamily: "Roboto",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "50.85%",
              width: "28.6%",
              top: "49.15%",
              left: "3.94%",
              lineHeight: "150%",
              fontWeight: "300",
              display: "inline-block",
            }}
          >
            @2023 TutorCompass Inc. All Rights Reserved.
          </div>
          <div
            style={{
              position: "absolute",
              top: "16.76px",
              left: "778px",
              width: "727px",
              height: "21.86px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "134.89px",
                height: "21.86px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  lineHeight: "150%",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "134.89px",
                  height: "21.86px",
                }}
              >
                About us
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "135.28px",
                width: "253.71px",
                height: "21.86px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "253.71px",
                  height: "21.86px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    lineHeight: "150%",
                    fontWeight: "500",
                    display: "inline-block",
                    width: "253.71px",
                    height: "21.86px",
                  }}
                >
                  Terms of Service
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "348.81px",
                lineHeight: "150%",
                fontWeight: "500",
                display: "inline-block",
                width: "210.37px",
                height: "21.86px",
              }}
            >
              Privacy Policy
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "534.36px",
                lineHeight: "150%",
                fontWeight: "500",
                display: "inline-block",
                width: "192.64px",
                height: "21.86px",
              }}
            >
              Cookie Notice
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "-2.5px",
              left: "-2.5px",
              borderTop: "5px solid #0e538c",
              boxSizing: "border-box",
              width: "1526px",
              height: "5px",
            }}
          />
        </div>
      </div>
    );
  };
  
  export default LiveLecture1Dup;
import logo from "../../../assets/logo1.png";
import gary from "../../../assets/gary.png";
import star from "../../../assets/star.png";
import profile from "../../../assets/Ellipse 9.png";
import cn from "../../../assets/cn.png";
import rect from "../../../assets/rect.png";
import vector from "../../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
const CourseSelection3Dup = () => {
    const navigate=useNavigate();
    const handleProgress=()=>{
        navigate('/dash');
    }
    const handleHome=()=>{
        navigate('/dashboard');
    }
    const handleEnroll=()=>{
        navigate('/live');
    }
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          width: "100%",
          height: "2599px",
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
            top: "464px",
            left: "63px",
            borderRadius: "50%",
            width: "181px",
            height: "181px",
            objectFit: "cover",
          }}
          alt=""
          src={gary}
        />
        <div
          style={{
            position: "absolute",
            top: "458px",
            left: "309px",
            fontSize: "27px",
            fontWeight: "500",
            display: "inline-block",
            width: "378px",
            height: "58px",
          }}
        >
          A Note from the Instructor
        </div>
        <div
          style={{
            position: "absolute",
            top: "1184px",
            left: "63px",
            fontSize: "27px",
            fontWeight: "500",
          }}
        >
          Topics
        </div>
        <div
          style={{
            position: "absolute",
            top: "517px",
            left: "309px",
            display: "inline-block",
            width: "1090px",
            height: "289px",
          }}
        >
          As an online computer networks professor, I'm on a passionate journey to
          explore the captivating world of connectivity and data exchange. In the
          realm of computer networks, we delve into the intricate web of
          interconnections that drive modern communication, innovation, and global
          connectivity. Together, we'll engage in unraveling the elegance of
          network architectures, the magic of protocols, and the vital security
          measures safeguarding our digital universe. Be prepared to be enthralled
          by the seamless flow of information across vast distances and the
          intriguing challenges of optimizing network performance. Join me in this
          intellectual odyssey where the beauty of computer networks unfolds,
          revealing the subject's enthralling relevance in our ever-evolving
          digital age.
        </div>
        <div
          style={{
            position: "absolute",
            top: "849px",
            left: "calc(50% - 697px)",
            width: "640px",
            height: "282px",
            fontSize: "22px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "25px",
              left: "calc(50% - 120px)",
              fontSize: "30px",
              fontWeight: "500",
              display: "inline-block",
              width: "261px",
            }}
          >
            Course Highlight
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "47px",
              border: "2px solid rgba(0, 0, 0, 0.22)",
              boxSizing: "border-box",
              width: "640px",
              height: "282px",
            }}
          />
          <div style={{ position: "absolute", top: "102px", left: "44px" }}>
            12 topics
          </div>
          <div style={{ position: "absolute", top: "150px", left: "44px" }}>
            48 sub modules
          </div>
          <div style={{ position: "absolute", top: "200px", left: "44px" }}>
            110 hours lecture
          </div>
          <div
            style={{
              position: "absolute",
              top: "102px",
              left: "412px",
              textAlign: "right",
            }}
          >
            Beginner Friendly
          </div>
          <div
            style={{
              position: "absolute",
              top: "150px",
              left: "422px",
              textAlign: "right",
            }}
          >
            No Pre-requisite
          </div>
          <div
            style={{
              position: "absolute",
              height: "11.7%",
              width: "10.71%",
              top: "70.92%",
              right: "6%",
              bottom: "17.38%",
              left: "83.28%",
              textAlign: "right",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "67.55%",
                width: "34.38%",
                top: "12.12%",
                right: "0%",
                bottom: "20.33%",
                left: "65.62%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
              }}
              alt=""
              src={star}
            />
            <div
              style={{ position: "absolute", top: "0px", left: "0px" }}
            >{`4.8   `}</div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "849px",
            left: "calc(50% + 46px)",
            width: "640px",
            height: "282px",
            fontSize: "22px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "25px",
              left: "calc(50% - 143px)",
              fontSize: "30px",
              fontWeight: "500",
              display: "inline-block",
              width: "261px",
            }}
          >
            Course Schedule
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "47px",
              border: "2px solid rgba(0, 0, 0, 0.22)",
              boxSizing: "border-box",
              width: "640px",
              height: "282px",
            }}
          />
          <div style={{ position: "absolute", top: "102px", left: "29px" }}>
            Mode : Live
          </div>
          <div style={{ position: "absolute", top: "150px", left: "29px" }}>
            3 days a week
          </div>
          <div style={{ position: "absolute", top: "200px", left: "29px" }}>
            60 mins lecture
          </div>
          <div
            style={{
              position: "absolute",
              top: "126px",
              left: "398px",
              fontSize: "24px",
            }}
          >
            Mon Wed Fri
          </div>
          <div
            style={{
              position: "absolute",
              top: "159px",
              left: "426px",
              fontSize: "24px",
            }}
          >
            Time : 20:00
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
            src={logo}
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
              left: "1325px",
              borderRadius: "50%",
              width: "62px",
              height: "62px",
              objectFit: "cover",
            }}
            alt=""
            src={profile}
          />
        </div>
        <div style={{ position: "absolute", top: "116px", left: "63px" }} onClick={handleHome}>
          Home
        </div>
        <div style={{ position: "absolute", top: "116px", left: "199px" }} onClick={handleProgress}>
          In Progress
        </div>
        <div style={{ position: "absolute", top: "116px", left: "398px" }}>
          Completed
        </div>
        <img
          style={{
            position: "absolute",
            top: "165px",
            left: "722px",
            width: "799px",
            height: "222px",
            objectFit: "cover",
          }}
          alt=""
          src={cn}
        />
        <img
          style={{
            position: "absolute",
            top: "165px",
            left: "0px",
            width: "900px",
            height: "222px",
          }}
          alt=""
          src={rect}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "63px",
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
            top: "262px",
            left: "63px",
            fontFamily: "Montserrat",
            color: "rgba(0, 0, 0, 0.68)",
          }}
        >
          12 topics
        </div>
        <div
          style={{
            position: "absolute",
            top: "262px",
            left: "290px",
            fontFamily: "Montserrat",
            color: "rgba(0, 0, 0, 0.68)",
            textAlign: "right",
          }}
        >
          Instructor : Garry Lawrence
        </div>
        <div
          style={{
            position: "absolute",
            top: "315px",
            left: "63px",
            width: "204.99px",
            height: "47px",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "21px",
              backgroundColor: "#0e538c",
              width: "204.99px",
              height: "47px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 14.5px)",
              left: "calc(50% - 51.49px)",
            }}
            onClick={handleEnroll}
          >
            Enroll Now
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "1279px",
            left: "63px",
            width: "1383px",
            height: "434px",
            fontSize: "27px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "55px",
              backgroundColor: "#fff",
              border: "1px solid #000",
              boxSizing: "border-box",
              width: "1300px",
              height: "434px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 193px)",
              left: "46px",
              display: "inline-block",
              width: "520px",
            }}
          >
            Introduction to Computer Networks
          </div>
          <img
            style={{
              position: "absolute",
              height: "2.74%",
              width: "1.3%",
              top: "8.76%",
              right: "4.7%",
              bottom: "88.5%",
              left: "90%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src={vector}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "1747px",
            left: "63px",
            width: "1383px",
            height: "88px",
            fontSize: "27px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "55px",
              backgroundColor: "#fff",
              border: "1px solid #000",
              boxSizing: "border-box",
              width: "1300px",
              height: "88px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 20px)",
              left: "46px",
              display: "inline-block",
              width: "520px",
            }}
          >
            Application Layer
          </div>
          <img
            style={{
              position: "absolute",
              height: "13.52%",
              width: "1.3%",
              top: "43.18%",
              right: "4.7%",
              bottom: "43.3%",
              left: "90%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src={vector}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "1866px",
            left: "63px",
            width: "1383px",
            height: "88px",
            fontSize: "27px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "55px",
              backgroundColor: "#fff",
              border: "1px solid #000",
              boxSizing: "border-box",
              width: "1300px",
              height: "88px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 20px)",
              left: "46px",
              display: "inline-block",
              width: "520px",
            }}
          >
            Transport Layer
          </div>
          <img
            style={{
              position: "absolute",
              height: "13.52%",
              width: "1.3%",
              top: "43.18%",
              right: "4.7%",
              bottom: "43.3%",
              left: "90%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src={vector}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "1985px",
            left: "63px",
            width: "1383px",
            height: "88px",
            fontSize: "27px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "55px",
              backgroundColor: "#fff",
              border: "1px solid #000",
              boxSizing: "border-box",
              width: "1300px",
              height: "88px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 20px)",
              left: "46px",
              display: "inline-block",
              width: "520px",
            }}
          >
            Network Layer
          </div>
          <img
            style={{
              position: "absolute",
              height: "13.52%",
              width: "1.3%",
              top: "43.18%",
              right: "4.7%",
              bottom: "43.3%",
              left: "90%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src={vector}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "2104px",
            left: "63px",
            width: "1383px",
            height: "88px",
            fontSize: "27px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "55px",
              backgroundColor: "#fff",
              border: "1px solid #000",
              boxSizing: "border-box",
              width: "1300px",
              height: "88px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 20px)",
              left: "46px",
              display: "inline-block",
              width: "520px",
            }}
          >
            Link-layer
          </div>
          <img
            style={{
              position: "absolute",
              height: "13.52%",
              width: "1.3%",
              top: "43.18%",
              right: "4.7%",
              bottom: "43.3%",
              left: "90%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src={vector}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "1366px",
            left: "149px",
            color: "rgba(0, 0, 0, 0.83)",
          }}
        >
          Lecture 1 : Introduction to Computer Networks
        </div>
        <div
          style={{
            position: "absolute",
            top: "1418px",
            left: "149px",
            color: "rgba(0, 0, 0, 0.83)",
          }}
        >
          Lecture 2 : Packet and circuit switching
        </div>
        <div
          style={{
            position: "absolute",
            top: "1473px",
            left: "149px",
            color: "rgba(0, 0, 0, 0.83)",
            display: "inline-block",
            width: "1050px",
          }}
        >
          Lecture 3 : OSI Reference Model and TCP/IP Protocol Suite
        </div>
        <div
          style={{
            position: "absolute",
            top: "1528px",
            left: "149px",
            color: "rgba(0, 0, 0, 0.83)",
          }}
        >
          Lecture 4 : Protocol Layers and Service Model
        </div>
        <div
          style={{
            position: "absolute",
            top: "1583px",
            left: "149px",
            color: "rgba(0, 0, 0, 0.83)",
            display: "inline-block",
            width: "1050px",
          }}
        >
          Lecture 5 : Delay and throughput in Packet-switched Network
        </div>
        <div
          style={{
            position: "absolute",
            top: "1638px",
            left: "149px",
            color: "rgba(0, 0, 0, 0.83)",
          }}
        >
          Activity : Quiz 1
        </div>
        <div
          style={{
            position: "absolute",
            top: "2326px",
            left: "658px",
            width: "204.99px",
            height: "47px",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "21px",
              backgroundColor: "#0e538c",
              width: "204.99px",
              height: "47px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 14.5px)",
              left: "calc(50% - 51.49px)",
            }}
            onClick={handleEnroll}
          >
            Enroll Now
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            height: "1.65%",
            width: "100.07%",
            top: "95.23%",
            right: "-0.07%",
            bottom: "3.12%",
            left: "0%",
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
  
  export default CourseSelection3Dup;
import logo1 from "../../../assets/logo1.png";
import Ellipse from "../../../assets/Ellipse 9.png";
import daa from "../../../assets/daa.png";
import se from "../../../assets/se.png";
import cn from "../../../assets/cn.png";
import ai from "../../../assets/ai.png";
import vector1 from "../../../assets/vector1.svg";
import vector from "../../../assets/vector.svg";
import { useNavigate } from "react-router-dom";
const Dashboard2Dup = () => {
  const navigate=useNavigate();
    const handleProgress=()=>{
        navigate('/dash');
    }
    const handleHome=()=>{
        navigate('/dashboard');
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

      <div
        style={{
          position: "absolute",
          top: "106px",
          left: "0px",
          backgroundColor: "#cce9ff",
          width: "1520px",
          height: "208px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "252px",
          left: "64px",
          fontSize: "32px",
          fontWeight: "500",
          fontFamily: "Montserrat",
          color: "#005296",
        }}
      >
        Welcome Back !
      </div>
      <div style={{ position: "absolute", top: "324px", left: "68px" }} onClick={handleHome}>
        Home
      </div>
      <div style={{ position: "absolute", top: "324px", left: "204px" }} onClick={handleProgress}>
        In Progress
      </div>
      <div style={{ position: "absolute", top: "324px", left: "403px" }}>
        Completed
      </div>
      <div
        style={{
          position: "absolute",
          top: "360.5px",
          left: "212.5px",
          borderTop: "3px solid #0e538c",
          boxSizing: "border-box",
          width: "91px",
          height: "3px",
        }}
      />
      <div style={{ position: "absolute", top: "118px", left: "1362px" }}>
        3rd Year
      </div>
      <div
        style={{
          position: "absolute",
          top: "148px",
          left: "1317px",
          fontWeight: "300",
          color: "#0060ff",
        }}
      >
        Change Year
      </div>
      <div
        style={{
          position: "absolute",
          top: "461px",
          left: "324px",
          width: "247px",
          height: "315px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "15px",
            backgroundColor: "#fff",
            border: "2px solid rgba(0, 0, 0, 0.22)",
            boxSizing: "border-box",
            width: "247px",
            height: "315px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "9.88px",
            left: "9px",
            borderRadius: "15px",
            width: "230px",
            height: "143.78px",
            objectFit: "cover",
          }}
          alt=""
          src={daa}
        />
        <div
          style={{
            position: "absolute",
            top: "166.51px",
            left: "19px",
            fontSize: "20px",
            display: "inline-block",
            width: "204px",
            height: "65.85px",
          }}
        >
          Design and Analysis of Algorithms
        </div>
        <div
          style={{
            position: "absolute",
            top: "293px",
            left: "31px",
            borderRadius: "50%",
            backgroundColor: "#cb0000",
            width: "7px",
            height: "7px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "229.5px",
            left: "calc(50% - 63.5px)",
            fontWeight: "300",
            color: "rgba(0, 0, 0, 0.71)",
            display: "inline-block",
            width: "127px",
            height: "18.35px",
          }}
        >
          Instructor : Ash Mattle
        </div>
        <div
          style={{
            position: "absolute",
            top: "287px",
            left: "calc(50% - 77.5px)",
            textAlign: "left",
          }}
        >
          Live class starts in 19 mins
        </div>
        <div
          style={{
            position: "absolute",
            top: "258px",
            left: "10px",
            width: "226px",
            height: "23px",
            textAlign: "left",
            fontSize: "14px",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "18px",
              border: "1px solid rgba(0, 0, 0, 0.22)",
              boxSizing: "border-box",
              width: "226px",
              height: "23px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "18px",
              backgroundColor: "#0e538c",
              width: "138px",
              height: "23px",
            }}
          />
          <div style={{ position: "absolute", top: "1px", left: "99px" }}>
            53%
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "461px",
          left: "593px",
          width: "247px",
          height: "315px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "15px",
            backgroundColor: "#fff",
            border: "2px solid rgba(0, 0, 0, 0.22)",
            boxSizing: "border-box",
            width: "247px",
            height: "315px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "9px",
            left: "9px",
            borderRadius: "15px",
            width: "230px",
            height: "145px",
            objectFit: "cover",
          }}
          alt=""
          src={se}
        />
        <div
          style={{
            position: "absolute",
            top: "166.51px",
            left: "19px",
            fontSize: "20px",
            display: "inline-block",
            width: "204px",
            height: "65.85px",
          }}
        >
          Software Engineering
        </div>
        <div
          style={{
            position: "absolute",
            top: "230px",
            left: "calc(50% - 81.5px)",
            fontWeight: "300",
            color: "rgba(0, 0, 0, 0.71)",
            display: "inline-block",
            width: "163px",
            height: "18px",
          }}
        >
          Instructor : Sakshi Talwar
        </div>
        <div
          style={{
            position: "absolute",
            top: "258px",
            left: "10px",
            width: "226px",
            height: "23px",
            textAlign: "left",
            fontSize: "14px",
            color: "#0e538c",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "18px",
              border: "1px solid rgba(0, 0, 0, 0.22)",
              boxSizing: "border-box",
              width: "226px",
              height: "23px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "18px",
              backgroundColor: "#0e538c",
              width: "66px",
              height: "23px",
            }}
          />
          <div style={{ position: "absolute", top: "1px", left: "99px" }}>
            21%
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "287px",
            left: "calc(50% - 72.5px)",
            textAlign: "left",
          }}
        >
          Live class starts at 20:00
        </div>
        <div
          style={{
            position: "absolute",
            top: "293px",
            left: "35px",
            borderRadius: "50%",
            backgroundColor: "#cb0000",
            width: "7px",
            height: "7px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "897px",
          left: "55px",
          width: "247px",
          height: "315px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "15px",
            backgroundColor: "#fff",
            border: "2px solid rgba(0, 0, 0, 0.22)",
            boxSizing: "border-box",
            width: "247px",
            height: "315px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "9px",
            left: "9px",
            borderRadius: "15px",
            width: "230px",
            height: "145px",
            objectFit: "cover",
          }}
          alt=""
          src={ai}
        />
        <div
          style={{
            position: "absolute",
            top: "166.51px",
            left: "19px",
            fontSize: "20px",
            display: "inline-block",
            width: "204px",
            height: "65.85px",
          }}
        >
          Artificial Intelligence
        </div>
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "calc(50% - 62.5px)",
            fontWeight: "300",
            color: "rgba(0, 0, 0, 0.71)",
            display: "inline-block",
            width: "125px",
            height: "18px",
          }}
        >
          Instructor : JP Nadda
        </div>
        <div
          style={{
            position: "absolute",
            top: "258px",
            left: "10px",
            width: "226px",
            height: "23px",
            textAlign: "left",
            fontSize: "14px",
            color: "#0e538c",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "18px",
              border: "1px solid rgba(0, 0, 0, 0.22)",
              boxSizing: "border-box",
              width: "226px",
              height: "23px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "18px",
              backgroundColor: "#0e538c",
              width: "85px",
              height: "23px",
            }}
          />
          <div style={{ position: "absolute", top: "1px", left: "99px" }}>
            38%
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "287px",
            left: "calc(50% - 67.5px)",
            textAlign: "left",
          }}
        >
          New Lecture Uploaded
        </div>
        <div
          style={{
            position: "absolute",
            top: "293px",
            left: "41px",
            borderRadius: "50%",
            backgroundColor: "#cb0000",
            width: "7px",
            height: "7px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "411px",
          left: "55px",
          fontSize: "27px",
        }}
      >
        Core Subjects
      </div>
      <div
        style={{
          position: "absolute",
          top: "842px",
          left: "55px",
          fontSize: "27px",
        }}
      >
        Elective Subjects
      </div>
      <div
        style={{
          position: "absolute",
          top: "1278px",
          left: "55px",
          fontSize: "26px",
        }}
      >
        Task Calendar
      </div>
      <div
        style={{
          position: "absolute",
          top: "1356px",
          left: "calc(50% - 676px)",
          width: "1352.48px",
          height: "194px",
          fontSize: "26px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "calc(50% - 539.41px)",
            width: "1087px",
            height: "194px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "109px",
              height: "194px",
              fontSize: "27px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "42px",
                border: "2px solid #0e538c",
                boxSizing: "border-box",
                width: "109px",
                height: "194px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "calc(50% - 31.5px)",
              }}
            >
              Wed
            </div>
            <div
              style={{
                position: "absolute",
                top: "77px",
                left: "calc(50% - 12.5px)",
              }}
            >
              19
            </div>
            <div
              style={{
                position: "absolute",
                top: "110px",
                left: "calc(50% - 24.5px)",
              }}
            >
              Sep
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "163px",
              width: "109px",
              height: "194px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "42px",
                border: "2px solid #0e538c",
                boxSizing: "border-box",
                width: "109px",
                height: "194px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "calc(50% - 25.5px)",
                fontSize: "27px",
              }}
            >
              Thu
            </div>
            <div
              style={{
                position: "absolute",
                top: "77px",
                left: "calc(50% - 15.5px)",
              }}
            >
              20
            </div>
            <div
              style={{
                position: "absolute",
                top: "110px",
                left: "calc(50% - 24.5px)",
              }}
            >
              Sep
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "326px",
              width: "109px",
              height: "194px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "42px",
                backgroundColor: "#cce9ff",
                border: "2px solid #0e538c",
                boxSizing: "border-box",
                width: "109px",
                height: "194px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "calc(50% - 15.5px)",
                fontSize: "27px",
              }}
            >
              Fri
            </div>
            <div
              style={{
                position: "absolute",
                top: "77px",
                left: "calc(50% - 11.5px)",
              }}
            >
              21
            </div>
            <div
              style={{
                position: "absolute",
                top: "110px",
                left: "calc(50% - 24.5px)",
              }}
            >
              Sep
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "489px",
              width: "109px",
              height: "194px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "42px",
                border: "2px solid #0e538c",
                boxSizing: "border-box",
                width: "109px",
                height: "194px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "calc(50% - 22.5px)",
                fontSize: "27px",
              }}
            >
              Sat
            </div>
            <div
              style={{
                position: "absolute",
                top: "77px",
                left: "calc(50% - 14.5px)",
              }}
            >
              22
            </div>
            <div
              style={{
                position: "absolute",
                top: "110px",
                left: "calc(50% - 24.5px)",
              }}
            >
              Sep
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "652px",
              width: "109px",
              height: "194px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "42px",
                border: "2px solid #0e538c",
                boxSizing: "border-box",
                width: "109px",
                height: "194px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "calc(50% - 25.5px)",
                fontSize: "27px",
              }}
            >
              Sun
            </div>
            <div
              style={{
                position: "absolute",
                top: "77px",
                left: "calc(50% - 15.5px)",
              }}
            >
              23
            </div>
            <div
              style={{
                position: "absolute",
                top: "110px",
                left: "calc(50% - 24.5px)",
              }}
            >
              Sep
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "815px",
              width: "109px",
              height: "194px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "42px",
                border: "2px solid #0e538c",
                boxSizing: "border-box",
                width: "109px",
                height: "194px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "calc(50% - 29.5px)",
                fontSize: "27px",
              }}
            >
              Mon
            </div>
            <div
              style={{
                position: "absolute",
                top: "77px",
                left: "calc(50% - 15.5px)",
              }}
            >
              24
            </div>
            <div
              style={{
                position: "absolute",
                top: "110px",
                left: "calc(50% - 24.5px)",
              }}
            >
              Sep
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "978px",
              width: "109px",
              height: "194px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "42px",
                border: "2px solid #0e538c",
                boxSizing: "border-box",
                width: "109px",
                height: "194px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "calc(50% - 24.5px)",
                fontSize: "27px",
              }}
            >
              Tue
            </div>
            <div
              style={{
                position: "absolute",
                top: "77px",
                left: "calc(50% - 15.5px)",
              }}
            >
              25
            </div>
            <div
              style={{
                position: "absolute",
                top: "110px",
                left: "calc(50% - 24.5px)",
              }}
            >
              Sep
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "6px",
              left: "742px",
              borderRadius: "50%",
              backgroundColor: "#0e538c",
              width: "23px",
              height: "23px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "6px",
              left: "1069px",
              borderRadius: "50%",
              backgroundColor: "#0e538c",
              width: "23px",
              height: "23px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "253px",
              borderRadius: "50%",
              backgroundColor: "#cb0000",
              width: "23px",
              height: "23px",
            }}
          />
        </div>
        <img
          style={{
            position: "absolute",
            height: "19.07%",
            width: "1.59%",
            top: "41.24%",
            right: "98.41%",
            bottom: "39.69%",
            left: "0%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src={vector}
        />
        <img
          style={{
            position: "absolute",
            height: "19.07%",
            width: "1.59%",
            top: "39.69%",
            right: "0%",
            bottom: "41.24%",
            left: "98.41%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src={vector1}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1688px",
          left: "75px",
          borderRadius: "45px",
          backgroundColor: "#cce9ff",
          width: "1372px",
          height: "543px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "1785px",
          left: "157px",
          width: "1255.8px",
          height: "50px",
          fontSize: "33px",
        }}
      >
        <div style={{ position: "absolute", top: "0px", left: "0px" }}>
          19:00
        </div>
        <div
          style={{
            position: "absolute",
            top: "6px",
            left: "161px",
            fontSize: "26px",
            display: "inline-block",
            width: "788px",
          }}
        >
          Design and Analysis of Algorithms live class by Ash Mattle
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "1075px",
            width: "180.8px",
            height: "50px",
            fontSize: "21px",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "17px",
              backgroundColor: "#0e538c",
              width: "180.8px",
              height: "50px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 16px)",
              left: "calc(50% - 52.4px)",
              display: "inline-block",
              width: "110.55px",
            }}
          >
            Join Class
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "1919px",
          left: "157px",
          width: "1255.8px",
          height: "50px",
          fontSize: "33px",
        }}
      >
        <div style={{ position: "absolute", top: "0px", left: "0px" }}>
          20:00
        </div>
        <div
          style={{
            position: "absolute",
            top: "5px",
            left: "161px",
            fontSize: "26px",
            display: "inline-block",
            width: "693px",
          }}
        >
          Software Engineering live class by Sakshi Talwar
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "1075px",
            width: "180.8px",
            height: "50px",
            fontSize: "21px",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "17px",
              backgroundColor: "#0e538c",
              width: "180.8px",
              height: "50px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 16px)",
              left: "calc(50% - 52.4px)",
              display: "inline-block",
              width: "110.55px",
            }}
          >
            Join Class
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "1875.5px",
          left: "140.5px",
          borderTop: "1px dashed #000",
          boxSizing: "border-box",
          width: "1251px",
          height: "1px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "461px",
          left: "55px",
          width: "247px",
          height: "315px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "15px",
            backgroundColor: "#fff",
            border: "2px solid rgba(0, 0, 0, 0.22)",
            boxSizing: "border-box",
            width: "247px",
            height: "315px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "9.88px",
            left: "9px",
            borderRadius: "15px",
            width: "230px",
            height: "143.78px",
            objectFit: "cover",
          }}
          alt=""
          src={cn}
        />
        <div
          style={{
            position: "absolute",
            top: "174.51px",
            left: "19px",
            fontSize: "20px",
            display: "inline-block",
            width: "204px",
            height: "32.93px",
          }}
        >
          Computer Networks
        </div>
        <div
          style={{
            position: "absolute",
            top: "212px",
            left: "calc(50% - 81.5px)",
            fontWeight: "300",
            color: "rgba(0, 0, 0, 0.71)",
            display: "inline-block",
            width: "163px",
            height: "18px",
          }}
        >
          Instructor : Garry Lawrence
        </div>
        <div
          style={{
            position: "absolute",
            top: "257px",
            left: "calc(50% - 113.5px)",
            width: "226px",
            height: "48px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "30px",
              left: "calc(50% - 71px)",
            }}
          >
            Live class starts in 1 min
          </div>
          <div
            style={{
              position: "absolute",
              top: "36px",
              left: "25px",
              borderRadius: "50%",
              backgroundColor: "#cb0000",
              width: "7px",
              height: "7px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "226px",
              height: "23px",
              fontSize: "14px",
              color: "#0e538c",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "18px",
                border: "1px solid rgba(0, 0, 0, 0.22)",
                boxSizing: "border-box",
                width: "226px",
                height: "23px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "18px",
                backgroundColor: "#0e538c",
                width: "88px",
                height: "23px",
              }}
            />
            <div style={{ position: "absolute", top: "1px", left: "99px" }}>
              39%
            </div>
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
            left: "1384px",
            borderRadius: "50%",
            width: "62px",
            height: "62px",
            objectFit: "cover",
          }}
          alt=""
          src={Ellipse}
        />
        </div> 
      <div
        style={{
          position: "absolute",
          height: "1.74%",
          width: "100.07%",
          top: "95.72%",
          right: "-0.07%",
          bottom: "2.55%",
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

export default Dashboard2Dup;
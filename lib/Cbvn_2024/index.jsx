import Game from "./game";
import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AppContext } from "../../../App";
// import Util from "../../../@util";
// import moment from 'moment';

const tuborgConfig = {
  token:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IiIsIkVtcGxveWVlSWQiOiI2NzIwIiwiVXNlck5hbWUiOiJ0dWJvcmdvdF9kZW1vIiwiQ2FtcGFpZ25JZCI6IjExOCIsIlBvc2l0aW9uIjoiIiwiUm9sZUlkIjoiMSIsIkVtcGxveWVlQ29kZSI6InR1Ym9yZ290X2RlbW8iLCJFbXBsb3llZU5hbWUiOiJOaMOibiB2acOqbiBUdWJvcmcgT2ZmdHJhZGUgZGVtbyIsIiI6IiIsImZ1bGxOYW1lIjoiTmjDom4gdmnDqm4gVHVib3JnIE9mZnRyYWRlIGRlbW8iLCJDYW1wYWlnbk5hbWUiOiJUdWJvcmcgT2ZmdHJhZGUiLCJDYW1wYWlnblR5cGUiOiJldmVudCIsIlJvbGVzIjoiIiwianRpIjoiM2YyMTFmMmEtYjNlNi00YjY1LTg4YWMtMWUyMzdiMjI1MWVlIiwiZXhwIjoxNjg4MTE5NzQ0LCJpc3MiOiJodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbSIsImF1ZCI6Imh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tIn0.-qYuvTXi--8EGKNSNIctqYmZKxX3heZgqLjlc2QfSBw",
  campaignId: 118,
};

export const CBVNLuckyDraw2024 = ({}) => {
  //   const { info } = useContext(AppContext);
  // const navigate = useNavigate();
  const params = new URLSearchParams(
    "?schemes=&accept_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IiIsIkVtcGxveWVlSWQiOiIxNTA5MyIsIlVzZXJOYW1lIjoibHVja3lfZGVtbyIsIkNhbXBhaWduSWQiOiIyMDYiLCJQb3NpdGlvbiI6IiIsIlJvbGVJZCI6IjEiLCJFbXBsb3llZUNvZGUiOiJsdWNreV9kZW1vIiwiRW1wbG95ZWVOYW1lIjoiQ2FybHNiZXJnIERlbW8iLCIiOiIiLCJmdWxsTmFtZSI6IkNhcmxzYmVyZyBEZW1vIiwiQ2FtcGFpZ25OYW1lIjoiIiwiQ2FtcGFpZ25UeXBlIjoiIiwiUm9sZXMiOiIiLCJqdGkiOiI4YzQ2YThhOS0yZDQ4LTQ2Y2MtYjAyMC04MjJjY2EzZWFjMjYiLCJleHAiOjE3MTYyNTk5OTcsImlzcyI6Imh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20ifQ.Ih3Vsb8_nyus80OWORrgltiRIMeBf_96uVwlBQaOIYk&campaignId=206&giftCode=NC52VT60&provinceId=79&channelId=865"
  );

  const [readCodeMode, setReadCodeMode] = useState(false); // null | true | false

  const [isEnterCodeMode, setEnterCodeMode] = useState(true);
  const [gifts, setGifts] = useState(null);
  const [viewGiftForPC, setViewGiftForPC] = useState(false);
  const [giftCode, setGiftCode] = useState(null);
  const [campaignId, setCampaignId] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [text, setText] = useState("");
  const [message, setMessage] = useState(null);

  const allGiftRef = useRef([]);

  useEffect(() => {
    axios.defaults.baseURL = "https://advancesystem-api.creasia.vn/";
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.common["Content-Type"] = "application/json";
  }, []);

  useEffect(() => {
    //let quantity = params.get("noOfWheel");
    let accept_token = params.get("accept_token");
    let giftCode = params.get("giftCode");
    let campaignId = params.get("campaignId");

    if (accept_token) {
      axios.defaults.headers.common.Authorization = "Bearer " + accept_token;
      setCampaignId(campaignId == "" ? null : campaignId - 0);
      setGiftCode(giftCode);
      //setQuantity(quantity);
    }
  }, []);

  useEffect(() => {
    if (campaignId) {
      _loadGifts(campaignId);
      onLoadNoofWheel(campaignId, params.get("giftCode"));
    }
  }, [campaignId]);

  const _loadGifts = (campaignId) => {
    let provinceId = params.get("provinceId");
    let channelId = params.get("channelId");
    let giftCode = params.get("giftCode");
    axios
      .get("/api/luckywheel/get_luckywheels", {
        params: {
          orderCode: giftCode,
          campaignId: campaignId - 0,
          provinceId: provinceId == "null" ? null : provinceId - 0,
          channelId: channelId == "null" ? null : channelId - 0,
        },
      })
      .then(({ data: res }) => {
        if (res && JSON.stringify(res) != JSON.stringify(gifts)) {
          setGifts(res);
        }
      });
  };

  const onDrawDone = async () =>
    axios
      .get("api/sellout/get_selloutgift", {
        params: {
          orderCode: giftCode,
          campaignId: campaignId,
          channelId:
            params.get("channelId") == "null"
              ? null
              : params.get("channelId") - 0,
          provinceId:
            params.get("provinceId") == "null"
              ? null
              : params.get("provinceId") - 0,
        },
      })
      .then(({ data: res }) => {
        res.forEach((data) => {
          //   Util.sendData({
          //     type: "RESULT",
          //     data: {
          //       giftId: data.giftId,
          //       giftIndex: 0,
          //       giftCode: data.giftCode,
          //       giftName: data.giftName,
          //       giftWinImage: data.giftWinImage,
          //       prizeWinningDay: data.createdDate,
          //       isWin: true,
          //     },
          //     message: "Phần quà",
          //   });
        });
        // Util.sendData({
        //   type: "END",
        //   data: null,
        //   message: "Đã kết thúc",
        // });
      });

  const onLoadNoofWheel = (campaignId, orderCode) => {
    axios
      .get("api/luckywheel/get_luckywheel_noofwheel", {
        params: {
          orderCode: orderCode,
          campaignId: campaignId,
        },
      })
      .then(({ data: noOfWheel }) => {
        if (noOfWheel) {
          if (noOfWheel.totalGiftPlan == 0) {
            setMessage("Mã không đúng hoặc đã hết quà!");
            return;
          }
          if (noOfWheel.noOfWheel == noOfWheel.noOfWheelUsed) {
            setMessage(
              "Bạn đã hết lượt chơi\nCảm ơn bạn đã tham gia chương trình"
            );
            return;
          }
          setQuantity(noOfWheel.noOfWheel - noOfWheel.noOfWheelUsed);
        }
        // _forceUpdate();
      });
  };
  const goHome = () => {
    // Util.sendData({
    //   type: "END",
    //   data: null,
    //   message: "Đã kết thúc",
    // });
  };

  const onGetResult = async (orderCode) => {
    let provinceId = params.get("provinceId");
    let channelId = params.get("channelId");
    return axios
      .get("/api/luckywheel/wheel_spin", {
        params: {
          orderCode,
          campaignId: campaignId,
          provinceId: provinceId == "null" ? null : provinceId - 0,
          channelId: channelId == "null" ? null : channelId - 0,
        },
      })
      .then(({ data: res, status }) => {
        if (status == 200) {
          allGiftRef.current.push(res);
          //   Util.sendData({
          //     type: "RESULT",
          //     data: res,
          //     message: "Phần quà",
          //   });
          return res;
        }
        // Util.sendData({
        //   type: "RESULT-NONE",
        //   data: res,
        //   message: "Hết quà",
        // });
      });
  };
  const isInPC = window.screen.width > 1024;
  return (
    <div
      className={
        "bg-center bg-cover flex h-screen w-full overflow-x-hidden overflow-y-auto  bg-cbvn2024"
      }
    >
      <div className="flex-1">
        a
        <Game
          campaignId={campaignId}
          quantity={quantity}
          gifts={gifts}
          goHome={goHome}
          onGetResult={() => onGetResult(giftCode)}
        />
      </div>
    </div>
  );
};

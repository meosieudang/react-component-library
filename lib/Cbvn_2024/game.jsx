import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import bg_result from "../../dist/assets/cbvn_2024/bg_result.png";
import pointer from "../../dist/assets/Tuborg/pointer.png";

import { CoreWheel } from "./WinWheel";

let circleRadius = 170;
let circleBtnRadius = 50;
let imageSpaceTop = 90;
let bgColors = ["#7eba57", "#27539e"];
let circle = "#dfdfdf";

let stopAt = 0;
let wheelSpinning = false;
let leafs = [];
let tmpCount = 0;
let currentLeaf = null;

const sW = Math.min(500, window.innerWidth);
const needle = document.createElement("img");
const btnStart = document.createElement("img");

const getPlatform = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return "Android";
  } else if (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  ) {
    return "iOS";
  }
  return "Other";
};

const Game = ({
  campaignId,
  gifts,
  quantity,
  goHome,
  onGetResult = () => new Promise(),
}) => {
  const canvasRef = useRef(null);
  const [message, setMessage] = useState(null);
  const [spinCount, setSpinCount] = useState(0);
  const winwheelRef = useRef(null);
  const resultRef = useRef([]);
  const sound = useRef({
    win: new Audio(WIN_SOUND),
    tick: new Audio(SOUND),
    platform: "iOS",
  });

  useEffect(() => {
    tmpCount = quantity ?? 0;
    let event = null;
    if (gifts) {
      setSpinCount(+tmpCount);
      event = initWheel(gifts);
    }
    // sound.current.platform = getPlatform();
  }, [gifts]);
  useEffect(() => {
    tmpCount = quantity ?? 0;
    if (gifts) {
      setSpinCount(+tmpCount);
    }
  }, [quantity]);
  const initWheel = async (gifts) => {
    leafs = [];
    for (let i = 0; i < gifts.length; i++) {
      try {
        let url = new URL(
          gifts[i]?.giftIcon,
          "https://advancesystem.creasia.vn/"
        );
        let image = document.createElement("img");
        await loadImage(image, url);
        leafs.push({
          image: image,
          color: gifts[i] ? gifts[i]?.giftBackgroundColor : bgColors[i % 2],
          title: gifts[i].giftName,
        });
      } catch (e) {
        console.log(gifts[i]);
        // alert(e);
      }
    }
    await loadImage(needle, pointer);
    const wheel = new CoreWheel(
      {
        canvas: canvasRef.current,
        outerRadius: circleRadius,
        innerRadius: circleBtnRadius,
        centerX: sW / 2,
        centerY: sW / 2,
        numSegments: gifts.length,
        drawMode: "segmentImage",
        textFontFamily: "Roboto",
        textFontSize: 10,
        textFontWeight: "bold",
        textOrientation: "curved",
        textAlignment: "outer",
        textDirection: "reversed",
        textMargin: 15,
        textFillStyle: "#000",
        // 'textStrokeStyle': "#fff",
        // 'textLineWidth': 4,6
        // 'fillStyle': 'silver',
        strokeStyle: "#fff0",
        // lineWidth: 0,
        clearTheCanvas: true,
        imageOverlay: true,
        // drawText: true,
        segments: leafs.map((v, i) => ({
          index: i,
          lineWidth: 0,
          text: v.title,
          fillStyle: v.color,
          imageDirection: "S",
          imageSpaceTop: imageSpaceTop,
          imgData: v.image,
          image: v.image.src,
        })),
        pin: {
          imgData: needle,
          x: sW / 2,
          y: sW / 2 + circleRadius - needle.height / 2,
        },
        pointerAngle: 180,
        // 'pointerGuide':
        // {
        //     'display': true,
        // },
        animation: {
          duration: 5,
          spins: 8,
          callbackFinished: onStop,
          callbackBefore: () => {
            let leaf = winwheelRef.current.getIndicatedSegment();
            if (currentLeaf != leaf) {
              currentLeaf = leaf;
              // if (sound.current.platform != "iOS") {
              //     sound.current.tick.pause();
              //     sound.current.tick.currentTime = 0;
              //     sound.current.tick.play();
              // }
            }
          },
        },
        drawButton: drawBtnStart,
        drawBG: drawBg,
      },
      true
    );

    winwheelRef.current = wheel;
  };

  const onStart = (event) => {
    var x = event.nativeEvent.offsetX,
      y = event.nativeEvent.offsetY;
    if (wheelSpinning == false) {
      if (
        x >= sW / 2 - circleBtnRadius &&
        x <= sW / 2 + circleBtnRadius &&
        y >= sW / 2 - circleBtnRadius &&
        y <= sW / 2 + circleBtnRadius
      ) {
        setMessage(null);
        wheelSpinning = true;
        onGetResult()
          .then((val) => {
            if (!!val && val?.giftIndex) {
              const wheel = winwheelRef.current;
              resultRef.current.push(val);

              stopAt = val.giftIndex - 1;

              var segmentSize = 360 / leafs.length;
              var stopAngle =
                stopAt * segmentSize + randomRange(5, segmentSize - 5);
              wheel.animation.stopAngle = stopAngle;
              wheel.startAnimation();
            } else {
              goHome();
            }
          })
          .catch(() => {
            wheelSpinning = false;
          });
      }
    }
  };

  const randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const loadImage = (imgObject, url) =>
    new Promise((res, rej) => {
      imgObject.onload = () => {
        res();
      };
      imgObject.onerror = () => {
        rej();
      };
      imgObject.src = url;
    });

  const onStop = ({ index, text, image }) => {
    setTimeout(() => {
      const lastGift = resultRef.current[resultRef.current.length - 1];
      wheelSpinning = false;
      setMessage({
        giftId: lastGift.giftId,
        message: lastGift.giftName,
        giftIndex: lastGift.giftIndex,
        image: lastGift.giftWinImage,
        date: lastGift.prizeWinningDay,
        code: lastGift.giftCode,
      });
      setSpinCount((prev) => prev - 1);
      sound.current.win.currentTime = 0;
      sound.current.win.play();
    }, 500);
  };
  const drawBg = (canvas, ctx) => {
    let scale = circleRadius;
    ctx.fillStyle = circle;
    ctx.beginPath();
    ctx.moveTo(sW / 2, sW / 2);
    ctx.arc(sW / 2, sW / 2, scale + 8, 0, Math.PI * 2);
    ctx.fill();
    switch (campaignId) {
      case 170:
        ctx.fillStyle = "#8ac748";
        break;
      default:
        ctx.fillStyle = "#27539e";
        break;
    }
    ctx.beginPath();
    ctx.moveTo(sW / 2, sW / 2);
    ctx.arc(sW / 2, sW / 2, scale + 1, 0, Math.PI * 2);
    ctx.fill();
  };
  const drawBtnStart = (canvas, ctx) => {
    let scale = 0.8;
    let w = btnStart.width * scale;
    let h = btnStart.height * scale;
    ctx.save();
    ctx.translate(sW / 2, sW / 2);
    // ctx.drawImage(btnStart, - w / 2, - h / 2, w, h);

    ctx.fillStyle = "#7eba57";
    ctx.beginPath();
    ctx.arc(0, 0, circleBtnRadius + 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#056A37";

    ctx.beginPath();
    ctx.arc(0, 0, circleBtnRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = `bold 17px Roboto`;
    ctx.textAlign = "center";
    if (campaignId == 170) {
      ctx.strokeStyle = "#3f3f3f";
    } else {
      ctx.strokeStyle = "#27539e";
    }
    ctx.lineWidth = 3;

    if (wheelSpinning) {
      ctx.strokeText("ĐANG", 0, -5);
      ctx.strokeText("QUAY", 0, 19);
      ctx.fillStyle = "#fff";
      ctx.fillText("ĐANG", 0, -5);
      ctx.fillText("QUAY", 0, 19);
    } else {
      ctx.strokeText("CHẠM", 0, -5);
      ctx.strokeText("ĐỂ QUAY", 0, 19);
      ctx.fillStyle = "#fff";
      ctx.fillText("CHẠM", 0, -5);
      ctx.fillText("ĐỂ QUAY", 0, 19);
    }
    ctx.restore();
  };

  const onReset = () => {
    if (spinCount > 0) {
      setMessage(null);
      winwheelRef.current.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
      winwheelRef.current.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
      winwheelRef.current.draw();
    } else {
      goHome();
    }
  };

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center">
      <div
        className="pt-6 flex flex-col items-center justify-center relative z-10"
        style={{ width: sW }}
      >
        <>
          {/* <img
            src={logo}
            className="h-16"
            alt=""
            style={{ marginTop: -40, height: 140 }}
          />
          <img src={vqmm} className="h-28" alt="" /> */}
          <div className="h-16" />
          <div className="h-28" />
          <span
            className=" text-white text-2xl uppercase mt-3"
            style={{
              WebkitTextStroke: "0.5px #ffffff",
              textShadow:
                "1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #7eba47, -1px 1px 0 #7eba47, 1px 2px 4px #000",
            }}
          >
            vòng quay may mắn
          </span>
          <p
            className="absolute right-2 top-1 text-xl font-roboto font-bold"
            style={{
              WebkitTextStroke: "0.5px #ffffff",
              textShadow:
                "1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 0px -1px 0 #ffffff, -1px 1px 0 #ffffff,  1px 2px 4px #000",
            }}
          >
            {quantity != spinCount && "Còn"} {spinCount} lần quay
          </p>
        </>
      </div>

      <div className="flex flex-col items-center h-screen">
        {message && (
          <div
            className={"flex flex-col items-center z-10 sm:scale-110 "}
            style={{ width: sW }}
          >
            <div className="relative">
              <img src={bg_result} width={sW * 0.6} height={sW * 0.6} alt="" />
              <div className="absolute left-1/2 -top-14 translate-y-1/2 -translate-x-1/2 w-[70%]">
                <img
                  src={
                    new URL(message.image, "https://advancesystem.creasia.vn/")
                  }
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            {/* <div className="text-center text-[20px] uppercase font-black mt-[3vh] tracking-tight relative flex flex-col items-center">
              <img
                src={imgD[message?.giftId ?? 0]}
                alt=""
                style={{ width: "60%" }}
              />
            </div> */}
            <p className="text-center text-[24px] uppercase font-black font-roboto leading-7 mt-2 tracking-tight">
              <span
                className=" text-white text"
                style={{
                  WebkitTextStroke: "0.5px #ffffff",
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 2px 4px #000",
                }}
              >
                Chúc mừng bạn đã trúng
              </span>
              <br />
              <div className="text-center text-[20px] uppercase font-black mt-[3vh] tracking-tight relative flex flex-col items-center">
                <span
                  className=" text-[#fff]"
                  style={{
                    WebkitTextStroke: "0.5px #fff",
                    textShadow:
                      "1px 1px 0 #000, -1px -1px 0 #000, 0px -1px 0 #000, -1px 1px 0 #000,  1px 2px 4px #000",
                  }}
                >
                  {message.message}
                </span>
              </div>
              <br />
            </p>

            <div
              className="text-white my-1 px-8 py-0.5 border-2 border-dashed border-white"
              style={{
                WebkitTextStroke: "0.5px #ffffff",
                textShadow:
                  "1px 1px 0 #000, -1px -1px 0 #000, 0px -1px 0 #000, -1px 1px 0 #000,  1px 2px 4px #000",
              }}
            >
              <b>{message.code}</b> -{" "}
              <i>{moment(message.date).format("DD/MM/YYYY HH:mm")}</i>
            </div>
            <button
              className="mt-5 uppercase font-bold text-[#27539e] bg-white border-[#7eba57] border-2 p-2 rounded-lg shadow-xl"
              onClick={onReset}
            >
              {spinCount > 0 ? "Quay tiếp" : "Hoàn tất"}
            </button>
          </div>
        )}
        <div className={message ? "hidden relative" : "relative z-0 h-auto"}>
          <canvas
            id="canvas"
            ref={canvasRef}
            height={sW}
            width={sW}
            onClick={onStart}
          />
        </div>
      </div>
      {/* <div className={"relative flex justify-end items-center flex-col"}>
        <img src={footer} alt="" className={"relative w-10/12 mt-3"} />
      </div> */}
    </div>
  );
};

const SOUND =
  "data:audio/mpeg;base64,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";
const WIN_SOUND =
  "data:audio/mpeg;base64,SUQzAwAAAAAIc1RJVDIAAABnAAAB//7CAG0AIAB0AGgAYQBuAGgAIABjAGgA+gBjACAAbQDrHm4AZwAgAGMAaABpAL8ebgAgAHQAaACvHm4AZwAgAC0AIAB3AHcAdwAuAHQAaQBlAG4AZwBkAG8AbgBnAC4AYwBvAG0AVFBFMQAAAA4AAABUaWVuZ0RvbmcuY29tVEFMQgAAABIAAAB3d3cudGllbmdkb25nLmNvbUNPTU0AAAAWAAAAZW5nAHd3dy50aWVuZ2RvbmcuY29tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAB0AAC/BAAEBggLDQ8TFhgaHB4jJScpLC4yNDc5Oz1CREZIS01PU1ZYWlxeY2VnaWxucnR3eXt9goSGiIuNj5OWmJqcnqOlp6msrrK0t7m7vcLExsjLzc/T1tja3N7j5efp7O7y9Pf5+/0AAAAvTEFNRTMuOThyAc0AAAAAAAAAABSAJALzQgAAgAAAvwRiuhYLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQxAAAEwUBIlT3gAt6rG63O9ZDAEZYBKAbABoAmBgIxdmmQguColfx8MCsQ9Rx5E4higXxCwAgA4EwQiu4DyJe79+r1er2ePSkB48eUo8fv38e973vSlKUpSlN3vd+/fv38SlKUpSlL3ve+83vEpSlKUpS973ve937x48ePIlKUj3Dw8PDAAAAAAPDw8PDAAAAAAPDw8PDAAAAAAPDw8PDAAAABAeHh4eGAABQMDiMhyOz2t3NHYfRab5WEc2KJcvVHkOJh+MrAVsUbt3jCEJB464blnNmoSzGlQ1VnFq6MYXjPriVM2SRjedJj3zDMBTYpEDNQcDHgZIm2Z6JDz8fMdRZMdRpHhjMJQiMQAYZJvJ+JXdzw/2hGD4KmCYGgoGy8JZRAcmMl6pcJAXj2znvHbyL0zhxyIxOor3lhILYK0+H7+WMs3Sc3c3u9u7nxkkTrVpXal0sz3S3Mfz5nv9c/////3Qa4+7ev/K1+OXUiEd7jzGrrHmGHP/////////+4Xkhivnt/pD1AAABUhgE0IGHZpSEGpFqlywaRG5Q//uSxAqDlV2DVH2HgAsdM6nFlhti99osma3WDmkbXYjh5KOEjBlj7SACExr7NRicmtCJGC6jJ4sNuITekFRR/L1tniQE5mOiljUj7LerHXcrQWNsjar9tF5cQZ75rLrMFucfmNiE1MFrRpoFfm98wIW6fHeaxt5n6zCeRK5rHi513lPbsGYESlNXp8Zri/iU+tT0x89wngVgZgR8TzQrw73+ZrRaTgyD7vn2FnBo6ykoEC9RjhL8CrIIAfsfqUHfoIaQaBIsCJ2PoFAgwZhKVLAYu0tSgWoeR7RYNmUojb8NuhhAmCPI0Gla/m677MRZTK3FgxtIFuLbEoIQYFg9EdxeWi+H4FgMOnwkOCOUy0emZPKY4i5Bekvqj9BTL241KRs8WpS2cmqOi1pYqjqcj6fHB0sXb03T5mlx2GyRYof20CzqNtJ6R88Jq5nU6mZVWUPrvCbY07vMbXu3Rx/dps1SyBSNPHjfml0Lj5pnFRyatSoAXeN4s+HlFRHKCIDLTY0bSAILLBysbehRIIpAzS6lDguSv0HRRVP4mBQQqWIEBP/7ksQXg5nxkU4ssNyTBjJqSaYbkEPF2eJCK+YjIFfs1WWrvFnb6qavzdkrKlNUxZ1XKoGo1XDa3DTtr2c1xGGImySVOjy+DpXVHpWSno4lSgzadUgxEc4PVDZaHw+2TlOcsFNGZqEhaLSxf7DJePS+VH2Sa0eK24BSRxiQrosXSLCliWiQxAMB0j0KvRWKr6hJtl9R/hKjiiwIoodSRbIUTLcqKyjM1c74vFh0sAV416G62skwGU2AtAI9J0GUBjhMqHxoenWjwDnjK3JECdDFrKvIskM0cLiWTIRIWtdLLzxa6GmZp5xR2YMiSWq2qCWthSNTMdWcxYA3zPa7qNJeeXuG+7xu5LM38rr2jcskkplY8BoiYHsyfTjOMnI1aFZGdw+emKxaoVstwNMIZds+VtUI23FRr/Tdw7fRQNp6JJUnU4lpSD5toHpwctNE42Dcaz0XmddzJLL6FL9nPKNEE16TdKv7zH38qn1H78UC7Tj+llb9CwABshFOPwAMhBAjTkqE0SWT7EJwwC0yXBUcaTZG6TKTFFTHRwYlFHVcI0D/+5LEFYOYPZNUTLE6A00wqcWmG5AFRQHAz+qtTLYPLIpEEp4arR5x2Szk5MQ6tNwlRuUy9uVh9GeE4SYjJgPdbZYUO01yEV9AuHwEDWl4KgYQWouZTCyAjLFoEpUsqmSHc7p9ERmJRNztNQwbVmvgdXVtlhV5mmV3W6q6NBNhk8nBJoCihX0ToVz1KXSSzUexB5Cp2s1FLHHXKzn9rJ2wrfvEmQqcC5Pw9r8YERNShOYJ8reQLwXRCAAO5BQ+XQKTSJBd0wQAIJGiJIsq3CMkQCRY2ygvPAzdB6eniCgz/P4QFiAK4UCMnEAoKhotUiojPKMTruQQr9kg6FSDXZF3ye2XNYX6ppnKIFctu/IEikAzrYBEp0IJMRnzisSyIyX04aom7FIR3hrgPFu2CouJ24TcmmZNOWpTD2cqtqaqEJWpN9mhkFXQOajqHcQWRHklRiRISX4MOMJyaGckbSsNtADgs2E9slv+pYtnxnWk2Z9TwQNvGGzBl4o0rMULyVUAAhGVaIC9MkVYEmaEwR14xw0MS3IMGgSKEFTIBQdxI2jS//uSxBEDFwmhWGyk20MJtGrNl6cI7YRZUciV2XNd1nteWCMdoMLiVPNwHdtVngfvLKgh1nLgOtTwie/rMrAdSNuCiy0BQiKiMpqNUlLEy4XuR0lCU8kUIAfk7SLInskuqDp5ZNY9BAjCgqM9J/cZS+L2zf5/l05Nw3qmuztNESiklSw+aaxy5GlIUzYNukDjU2dPogksj7BiXA18yrBDVzKUIdpasv0Rg5ZCgAACniqgblwUwDI2EAsEydC6pE+JFh4LaS40TRowYEUmoumD0VJYAkc9rwp7s7dSjm2EtSkS8x4trba28pTB5EXWpKbA12ZC081oybLelTonTz2GcSstD3UTCVc4XTYICN6bUnGAIajrLYCuxUvA6RNw8OsWOnrilIVVG4XVkDaOFGVZxkjImawvuQXcWzCys0C8GmiCx8n04yjG68/Kabclp40CxpSRcTlyFZ6pArqEhQoqMki6yJ1SSuScJZOk2P9qAACyFw46kGjbAMy4XBCHhZFBAXWFh3QUVNJddyAOZL6jWalIc9aCrQ2UYhOyHMr0jKLPIP/7ksQaA5a5g1RMvTGC2LHqRaSPmkKMZ4JJEcEkaARUdkYy7KRf6JN4vVm8na7QhwUrlMVMrOtt79hW4GE/DcjsR0GC504aaj44KCz6pOy8RJL4kkGaYQapFab8xAV8VKqHax0Yo12czdUgtscuqX3aRKkHXUVjZicL1RaT4L9JJi/KLOL6zjmu135c1kgKVHJNg0NK/7wvmbGaagWi4YUEliZF2YAC+QOKmFBLoeNJQSHPojW7QCAP4BlsOjgtX7sCAVKFN36uIIGXrEWivSC1xPzUnU65dLdVVVk8IDlbS2suZT9g9+2Oy3O5HoY7P516yMDE2RSiCBZAT0T3QXEfpofUFCjihEs4HSVfXRTZYIzZK9GhNTbfZmjx5nUibL7jDMY+4flS68a7nnlzHuQ+i+C3IjPrmJFefIw46GHiZOZPFWmIBGAywv8/2QAAcqrAnQnw+YVoE/EP1RCyB6AlyaYEKqSQaGuRy0eaEOnTOqr6ca/GEqKttiamiNLAFh1DGW3cuJKqvu0mTrNmiFNALIpNnUWhNvz8dtQA49+U3s7/+5LEKoIT8Y9WTCR8giQw7Jz2GXlAmN7L/eTuU2GGQ1eJChZG1ZuOpLsteMEzvfCrbvbfaDIJ4TQREscgbV4SFl5jDdOdnTMkPy4SmUMiKlISCucRi3srmv9BFJhyfvgACU5ue4ageZEm4I0dA1i7iYF1amQ7Uuvwj+ZgDRL1UBnYe844IHpg+XPUnFg/TkBDdtzKZylrTHP9ktmYR1LXSjbVlf/jf2povge8q2/Mdy7aSrmdbFJezH+sjLdiIcz+e7po1v7ZuwS0DKvrJUYyfzwLk7fnuETky6KLjM0VM3jpfbXKhijY9QDd1OYt4XjHpRtYQTAYNBkeJK3YHa6vh6EH4S3Qv5GQU7OtZVqrqULwDGpFGWvy9/Ist0ZBXDV1SJf1MuVAhke0ZWIBZmA1MQ20pn5DOvT1gZbWVssWXPEBcezagWdPed3IDl1kfRx/FzVfelm8DF11Lbm05FxYJ/6BZm5XogF/0VpUaEsHoiUp2heZEU2vwTn5AwbcNJjzKmIhf//cBaZBh1uEFQg5s9wArkWcHSQqCASnWfhbaKKs//uSxFyDk71xViyweRKELirJlI+IjgRFgrwBBzxOwv6kddNpXnY+nKhzooApWSIi/2+2Zt964mnLFUc3ofC3l7+yiTYUtqUsUwpNckRZmFNruQUwb8OnH+erozKqz/ELHaqwYQYQXEcGTMBiZRQx02HPcKVNVyxZlpdDVAwGGAdwCHmMSG8Hzx9qCDFFHhF4UcHIOLOTMc23/9wAAhO0ewzyxCSAuyTGYWFgBvi4My4DvZka9c1do0Ws+E3RG4UPwnkizwOYTHvgWlD4wxA2UFT/w+UM7rYB7rOxY7sZOEkTq8dkP37l47b+blux9b00mV9zwg++Fa5oKH3+OWz1mdj85U+9QRKSglF4WzVSnbnt/hWN2Nl36ehcru06v/au1foASqAYaRiqF3R41DgYnpyHjAKvxJxgCqzKURnHaW6LWX1MA56GMPfQNvYGq36lrIAsU1KMLoXfFrVHXUep5NymTJispeaCG6RftVdAKAu5UNGiQ+VQyD5IFdoqq2sJxsllvBch/wELFacErxMDxCtu0hNMnmu0vP1iVN8jtOAOTf/7ksSDgxDhZ2BnpNZKlS5qRZSjWCrmTVE/W4u/EDF/QfZdS+rG3P41+ua6mHiVpv2LwXkt8gz69ntqAACTlj4iHORsuCnADGusnw8yQMmpiUFVlUb2vd/G2kz4UeUddBkXKsTaNUkjevjLHXkQG2eH4+o0gCQ6Hkew7dL0PGhyoh8O7l0zznBzGy5Y6DyF0Urfi8Rge7rgnnLPZCIQ+aD5/y9dONfshdfM863ofjXI/XUt1b+09+Vnk249VT02mKas83v+Y2qVjhLQqIEoklRMKm1E3BkT04nro+zijXV5T15Gf4vym4O39Me/+apiiDf7KqXkrC8brpmFzYxgienEBLuUVezcVfx7BF2ZQY9mmURbig59Loi0nR6EIcp+WndsVvuY6HfikHZ7flO146jowhB7W6vDsxWKd2Vn+pS8Cqk1Cg1dQOwlA4SSmyTGXJmEYOsbsMRAxUEaA4i0TMn1GTB0hS+TJrnJHQSeNKNBhGNMSPhx+gaIBINcKe4ZeHDw0Ci0MT44VHj8tnpCiU/aYSUBCCkKQdBglwXUYuGIvBf/+5LEs4AR/ZNebCzXAdSzbtySm5/XM80MkVKuYDoh9SItGuJyLs1HWp0ccM2cCysEaeRD2iRtLmhM9ICnjJ2AiJ5EJRJqz9fXWpLKqb/QBmMbgRuFR4PFMu7OPtiyMMTzS+C48+jNpVq2e9izedBBK1JQlC1ftYvDHDPsjo3fJS99Ur9Gu369bxoDCIWa+EITIsMCgZQIZvCA0heHQS4ioE3jThhIKjwkysOZIW+gANu6vooAM5QCMFBy7G4pSQhVvjolGxJth0JwkiKhQar1pQjzOKKw6xpS9g2dtTmEkQS1EJvNYkqvXojLUIGP0KpBP1Q8lsc7bpVbyeXqwSrQzNLcJI85/PL4bL4oI0g22Xo4qsFWl+FZiJNUWIIVIJLEnOSQw9oEEOBKI12Ipy6ih01hlZuy+YKGvLsNk+6FT9/hfGRMyzXzaEA8CEec69tVAAB1NRK4xChJdVEI5MF40BEWReAnMaixMAeu4JIv4QClD7Xx451nXVbNozukwqrVQaVlWehxJlSwqrmtjXa25VfCq3OrK2/kjV7d+gWiSg5W//uSxPeDmt1zSg09OssbM6nJpiOQQPsBHBe7iZON0disSbhb5DEq00QBn88TIUiBQrqdqvL7ssvsm1j2nq0z06xvR3P3WpwZD9opeMhPbTIw6NzosWiah7SeugbWZuFZ+QvESRBJoUKXPgwrYqjZQkroS5NJ9dDQynL1t6c0AAQQoMFBzBumQEZaiL4zaEWhU0wBAci0iNmIwj+qs0VmQl0skCHQ2snkwmAtoyQc80EaiaBOwNIqEo8TVuZJSURJ36VSuUqCMCOo4bUT1XEmtGnjGq7q/hVRKKms4sTtUoYhqoi103Fdr5c36RWbLvOMm616iMkAxWho8nADgl6UGNqQZT/5Cz71Gkvq6HPp5Vj+lF8bbgHEx32LpMNMH0H/bj9xGipQnOM1pOfPZqgOG6qkoocl041uvhCLTahDin78ggAAADCqsM8ICidYhZESZjOMuaBB4NFDU9kTgGPKIoBzGLFUcAhCgAAVw4qo0N+jCskEYnReRsleJr08l2IwAYtFnDatokWTZ4q3tClLHlZET223m7D9vDp9IpRLjk77U//7ksTvAxc9m1BMsNrDDzNqDZenGFW06WbYEyt0e0q4t2dQ06CzjJUOgpfYO5+UhfdqlbaP5LqKE4eDeZO9x18to9mht3/xyk30qydujLu7BW7FXLSo+L4D+9lzt4ptpXt3ScXbeL5VUdZcOKVevceYomuwfnqK6F+S4n93Xz3YZlrrglTvFKUgMIwkBGmlAbUZgYYUSMtzKl0fZKLMqVWEEK1UCJC0wlACUVwTKmoPdNbz9mIiGRkPANCK4U2GiKPrBLnR3n7O1g5bVvTrVnQR0b5VAiPAlm41N40SspVFZtnFPVitX7BxDUSQ70gkwsBU7FcECN90IGpeDRGcRI9bKrLk1WCsqaJ0XOl8ZfWI5aVvFxVffHl+cyBroWW53arflqkDPXuwpqcyhLMespRHvWoe735ub7h12OrSp/7pm7WKksw7Nq32bu/82dJ8nVpm7QXqAABguV/TiFmQBqgjAnhZwYkxDWEbu9SJJdIWW56yyLsoPBYqkqpzDaQROAvmZ6TcL0msEIkcAXkbDaOdW0jtpK1hzdJAS7JVqZCMtmb/+5LE9oOabaVMbWGRQy+zaYmsMigEKiN1NEs9w262qoM90orqapgZTj/tHXUUKRSb+YTfrw5mFl6nmxGY5PiaBW0d7E/4MH8tex2Hf1yl9sdOEOYgRGmHXfOQCEdyBC71wEuJFEZgmTC9ubcPFrPPNaDDGaDSFdjSIUKvuq3q6RlCY9kNOWTGgZIxgXwZIYBRYiBE5RpzaCJkiOk5KxGRARdpwO1NyXALaesENsgvjo0AW2SxQgVkcoqQGD0dr28al9muFgMXJTuOyBudHy/FnrJkTk9uSJg07Yr2oduvZYtNckk68LHI62mNaXLLncsK8hoWV0XvBP7qx6CatGUaY2dNO7SqRea1cpd4I5maGsf1n1sOwV2dMy9TdvGsmO9kT57ZInqx6Y6pvyfW7tdohLo0k7eNnrMQoVdn2XV9f+vTzO3mcmMapAc+95rOVQBAgc4LQzSp2zTh0dTamjWBSEKPShEVY0IBBCKKBpjAa3WujY5Rw4gC2QhFLqYqigKNAC1p1gQEC5o0NJAAcPSTGhz/yLQqEgaeqW1TM2Q9HhaL//uSxO0D1wGbUEw809M4s6lBrDI4jkyGhi6Jp/AgdOKEvKLRf1TRV4CN1gIM88k8DyxobFh6X2feLjRV54x0mp3Ht6LTqCiO/K5EXiW5aycs743c/SYp/PeBNXnXL6V++KJ3BEK+aX2HE/sTstntkI+2fOo+nN/pnXbt8y7/dFMXwdXei3NvaZi/cbX/MwUHEnwTkX3KNtcIy4AVGG2MrqDihhgYV0gJ6jkJXjih37iSN7cIlDyIC2HzNaLhtlz2ORFEuDpjIPnWnomMtbEPFiAO+1etLV9rfp5jSiziBQEtZPxicH17KPRmC0ahKFdkm0mtYXCTESvlXHutsShRqj3DnbUv9XRS2hFG05fjLI4z+DlSqjCzvcOAqbSu8UbnqV3/yQYpjLV4/v7fFGTFJcw4DXzw0q0CWjTVW533v8+Y8BXboFZnUIWI1nmlggo9MHrkilL798RKAEQHg1oCMgApmYSEpLmTR5lpAYwKGrm5m5AgyIQUvoFwsFJTMR0GRRGAEz4mbqFxVYVpi3xEwA+HFdcUZTibyfKPzAiHpH9pIP/7ksTwA9rpm0gtPZqC/K5pgaebYGIE11TXJcIi02AKZKRkYOHcCq5SlhKIiLYpnqlLqWXnrRHJsJbDHFhq8IW4Gai3ddycBoV7O8uiAmkTkrx1Vrw26EW5KZ+wzXsD2pK/Ufy3JZZKaWTOK81+rIGGWqgaQI9ByFsYgRg2D3FAuIQIjWUlCzGDBAN4GCcCQuu4UHb5DQp5FOJDwb1ZNiHDsOoZrkf5R01Y8hah6tI7+Zj7/56qdTQDC6IMyK2vgX5JhJkiw9aMUcCok4wZJl0hQ410BGHGY0GEiRauqhJbeAQKNiZsLapRggFCmp1lQNQUPhE3cZy2+GrDXn9RlnmqIRRu1tsCUjj8qwzLHk07tPy9LVS6ue43r6i8fdzn3TkNTUNBQTMRWfh0mGkeqi/WiSNFSTA5i65zHsnN/pf36MKb0mv+bVzlki5v5km4O5wwxkppV/yd3+kv9iVfJSbUy0DR02900iReE+e9+JuftPQTFd8AZGZdJwAF9XyE5lA8BbVhoWnK7GQBigxxhqVmBlz6pA5mHGtk0ub3wMQCPdL/+5LE6wOdeddGLeUTwwizaYmsJfhDAIe0nPfnY6AlrDr1P6gRf2E5Uydizsq1RfNtN+T1Jdbz9R9pRMP27809eEBSPKKoQNrVEsHfbaKhZm8BLUWtoN2wFzA1Otn/55wqTh5RK/Q0L4+zC8lpp+n7ushf04f+99lHzCgD2/9+gSeU8IaMTDyy4xHuUcSnbzhiiltpj2Ym7bqQ/nKbQTlX9jXTkwRRVy37ToOkNG+zyZAQAi5hl4+cDOTSYYuYlYqBI4DAB038jYRlcQZt81Z2Qw3MVk9qK8hLZ4NI32NMwhcctvIulHdCMxmtrwLkcQR/SB4efQVKwZX6+iN7MdLUPIocOI0sTf/PCS/mQjAniSjaFTvpUMrI5YX6e8UughZ6YVrGQy905CBqk7WK0DjM/8JIiVcnVfDR9oq2DksD66y68RIx/QnvbUPMHDxU54FwbJV5xRjTKJtD0EmrRx6tIKvII1xAYgAAcYWjydMpMgeFq+ER8aWiMIGFQkVAU6BYC1RkJQLJEl8RKwjQHPe2qGDGvlEGkftYEVJQ5BCcZVAE//uSxNqCGGWbTk1ljcLaM2qdhibxQ7DlZwXns1bKqKrlUmhNwZK8vKZyBJ7klkp7yQ+42TB/WAiB1QqDYuMdslt6faCxYWFd4YraYD0okwPIEbIGlC4rEnKnUpJVfhavsok8dQq+TdTlVfLHrLssgGNRIzYNUDq32TeuGsuzQmdqGBs6ip77cvcmjG1R7flB/9x960nVLyNZhioEfAIKYoOEKTdhzWfRY05ZxnZjGCDhb00v8OMnIKrdEQwDWl5Ab3GwIJV2rYNGhwie9S50aEBwwJpRhSsiTgoGuw6UcrzEAjwGNgJ+E8IocgJIJgdDFGdg8C8S4q4voDIoESai7MZ22Axxk1BlCoUTpsvsR188vAZhaAO128QmJ8qEolTCY3KMROzO1ZL1EBtBb2+pVtiG2tluJssbrswYLPpTMm9QTQXDrUOZsMuiLpj5QnwqOlJlzIaMZVHHbVNQUnc/BIrHZ1MpOGanCLGr7f7Zv/7sPd5mQ+f9JT7VpNbWDwYuMQmFByt7QigmDno9LCw8WYlIRMxNIeuIXB1trxUGF3E/Qv/7ksTkA5fVoU5NMXqDlbdogaem8RQ/wWNRedXICAAUUPbBS63V9n7XiwRVDlunEQooB0le6hKjJUmhOgOAIi2SZiwFpvaETHBEVTh1Rk4Myl8P1+XZxOQ890qDIYNUqrzafuqJH13Eo4UXLyxE+zhtRQlu0FsYLPXR+VupEHrgFCjqIKrlHJxLqHyjqJFrFtBHHyk8/FmR81D2b8MZ/oye/FXRnB5qAjNwcYg1VSyVKrRk4Q8CAAWMpNDCgsmlugiMUFd2kBsgKAQCEddgRFghhcUJMCQIgMiMGNYOZg7SxBYqqihUoVoUpTzl+EtKp5Furdsi/B1m64DSLgKTPwhZ6IXEdHi3F/kIHpu5+IbvEz7Tato5EVxHHMNq/uQNvQ+L2Fov0PxlwrqaGd0tZNG1VOEVdWNES/mYQed/4NcZxI907Gt6WX0irryy03F0CylV8a+09LyLtm2Q3bYmaRfv/zXxoXkIgcpe6F6G0VJk6gBEIQ6CEYt+XDHixkpKxDMS+KI4Uw01/UBpNa2AlBDFWfDRMNjIbFZEBgI6EVP3dLr/+5LE2IPX4YlKDT0ZAwEuaUGnsxjpuSdukNqoCQE9lgOhJs1t5L0U5T3i7YmcT2sGcRpZ/ZiKXI1jDFzsjMB1OcQZKWNBrB8BmlLeDMdAmrh4aqIvcGCi+rbx2SYVB8ijPh20pVOftIvfl1G9RdeS3Vy5x9tShR2OJ2Yg3VubdbY5k4J6VOib9x4mLX7p6vZWSphGMSQXqTKQQtSeJaimBMtGqrIzc8mErfQJujW6YmtEVDdTakpQJI11XJCkGijqTYIOmYbMKrMXZlo4tp9riI/1tTvSbdcQarfV/rEtPedfRORyQP/zg9jCfsIap9xDHE8m6pCyd+hJqX+mAvhR1kp32UP3ZmSrH07Rbv9SLICZ/TlJSXRZD7KjUoMilx2ejmzWtC51vxNFaONmlTs8Wf3emDNYc3ofL1b9C9nypOM5O6/GFW+2rbRVEamYEgGCFJhQKEFpMKhcFFiUdCAoBgIISVXUBaBcRkoQvgtYEQy0jPAWBWoOU6oEI0Mzvdt4YMNp8oU+yJJKVHaBeXxQBQPkruhQELcdX0BLHJjw3QIT//uSxN8DlZ2RTiysXMLlM6pNh7KY3TJgUT1Qp0W+pWcxuzZgtKPGkYasu80lM5hzOO9uIus1sblMRX++7ZoLeVoPMHdtXnlBCpG1mu4k0BUtSHci8wLCw/fY/kNxYtLSNlC3ah4orUH3HbCjlV+9o+vqHXe6jY/ctTp55U/1Kmv/n67updcHWPas2fRjqcktt4YMBJVAZw4TczHPwNBAscuqKBCLACsqJpIHM2ZM4NDwC1CqUAyZSJzTTeoYR5ygA0EAQ4YxyYmKo0cR5VBA8QTlHgD2WJUIFDJoFpo8stj66MI8+68pXKA4IGUrXzMyvxmsJ/fSmXxAJrl6Tsx2BWLkvOr8Vw22WVtRYWYKN0rTdIjwo6HHh/IzH/Oj4vVT5Sauq5IzmhZ0XmoDQQVTLFjFzqPPUH2HUVUbnaj181sxSOclhettzF11j2/PAQaJzKktDqwd1FbXxmHJx6HJYWUqAABgIIFhTX1AwhtkArEUjkACTAWhglypKUwF0FCAdyCUYOobGazrXEr3tfwz0So4YRrcobY6QHFA8dSwkAKFlv/7ksTyA9qJh0YN4XODO6sogaevWHyAQvO5T/YWDc+Bp2orkiIvS9LYprSMblQ2475/qO1NmeSyjYmR+im6xm40lXn3Pwx06/9DFphctyV8s0qHTtGs07DN1RCzt8qtfAA1dYGzbjUu2OKfgwkROjuRgzGiGXtIuO3xz9wS8I4g1Sc1fKGaTR3da/EFeNI0ZZxXbXmgG6IuAcsDmASGMCgqFr4k8FgUVRbpl0SEQ7cgg6AHpB0LDAapkIiXYbCiIk8Wgq1IdKgS480+XejcPY4LqieGc6obq6/EERNnNy3LUzWu3WmFqfetJqhHaryonLH9RcDw/TmtFowswurTCp6nq9VnTft8jfo18VgVc1d2r5WidNtVbcOiYiY2yU4nI/uQWfp0glLkLnXXONXn1FOSfW1NUHcucRUTuRNSZ2MYkT/t9nFSVeHtTXVMQU1FMy45OC40VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMDnDewY2UIMVNjSohE8xVOMAKyqmmdjZkwUjcFwYww+QHJ7wAMFJCLl2hEls3BgzRpuiQEv/+5LE5oOX8ZdITL0awte0aU2WJ1AMZwKtGcpJJ72BRlEtBwmGVnt2p1SlAfLYFflC0uBXExGQIaSZRvQVYE8b8JT0eCkwR9N0M0brLpnJMpU2fxDidH3uBGOZNZ70Zb6LpIK6DvRN3R9Ql95gyqoy+WRtIdmC8ko51PHWrCYZqoehxsQPXUNBOIjSfj8UshKbkESWEnI7mpS5k6d5j4HJfyp/Gt9+Y7prBl+O1nzb+n9819CCktFppJu+2tWr4yssbeimEC69fcdgrzfQcK/g13sC2npAdT7jiVlW3cgAg/eKD8ufvPQqRDnKP/G3+IY++JnmuvuKhvUsU5Fy5L3v8FQicOIRBj2nbCUbORExrjMsTcu1uw6+ssdxI65od9jKH9Rqdc6D58YXd1F3wMmFAAAJcMv7BtQ5EQ74UEbBMkaN2DoIyHP2cMqRX+9BzAQRfMQCHQYqMEpRQGNg5WAa4JH2Votp+nYINAcILoS47OlVQwkIwhgw0HQ1MqrvP2WSBTJkymEUUURXimM0hKZsLJ9W6eCWTVoInLUoa0MVC90L//uSxOEAGn2HPA29GQnusy4owyG+wpWLbZV/KBUF/XNjhIp3ESSJn7eoruNny2zJd4f02MrK76JUnuXGiq1fykBl/qX1qZMtsabGGl5H0vJrb5g7XwXcP3WgjNR/eIQFz7esWB9fteOkLJaGL+tDkB1+0NI4cUVSIMD9Wx+Xb5hBuNJ1K/7LX2vnIc3tAYgmTK1gyhdNMDDC0MSCjAVFTEuKBn4BaSD5aowuKWwYcHqXlujIhICABlIQhKJBAmEnTJA8EhZnZOveGxEQRp/EZwg7SXU1bWG38HRNLN+q8aFhfDyFYcINcVjxcA2DZAtP2uCpX7jBWJXOISvxyXEhS4746uZYdn4E0pL6+ynfbwhrl8nDK4ahu677fNuPOU3gzT2ctqjO/lH+pbNvqD+egSLS6VFS+O1aEMn5KNs7GXqls/XNarKC3/XbfsMDya6NdyOOcKEwjfr/7/f+f8oEJJuQLSC7DUFqDFYmFDyYG+YEFvBNrJzRlOXXKapI/unKHtarPAWFyxLtnzrm7PjH1wfZnz33QCryi29jFXQdQw+zIv/7ksT/g51BozxtPZzDQ61nybenIQNEokWl5SEY78ts2g212/BEzkGPEny6pySM7zl5Al58/GqSnVVNVMrcQ99kHPqH3kxj1zBZu2xrTccXAuz6Jxa6EyyIUKG1ucy2xBQvyxCorec7OewSXoAExJeEtU2EbMSXDlRUz4KIUIKBEVLbgrNEQCHCZqCmPTZjReouYIBn6sFCDvATAMgSSxQI7bkZhsFMTEEo0+TSJykUoMFBjCtEqc5KtFqQySPiwCaJKLmwFHIvTiwxhyd8Stsjh+AGoRx45RyVPVDuqkENnfZWZikrkNJcvANQU7/nq9mNtUGRgkCUTbnA5sFxKJZmxEeoj5258YUdPrL39qJN177BNsslYmyj9n67GWmXcOMx9Io7On96C+/N3+3UmQxwf2Zten7nW612OV2aTlf575go+6ymoH+dwyybh8kAAAuUqXBbozgAS+EKh0CCymiDTLi37R2tCGxhBEHJ0xEIAKONAytSqcUTa+3yJcCL4VUMCDgfiUBEvwAYJqlerQBzAYOSsrgWXQEcnno6rzwTDUf/+5LE6IMTcYdWZ6V424WzZ0W8sfl2JNLOGZbZ8vCGWnkUD4nEhTBUur16ZtK/8voMUbdB/iTKfLBweL1KGT3lg4JXnKF9cYUMCmSiYsVF4sNcjjPID+0QCyOogoZnoYGDcmyOaNaGwFkkFmEerrqPYdZdMnSSJUdiQqaQN2mTo3TRijyIxXSp/lHNyepphCbPrCVXGs7KBswAQNtFGpMw2IQnsUbh0YGrSoo3RM9axYHB7EVYnRb9/GZDQpuFRmTWWsU7CI689p2mitziExFIk/66IGhNNJJ1+poinI5IDIelrYzgWgqyWzUsFlCJAGlsdHSSWCXZcsX8gjukqf0LZ3DEb3Ho9hXvFZaVlOrD+jT67InVoshZ8BJMgikkgqI3e0CiZ8RKylY6bMqkLbbV7hDHizIPMm9x86WbBfWW64ZU5HOy8Injfmvy/Vz1lQAAZE8CbxcmIZEgqOHsSRkBwYGUk0XLJqWqUwSpWv8hBLyM4IQYEYGGDKVkTEOthMIl/nVaWqdYFVUnHP0CcB7njGZmYQkcz0YoaRe5yRi9JoXs//uQxPCDmhmjTGyxNcLyMGnFhhtb+UIVEpY0+rSeH7DhKtxcG85XyGljUJ1Ll4coGCzB8KDYjDYqgQvDSArAdRFA0QhtCuNritRZRhRoNo3+1TzBRChLUbFPVmgmRteMkWcnyTPK1JZrCJsWvUCy97KEoOkn/Geyih3wJ9ljD2rdVtEgQDIfNAYKJ2yDPWSAsZaZLA4S0xliI6sCOagS2AjMbsCAMfIjyNpcOLtZW5Bd1xn8T/lqwsMOgnRPNch1iTMWtW4g4DSGXS2bjchkEORt/X8d6Kw3IWiulEnkjTs0nNSK1eMEFNBRI4sUKCZZgPKmy8xlEBlyAfRrEuQLHWBw6KT5HJVESkKq6GkqKy29sSF9jDz0afnllYg+VZp8ogI65LOjaGjXNCxYkROKYi6ZchM5lXbom4hIE6HrJLpodUZzPprGv6aquQVMQU0BBAKTm5mhTMqeU6CRTtsLgXONMhqOYMMDguCY7o0uUPCa0QWFbB9kVCXyVEVblIUYjWbYhaxVAS5upQSWuOEQOwdJg2RCYkNzS0wd/2CSQq0S//uSxO+DmamDTky9NsLxMypJhJuQZj6yBXKSuCJ1KJ4u5p527ynejq07RZFJF5PZHULmJKIGaeqCYKCqPgiBBYeQbmKPL32yidAzAYoWzsmmY56D9ODotuTMRwunO9IADLm6PIVSXaZaCgB95UiUlu9QaJqTSgvpFtl7tNyQpdABeU5fF7n5dVqg8W1SsXTuz4EOM++JG1JnG2veey1lOsrc1Ry6k2Vrh9KU6ezPmJms7EJfp46lyl1GkiZHdO+ZhUbd/xrRxCm+I36wI5weTGFYTl1j4uAiMT5lw+tCeGPLvqcASMk6c1fOaKrNS2WVylY8hCM2OJQEoXGOi0sAKKogll0SnkZVSl4lLjKPXXD7i0vJJNPQRHzxKPrNiSpPqsLYSSTcT9rhNJluuYnre0xBTQASVLxFMZR5hviYxznhvQoEheYBpgho+OTSgFBtE9JG08SJZnIoMa7IoCQIvMTFz/RAW/+FlxFOmSTusphPKd3bHpeVjIeTEWqmjgxJePIKkWtLTl6OqstISeDh6DEvn61O7irp85OVyG1WPHz7Xv/7ksTvgxN9n2LnpNGLRLNqDYeyoc8ll9e866w2YB/e9YZWQHkT2R8Zo0hggIGZOIcRn5Lo0NCRCWoRoUnTbRZNWlMkhcw+mljkZECrShhcUagw8faiHhZFBaTEHKrgdGSGIrag2Q0hGHv0FN0sWGzsDXBKQzKULhRJ7FFya9HGHI2+7ajTcSpGe4HOpDIb14EMXQrYbMCMChEuLIoPx8suXMO+kFShWfMrqy4Xz4ZVWlT1bLDajDgwaZtKGXh9o0eKvjXsKFqcuj1C5T1fLcfL6xSNZa5ZBpAfExQveMUZUVqvL54NAmGI3iSgOUi6sCh1ySqlMHV6dMaL6FZFFLt+5fVapc59VzT2vM3b7l6Gc3Xmx+erQQXjwiRX2Ee3ySeGJih8rVNlbjk6OWkF5aoAAEuULqFN4ReI7xbcDSjQxbROgBybdLRo4wNWNG6Gy84ZMxjFjKDsTc9diY7kpwSSiAoGaOxLEvNrfHlaakwmsNvIRDHtW+Yvybl0XgQLLhKUn90puX4GlTjl4wsByzEJPaabbNudK5oU05VLg+NOEgz/+5LE/gOYpZ1IbLE5AxE0aY2XsZrabNSvkIhvJEhgO8XUYdVRWoZ6RxLTBsVkM0HAoEVdE16N5CZgqvc2Sk2uDtcvWIR4cLD9Ydkf7vL/X3MCwiihHAkWoeFdXTDg7/XV6/u3T9u/vMLPi5g4dYWA43+gAqDI5FYOLAQgxuxMERdqxA0YFhmQMzIvCY0gUIUipaOwV6wMbc08tuX7YsgqBUqwxhLQUSnu4TfMxS7S7L1v1DJZ9a7O7kHPq3Zaj/vG2kadBXFtX7lvvG0qm0jUDT2VFAY3HQTztgxAMarVyMcB9MynV0mqBwHU5R1TlofUmYL/HES4zBIbEcdMZKIsfKY3JXK6icI5KadJOGtVtQ8WyT6HaFcwhqU78uXk0Ew/MtPxLWriWqR6mfLZH9GVGGkA8cZHFsun2NoRghn5zV8edcGiEzZXKnsOFTMB50C90+tE0znqJX7xfuYB5DoAyEZu4JGLYgQRXRdIc8ZAiE3Gs4Qr9ma730cpIlW5dbZ4DYmsAhMICMXoF9CwZG7cUibcUuY5TS9Jhj7rdcN8qixH//uSxP+DmfmdSGzhh8OvNKkNnDG50dp25NZiLOZOv6/Ft0Tr1qZ/nldhuhdx8pWCtbU4Qi+JFLOlYzPjVTG2oudwFmjKDAwANWRRJaVIa5QopF7MRZ0mQKwi5qDPxbJMaUAFlNgBJTQOAnAJYDxIgmjSpKJEO4Lh+JJwgdMFIKq7jXqnQLMSKBIud7t+6hARwF9BrQBNAIci1BFjDhUxFAmrf5lphNJ7jxUdlo1EuEFBL2FiUY3uFAYUEARl9kOSsVlQ1si4UL3nsOQilI4X78rtUtayqxxoGkNV0UGH0iC8Yg4Fp1IzN4vfXD5g4UHjcnNiCaF85fO6M2Ly10uHyHGSzszXHULhy0WDll1O8W2USg5iOGqpztuBKwMWNAih6AEDJWeXRIqNKlIbIiTZpWadLv6QtP4/8NiT19i/F9fplZfVoZjjzSJIn7j7cgimAAAAMUdBNpjiCwgAiTvBpysMGA4FORvpQtBKxlUWUfe2LiIpiiqivn4bXQCfksMJdkwVI8UoW8JhjfEIHwr2RJVlVg2UWfqjNZkUApCtJyrnVv/7ksToA5edg1AsMNxTA6/pxZYbkG5Ryn63SuzBOdzZoTm9bTza0lI+mLzhU0bj4MRcUGS1iRnrqkYhOHl0bzM9ohREWNLRdZC03atMRg2uq3HVhWinXJqZolg0okwws5XKYx25FE5iFmqgjSEJJJtgWNGrijxEwnk23zQvjTEz2uy2ZwZpvc703Uoxaa2Zqim70VkhVc1Fy9gLtMYVkKHYEYmwWMiViAsxRFLzuhDpS0SnLAndLooTlXO0HGJKokscBQz/oAnWarecNrsRiD/MDLmpOBA0agp9n+g1hThMmeJymZtNgCXbf6aiXAZOCqeuCEOS1l5UJpZMSqpRpVg/CQBKJDLBkfGzy4+HJdDRa0qQjsyXKiqYtqY3zpcDJAoS3mwmAFuydtmHJEjkjTEAESyiVVRtVTnEqk50eai3piyMpbokWFhzywNKQnPNrO3grQDGAQB5Aj0axcdgGdEygiGUBdoFLRpXVaKr8aNgqKxBO9H1XAhUpYhRD9phGUINMVCQe3YDuXOTBa0THXwMLfu7CBVbtQNQ7nlN6RpLYGb/+5LE74OY3aNSbL01AyMr6MGWG5Ct5K26KpS+RxmVLohp3IpNzurYCmJPnympJJNNkg9ElogE5GcHBdJohLFFD9pHEvfuiO17h0UshfvSu3Jtfjg51CUOwa3Fy6Gv99V+puetLl+q1e3RRwxN2o1rTXZarwfBgULFUGT54MDTzDLErJ2X9ulVQDCAIM0NQasmEIJq4sTl4CCi4ZEOhQHMDAm0hoAIwXAj6NLuECVgAQmc96bTkOmC0MwEZYMdswLYQTBR5TiT7KonqxdkdONEhm6shzF9slceCFrPrTOow4OQEGR0XhQNYrXHSkslM6TGBdUHZbSibI7CuY0HIT9h0rnqJhKWdq3FZQvTKaKYc9K0u+xVef34aUyzT/wVXIunuaXTZuzl2JXIl6p6j9Os29f5WOV2k/Nrr7xM1YzcrBMed87M0mVczv5l9nvcqt8vksuqAASSclQMWIkIyAUqZ6Y7XHRxTMvUjBoo6ENxJadA0VnOMC54vYsBxYzYwII+Sw4X69SWEWLL0tzy5I7NLMUvNnJLhbLSlJZe4jlDQ2mj//uSxO4DmE1NQC1hkUMrM6gJvDGwkIEcGTJRamMTUU6ZiMKIGIvZEtNoILtaepUzYnpa7+5Si997klRr0THpIU9bmbZBHE2ee+5W0Nm/ezCAxk/lVyXemepY8ElLfkAAS3e09I83RSnk0DwVgX1FEIgCNCZrmqVjJ2Up4gpCO1Uv8kQtVp0WW22OWBxGuKPSgRBBiGHOqEXG05QUKclc3r4YZbC0RT1aU5oD0ML5TMpY54jSpWJQMacZDLR60NwjnruDZuJXGSLMrZFmDHa1W3IYhih0q4+SwksPe7wl7wviBOQeoxFtPEoTKid2X0ccioo4K9pYnNGI5hmsrmNn23wzLgsECQ0y4MKFmIonqjLmtl8Qh7GUp15QhHwWonDK+cH7crDALy1mBB2OBnV5vqIvp/Egeq88HjYd6FKGO5KBzORRoh+qmid29jq956F965oABFuZ6VrMUc5G0igz192fuqUDwcF1XbbeZg6HYbW26AcevBu0LaGakfTpES3ojihwBQq9arYjH906J9hQ5Cl2YD5pRNJABwpUC6/JBklg1P/7ksTtgxLtj1ZsMM/bzrRpjZw8uJeQ+7FU0UjUClKMMK1bG6LTiqZo2pUB18Tzdk2pl0l2OhFbns25DBWZisLlTa8v2BgzA6bTqesKLpGUcpfXfKO6yQEOObWhcje4qrdQbUydpvyklY6vaZTQAABUr6weaRCAQO0JxHT0BfQu6XGiI6kdQyldilKR/zA+xLMtzINMK56LUX2YB5G0X4cYpB4yowv70sA6XScP83RZCRmkqy+pzDYLknUYkF2zHQMR5FsqYQkwy6cpiyVkAvJlkB8T95dLBGV32Jxf6lQ31hPR6VuIL6uJBKrDelFe8tQ9Kr8KfcJ0CxeJKt3E9G26oy68bUSrR8J9zQxgSq4w5M2isuLq5E1GvgOUjyG+tTnhy43BY9ERZZ0x5REj1xxq1a7EeO0cxnbMH+n7mmIAAguaPLQCyUQQuRI1iCRRbuWB1HJJEkIW1CwIGaRxLwegmKqQ6SjdDayZhkqtsH2UJks7OaJ5ECIlQvFQcZLVQ9eF/O90yI43FK7eup13XxXLRQG1EZAQuEsS3NbJilo0uIj/+5LE7oMVFZtabDExC0S0Kk2HsiiKlcO1dOSRETJAybHjiNUwXlaNpp88XZC6gI4gSEJoTNTDerWGSQjB2MSMqzp7e2jmJw2IeugxwpnC0bVOVt8yonNkZ1loZRtTPhgDmiqrRCJCqFNxg9qtD24qqtFZn+oAAHSUBKxlsDAhsbE3YFSGp0LTDSNoF/wIiZQ7kl8k9FY3lVwCSkE1O5KxgxgSLZuytHYSWUKfxl4NEVMySWuolmrFD8fclrjmqpJJQ7DrfOFLonPrhQDSvtKwJ37UurWI/EVnyQXnB5BEAo6RoIkuDUO1WmWkLBPBsMoOP0L2WWkz0AlGx02Hqar1Hnzwyq4q2EvEaJlq1VtXXtZS/d209pNOTjxpJOQWMEkSTbAS6POJNZZEaemQDlIlkTq5ICTJKTIDxaqcjaNcwvVFuDRd3Fd8qBSgFh0IXDNqDDdBj6I+CMOTChU0KchKBJ5dSjw5oApBElBgwBxg60jSrNIyaLwig5gUIngJJXTdDgaSJSSayPMovOa6yfyI4MLCEl7SEvMiKtZSLiwpkaIu//uSxPgDGGGhVmw9LcNbMumJlhuYTiMxbK1+MTsCtuyBzJW+rzRNgMhlspfZxIIWk2sGOVPRV7hOhikT8sPnnlQoNSMnwaTAQLB0SkZAVMmBuhaSISsmhaU9TIkPZiX6Sp5/ehaVSa6aYe3aThPsLlUc+lHcjXi35RjUZ3jDSAbKCFiCRNLhGUS5vUs862KGQAEnN4mBAkygEmYcAtWreQlEASP4cNF3QGT2UjQcLdekchNZdbwwJBC8ofTxu4wqUPNB666WKRSmWE5ySBUmFmHsMzQJHG2WUB46xamYAya6M6Iw+zSk1SQ0rcZSbExdW/VLIqiTrpPx5GqiZUIDGpjJt6cD0IBi11XECcupBRYubnYqMr3kcESMkLohWKnnh4PWyrstpgilUcOy5hYpeTNNC6lFz6LOMGOXNbeAlekSnTUAAAlxVM3j4x0sZgKagKsZwCPljUDTFkzFAHPIAxOVSCNwYQ/QlhgkQgTEAQABW2+Unf1spMCo4DBhlpz0TCjzDmA7uuq02/MPb1/5VGGt1alSWv8z8ISqdIxCXKxeU//7ksTxgxopXz4NZS/CyLPpzZSa+HqrwL0gLFlioqmSpMuafRW0Vmu0jXZpIkNRhI5NsXUTJuUaYRZMVrmqa1Y6wggxcEbCNohSWYQ/xcj5p2lkQJDjK67XUonYLJiWb3crGTMaaMwayWSZXiTqw7HZerNLKSqNIMbQOdNxNtIojrAAJSubLEzIBAgoWTDthDUELmM4pAH0P2OkDsSeghXkqgzBlVE5wqFXgOHVrp0JcwVBSwiZ/s6YM4T7XDUpgHHESGEodBAWRcsagOTFQRi2lxO80zEcqD2AkK33IE4in522nSnA5kdph7R2eWGCt17vU1cUau+1WYCwwdsRxGCdM5MFlUNeYr09ctJa1XroKpo2HMoelgJEPLpHYUcChafI8Vm83gfbrAsoLm8Mk7mvkSkWD8yQo4raIj2P6yjJqyKS6KDKCqE1c81t82qwyyUWUAm8FJxnxIigHWZlYUlHCNijSa1slobpACmjBDQ5ELq8FrFqzG5bUH3rkUwPHwtfHUJRESh+yWNLxSvChQY5NQ8/hb5xXuKCGkPVBS8WGrf/+5LE9gMZcZ1EbTE6QxCz6Q2WJvnthhEP5sucISEhESXQ19nawTTnktPnlDq/YvIoJykcZABIkJVyCCyhEGxDQmcNsigkCzoiAocNEiMBRVNAUbogFJHIsdNbTKQUPkx+kHTGkDGvpAnJLUkTKsUDSS20urUD/ltt9hDKHYT+KfyZlDxjPM+SrYX97rXJOKTbNNPYNJABJTmKo4KCKATGGMJUTgflj44cXwB4bfxoRFr+TFVufR+WsqmXgcT5RAtR5Oav2JisvzABqbaqw1e1B404sQoQTG22jAnGQeNhWTaI4h0oUktAUMqiUHRUhESa7SNAam9h90RkyO28l71cvNB4nybGvRhN01EHlCJIhkjpZiMGD7WootzWnOAs22UYqPLEsWkDQmvyYXaajdK0gNTmYMoJwTXaYH7tJeM/nXnrUayntBkhfdUAABOUgBwAYGKJIKKjRwE64cISNrYBGQKLmWgCw5KABYmZmyduAOP4xEB4AL3QJDqsgNGkokBDezIKA7joo6Cwe3N41GooYvxmuZHvlKPAyy5LRcUIjFxM//uSxPSDG5GTPA1lL8LOsmlNl6YZhHD+PmVFqhEz5amFkNdgiRFNLEfxKy0U0RbLxMu4yeigc6M81RwmXUFRAhuQ1WaYQpqJjArK6HhBMSFkZQ95tEKRhATAyjUInLHjJmIgcvMgRmyccYgySEMWlEUkcC/mgCzam2WN2RkyiWs3cElFWIwj4oW25VFMDiX7toQYRGu5xx70FTYwl0OySTMnIwM4MeXDNxU0gGR4VOaOKExajApmODITRAwM4iEdx3JZkYoTimauudkR0HjU76jBhpkAwBB689EBiqarIW1xpSLjPVVXTUeW24r2PYvNg75sqhpW1x01pVJeP/EgEgcGJ6RDQRhwMC2blNQyVz8xRWdA6SFSeqxvDKG6+5xflw+nDRZSsWxhy+wtHkE3NS/sNHnmn7LW9Z5u6my29Nla5V13b5ldjruUz48mkVMd9fmc1tvpaZ2bUOIbV5a4NhZOQ2SW9IjVAAGxwYaeMbNSZI2fhEHHQZKMAFDA4hHBDxMxZIydJhqp1kGMBrZbsJBBCOkW4IKgbJGpqcoCpBb9Vv/7ksTyg5qFm0RtvTbDWLDnhbyxulav0Gl/thgM5Smi2p1jG4TYfRtr55PmhZL7BRi5svMzlXLfh4AgvAmJMJnMbIERKDG76XN4hO4z65PFHPmN4Oytd/TIskkiGVKXKxPfcydF21W8/H7Yd5n92QrH+/+sryvnAZNiSgjgpz8NOS24MCBhEIG8LJt6UbymGVhJl5mcMAAhINHGDNxExQQBAcRAAkVrccE08CMYJaR/0Gbu1ZdxAUKxipwigVhYiBaUU31Q9MoVVjhNrMLrLRNFcFizzJJJ9BchXT70CwzLnJZ6nPEYYlzxuChKeyHIcdyfDkHTM/MVoJLiGhrpBYyWFNCWxeKlqGO6VYdNnFYJaMGj46bbhGUI8HGpyS88ucpChsF4xaXO2mH60WLZ1oqrEzimF5q7Vt1mjFXrLU9Z7J7NvlptbLz89NvmadNMa3/7Omd2FTHt9j+I4uoABJOSSArouYvSC7DdyBL/JTvsiNSEoUGAisjhUggxBDq0IB4DVy4tCdnQu7O82kjrs4om7z/0oideTe6oMQoCH0sy2QL/+5LE44OU/V9GTTzWi2YyZ4W8sfDCJNHE4gs3KclwxAkVXi2hnu5JLYlZ3NqEYQivOU1EzyuZCHl2ShIgUOO9MRYOMoFF20Y9CY+9IiTfOypNGVXUNuezSQ5jGP39manSlPYQuqzNuLFLUnVgAEu3pFGgMAF6gSNAQD15iX5MSMsYUgBAxEEAoEEh0e1L2HltbifjYlvTFpxioBkaFztrYC4g6lMMMT6ETVlby9LUJgUkhpiBqfqhIxaoYPxUKiOnVArE+qGZoPxGMp+tjCrDnQUkR1BodDa/mTyoY45znHijLDP5xeYgFjaIMW6EMByMrIlUT4yoFgzCbWJEnXUv5liYIac6nP5tJ8cB4uyCISdcdePA3LK4yjIAuJcRaUpy0bL0Ykg/ZYIbRhjqZRU7MHYFJWEUt3MyuEgsNIyUGwhjmI7alefmbBEXxHZbOD83kqHvuD2fp0HaAADx0E2bggwwIDgtG0kQQSQB33UGQVQJPgyBnpeOGyY6Bn9UHZauiKPkXFCE01YbXk7iSDfvMnS5bNW3nIkDAFCW3+qxuNSJ//uSxOkDE42TVmwxKxu0tKmNp7K4rj/RCG5E2kurSt2IEd5gcvkMqgR+HWA6Sz1MXiWoKgGEneRB8WKk0LCUtIj2J1GO689SLNHImr23zZYucND51e6YXUtwJo1afLNwuQtQLKXxPT7pMPLPsFxKwrnB8Kp6JcHpEi8yXoV4DhnXT9pYJowGRP8Tal8VBHyCRjnHGYzQ78qEHOn917LpYJIE1pHAsoN+4GXwXGLisCTyuLxHpsVh6XMImFbA4kqo+Wk7FfphyqUpa2as6ritIZfGIk7y1ZjsvgNkTW+Z0UglEQaUXRE5ITqh47EohEIETo9ZUsXiWZYWVnCbLPbTW22UHuONrTyeJ4qmm0rUDjrSl2e23JWOMfV2stJr7rN4tP4CSq52PTpehGfTvcmqV1b6bkWQIHEZGn/7qJFluRKRKUWhavVvxMQvcki47lQwpqXo1vXqjeLU0obVTA3HW+pelZGJ5de2fEhAyPrhO7a5WgQJmHaFn8DfDOp/rF/zGfPr4QNQOeZWQRLjsUxWU5sh0AoH9kI4q+e9nD2QQsOSjP/7ksTqg5pRnU5MsN0Cci/qxYSPYhiyqZCORBUxwPJNmaipcdJLjhirZGUy2Nafg8MTBukEyJ2wAAcQIxNaD48ZMNnXBxuAkNS7vlggEQETYBQeiAsMIHQcpmBhaXxe6CGhCAGAoI0NnxAKGYOQWEjLgF9khzJyxM9KlfZ3sZZCQlMwulGBdZR0ZTCGnCUCwoBEXu4KDYVCsZpocIe4WuX4uURgVoqQA3sMvlLCCA8iEEIUpthIj+BpGYIQoDCepYILGTp8xxExlAaWSQszSxNZzGqha4RR1qQkzK/OlWHGf7EbhPmVaHsQpWHQ7PVEHea6sP5+qEEgE9eqlYEi4kqX4S+rpWJCukn0R8d6gfkimLswKc0UOiLhuTdaO2FRI9mMZVbeo8721bzLCfIBGJ9RntDbE9BampFMymzDajhcVartud4E+dax7VtC1/u0+9eutT0pmSoAkpzcqgdDkPLNKWDC2vtXS0WjWdJSpuyfE6vWRUCb8JbefBY9ceJJGZ5DIpThiOVoIKcs+mLLS58krWsdPjWlsXm9bPGV5kLrm0j/+5LE+YAREX95RhkXfHs66Im8PphtA5hmHQK5UCEcigiwZgtszaclmGljE1Xt1mEzK3OpaSno8zsmiEotc0bK7UbSbzH23urlDczC40dMDJVCgSKq74yKmRRRCmtS7KxEWm5NoPJsRaLeNKyuMosRabtwUlAABTmAJo2NEzpsEsiPmAqpkkJRiZa9SHJA5NMDBhGCFmlSI6u4WqNViH7ErckCwdYhPwwLCxpw38MQlDV4JGvuZGBGhxprjYU0lAm7R+vcdmHJ2CGXMmgaO1p+GYd9wYdoF6HDoFTIwLMbC4+PqF4Rq1qciK17tl0xlpxlQuOx2EZXDDAB140XIS9VZKekotXDqhy7GnP1p7q5cXjIvMuEqOw83ZdP2YByEpccoBNBsJQqEaM9WwKzJHbqlV2KI6LTdVzrpzWbr0POSuPtFIyaXZZdazQjPaerUTKtdtUANVUU0i5U5POyGC3FY2WgmgTQuisxXJVM9Kvj6EyC6ANRDk6KHs/pRjOfu8wMvYnAXIaYLdLJ1PceGWmUp9lwu37Yl8zvHqmnuVtb+13n//uSxOwDFVGbWmwxMUt2s+jNrLG4kLh0DUi4UwHk2UAqtjCSJKiUIokh7BM6bbErNHFVKlenQE+EHe0HM+9tzfHJASgv4ZytIBhWbmNmAavWhuEAnJkAaVOZiUGqgNWHwxEOzKIsDBeKFEy4VQwThdQoINvcSZIKjRMOeUzhVBVGwXOA9xOxVYKihN4kykaYCwCBGBAuJRFQaLAJMnid8SSwEYoRqBEQ5mJMtaS8STxM0PGILturMpBgbB4S6UPSFugAuJAaaFoa5EkFimUyffNRlD2OVcpFHuUx/oenE42nIeMxzvJ0ah5zK5XHsqFMYhaoeiIx+G8rFNbT5ueHiuVfAdw2dXq1IUxEiMLt8eqFRYtFOm4KmhNiGKGCnES3tD9dszadq2qpd3Umo7c5vojtF0cLzdz1mejIrI76jLreW6FafOmXx4OAtK/8Ci/PvypNXpUATDl00YuMgOwCiGVDp8ooZc4kreDT0HB6s6AcLg4GJ0nCwTmAgJg4wo+YGAhyMYMUs3gkUATIh4hGxYec90zWhN1msocx5fCAFsL6Pv/7ksTuABBNfW9GJMf8L7Nmxcy9u3GkIF5J+L8nIeYEIw9wOUDCoq/qHr2r6twQ5EyppOUEBzkyWwauH1VgbpSgYuFmjx8b+ZNad2dYYiW9Q/qU73Wr10ahahtrVz7WLXzSamUNHUVAKYo0T4s4R2QYQdipeYikPuG0xb6W0639xUYXZ+Rvo5du9GvS+XuZrtlb+YAWPjK9mNU8wosMKszCCkzsOORBgW1J3lCEZUhmDmJMgF6QwTGkUoEDFwpmIiH0kluGWCIVJoKZuu4w0eGigFX0Yh4GgUMRtn5EClulC3UVVJgRN6A1yNrDjNWnioiljFo1KK7DS+bU1+3YKiz+sz/TgWaAuHiWqtCAwuEHmdQPQzhYvokYIfQNwunFHXnj9cSKFStLpZjimCvXd6pcAnAnei9QxrpzEHPKSnGpyj3w/vc3h6dy7tP75OLnC8MEUoGVienPM+xSAEwx6FK86ExBZcAHcW0zGBIwkGMFSlMVlhhgXgC5AgTBUYYCHmPgDLRGLCwwCRoMEELkZTCQIeLCidfxVVNJCyhEACBh9Yr/+5LE7QPaWZk+LbDckv+sKAG2G5C1L7rpqtjL5YvfH1pr4ZKruJL0TAmnyRNCczcPkhsOh9YpFc4OzIyo4cH49FEqPmhTVDxdYhMtp2x3SPFZW8foc1OZX+Zt3XsKEL26xPexrGvtLllsb9c1b263V+hf2Oa+XHQJL0hly4hFmeI8QS9IFxy3mh0uyAtAwJTX+hQJtjTGM910DGk8xfMdSAMNCEUM1AwUEGgh5MSgkKEjgRARiICYQCmuASEgLBRgYeFTsOBV9LIIjkBCoGHoighFhUmJJQiaGNqJktbm4i7U5wwfXNcaxBTc2XotOw09Zq4YBT6gpSyZrS5rTjUVuOT8pDgfT5+j5/YZPGaOHzoImjstIYjFwvWK7LUsNPQRc+vef1kpO3+yJ3i6s3ZkWpNAqT0GRjH9IIIJ/JshSpaz9ONMn/XvPmffwe237cJrpDvLOp8J0+YlKspeKf2xBQACk7gKYMedLJhys1YcD3AALUCJmIkAQuZgnaQhWblsoKDDMapUFlMWdzklSqdxn9abAp2A7zcH6T2xrMylr6sm//uSxOoD2J2JQC2wexM3MOfBthuSkk7JQMREppcsNsIXJL+mSgrhStKDbaR5jrs0ilR1LZSclEGNdjUroPz25XGbKlPlOoP6ryErNXVTaEGm9XSLxQ9rZzm16vGFkc0iJupIKaOSqkIbhKn3kbVOagQ1OtuVq1veGTGJ3vN8f0HzmdkUAJjrOcm4mcoZio4EZJOYGuHQYhis0Ckc0MdMCBSRBMaHwUVGKADnhwc7pIDGADwEIGeUigoNAkJwcBrSW2ZUqRyQI2iU2QizHo6kRCxwGeuEP2+61ldtyc6C2aP06kE4QO38XtP7Di4oexodQ2cEYzVm5eHkelS8okgxUrQ2P0ax4eUh71lfXbN33IKWkF2p1hAE3QoeIoXDgqQWjl0iSciY/MJ1JQtCjf/5+02FmZT0c31pZ/P1tqdua1D/L35B5yyYVFr+7q8ROYoAAAmQR0YGczBhYQDhA9AIoAr0YEXmXppaFKMeGRGWmDhQVAy49RdqOzTwKeZ67+zoqCO0gYpI6kiIGDInKBKcEso3S6OoyPoSBDQcbiUJgNoyh//7ksTnAxX9m0ptJNmLKjAnxbYbikYqVG/r00+wZinNwdD8mvT9I8jpmlRcgPKEQLJlGzgK2QEnUSWHxWS5K0sT1l7Eq7LLEGzk81QYEyQpRwJYoWc87/UKKZCNXa1rH21FkbYLoA/5xB0ncmYSEpOuxBbfKaSs1GPTl51XXfDXpx197azdfNdeF4MaFakgGUwEM0gkMyLxDbZuR5m2IKqJypPhyhZKMoiTCwwmEZBJCwaiYiaAGMGfxqIImXyUFhiBAo+7DCSrGFNmau2+0Ti9DBb9V24u29MhjdZ9ZHUjJEDbZGcJgiERAKEBIqK5a1YH7Hxm2gSJ61VuCA9naJEDozFbDm17zPD3sUoVCVrnGdSMWlyA9ZtebTEd0smsxOYXjFDKKouSMQK8POa72FYRucpsVJPYX1IubaU9EBB4kVOb/3Zxlc8lezfVMSVjXgowGMHycEjR1pCVGE0sMNfCh04MyIQwZGKDTNOoQEqgW8juLkGS8Z/isQGcUcCo5laiRxKwMCprimjpJKAwEwHiEJKdhS2H7GBwydl8SjyIYAH/+5DE8AOZjZ9CbeUtwvM0aQ2sJbCZXMy1acBs8L0MqCgHaoFUCVOMCEb6ELC5UR5k5JcHQsDkHgXdxWpSiF5WIW0plWyLg1zJVlxczMWTQULErZS5l/Zm8bpN4plm8o0LgNqKiPbIw/yidP2pyO2Mfmnxvs+Lw3UdowvohgbJoVLK9+o37qArGvVm2FjVZ3O8Nzgammpdvzt5ikKC/zS0r+tpYz+JuDunlhWdG6SM7t4jWBeBkSRsRALINI/wQgGB2SOSwgY4UCIxKNvy6A4VOVeTK1qQupBpeWLzjxrPVvGsxRuLRm11KmauHSnPCoJh1LTCgrBCEJbfNFr6ItFVpG+QiuTx/spRkFPrx4rpV6JfjBebeXSTA6TstMhNwt7nU9MgqFqd6gSuqb8fXsvp/vWx6i8oou65RMsfdoRr9srJdmpXrc2esEwnm109VERnM436MZ/6AABJlIRgCiWgQ5AVunFLkFi8jBhaeRN0M4tAnAMEIaxeUS9NCUTjPQwBZZbejrr7r2l9O/FrKUc0pDB86dsEw1l9dK0mHixAPSz/+5LE8QOfQY9CDeXryngrasmGGtke2VlYwXRJSdcouXMYFCbE4Rg4ezuzpEGCC5T5KQghIvu4wXYIm6Mc1ZnL3X5dyb4QtFrY4j8UrKmUlJsS8wMF2aSNNAexLyWtiYOUelKDZ7J8+zSA0hk8nKqy7eDde/DseCnC05kCQSPWaaG6aYkZ3UJcRoOUSjDHC64qCN5WMiMpzGQolCSAS004YYgl5Rkyth75Krt6HrqA5f080FyXQ1GUS20maJ9lBlyPzakjvPQ/iyioqHJYVkhHdViEOtQ7L+lZ4kJhxEfwM2O1QOwvLaY+PAwRnRypT5E7HCpEQtjwerSkRqqj5UwmuJFdecjBEyO1Bd1FVgSMZOVid44QsesJCpMOWxoqGpYP1rEuWND45cVy6ezLqiyZz7IS9g5W2aXPHW9n45VmsHvW+HLecuVO3Wrq+GkABBu8dacPC+lnp/jWCGoK6IisWGsPVEDrYaJBrc1x0sEE30t/t+37gCZYrSMc3uMOpUnd1aF2Fx7o+YNZZtCcfuxKNtZJtOlMpXd8NITwFifFRIVU//uSxOuDlXWhWGyw1oNYs6nNrDGwZkfsI1qDEzVaco6a3xaiWligkJyIHRD5Kog+IT+H1J0UpqayrR50ENwbTMpE9Rcm5rOmTKEh9mzmhlys4uXGWHxVgeIS16qooSkxnsjCEGV5RcjilP9AN4987ghIp5TVLggAmCOZiiUVrRppab2onuRBrFSDEcxouMSHDQQMdATEU0zrxM6BzCRAsuZUEM/FAQx4GLaEwc/jwmDCQiETUVWFjIEKhLiypUwOEGZWWAPuxNnYcZN81x+1ULCQkGpBmYSnD9IoX8rqqiKI40KdKFkaC7E+OL5wTopmKMiXqcSIFgo2AukMaA6E4eUDRxJIFRBPTIhCE+SR9RXfOz4IoGtamAJjE9iockkRVPITVojFT+XRFY2Ve363iq7EtrYtGT00tRq0durXGv/O9c1CzjR9xiup9616Ck0y+Z08880NiuBYS/+yb6+rbQAAYBBw0SoTBJyXucQLRy4EGSEoY9KACT5mEHmZRMWnKjU2yk0IUwwQy5MzaMLCIUZ9CX2aVA7EDUuTIFDw5LDUwv/7ksTxAxbdnVZsMTpLo7JoBbezEwuwOSqPC3VVBzoYnV0CE2JBnLemYikPKMuTehiMMupRAICtH6+T64ykUBjCodLkv7yy6imWuG+VVtqehKUVEm4cVAQ7s0KE4M7DCxLNCVcKmazNSqWdeA/72LeWC+jyTa1XxafUHepnlKz21PrUPEehYQMDLTgcNwCDYyFAm1iB4ZE8TPa+fN/oAcwWVB4czcEZqGqXAq4IgRnw6DZCNJlsWSpMe4TsLzjwIu8uhmbeBYHA1SNiIOGCjdCXVgV7B4Hm1oaDPFA2lGXge79Im3ZTKcV+aA+bJ2YKouLnqsV8wZxeHYPU4ECkEUc8qXAYDSbKPyWoZNpbOjD5ZosQZH9ctU0yGoD5ClHDKqpEjTBRpZxUxplnzKKayHo76Hyp2tYipdW4oYNrgdyqyNo4aMVpd82Bg6TkFKoAQpZGuYBl7KdgUnMvgcGigsaKQmXwhn4OckDmABgMIzowEzoPEkYzQBMaB2zM9A1sYOXJdrGBQcjaYqCHxnKhRVAjYj8BPzahUTARuCAVr0+SAKj/+5LE54OZYStATmnrwryy6U2notFI4NmEgJfWacpZxEBoGquit1hUaZYSh5KzGeMBOAKwTJXqRIRUiullgOpJP2eEqsTHQkYwnSRuqYChYrP3pPDxbsOMW71/Mpr67HM7WxwMUjUsuT9k+ZrMrixyerpIjaqU9QJuQtExJCM9TlKSvRGtq7qr2oX92s9uqMNyd2msuEEJUDahMtayQIIde6zrBsEtjbfDaBzAJwp6NevMFZNujM1BIi6dLNWohYK85mAgUBuG67QjHJy+LtsgTkWOVRhpCUWVmIJ00/44FQHLZr8fxmjSWhPDK6RDDxMhqXjOMQCBAeWTMAoOb1kGzzZlG5kMUJ447enpidOS2xDT2jXdzY74eSTKt4efi5TZpYAjfA9BjsN4smrkuqiM1LUdBA1M+G9We0jdKuc71kJTxWy/xiAH/QAACrgCRNwHPwKF2h9kR6yYS8PSXNoJJjAILJrgJgaVspA77ELgQhmXNQCGBQFBZhKXjjlVajAXzgyBTV9VcveOjSwDZo2fB9Y+Kg2KMRmp6GkgUZEoakgc//uSxPCDnEFtPi29OsKYJmkJpiMZ+ISh+IHjt6179Bganvy2BrSkP1ko3bbXqFtSokxEXp5rR4EbLhCmImJBxS7iwPVBJR+3Q3j/eszwPlYxPEzHLJxvPFh7u+vCeYtpugTd1+5P2x3XsbxTDEcomaL0N7AjacFzM9s/gxJiBC1SVoZyoU68SwpqE2ZCmaCBIXdRbVebTqs6AC4YPBm/FgF6zCzwzQ3P1UjQeQx0KLTGUDJgQKYUCFgaNbRTMgc3ZgMMGTBARUpZwWG3AYCNBLoDBeq0oGkjVJmdJJH8RABZUygmLEQz+OQ5KmrX3j1LhQhf5QWzXNurc5xtZfDNd+8onAY0baqTMWl9A/FFuU25BQ16GM8p5ypWz7qpcqSnkeVbLae7X4us01XY9y79671PQ2Yo3buCtFFan0hftP2U7uZle3/ysvrn+HfPp61V82R9Cw9akT2bzVLdE+t28dLU527M5mW++QWaAojOfVUABSO8UTNBAz5DJQAf0DgGIwggcGPQKDytgCOKRhjKp0QC+zjJfrQiFWNvPDC7JbQFjv/7ksTzA5upoURtPT0DWLLoTbyyqKDKWCS7DWZUshXvlS0VwuTCw0+7duQ7Z3ZIy+ZpkDjHxobiGw7e1MX0f9acb5lAFyeCGhbVVaDRolESrHu24xMmIHTWBc1D9RU76st3MxZBFSMpWodMcHD6WMdNcDc8C3zC2KEHn27kK5GGi6AABmGBcY/Aho09GnFuaOEpnUUmMzOY0L5k4zOMjsDjEMhYweaAwXHVw4AgGZAAzfwWBSUKg9C9NwGA0FSoFMI/VSFhJ/UYvdGg5fw3jMxQMaSOElIrUShwqFbIkEoqp0/ACLNNiCd65WLPneV+y1+6zYbg0gisScypInrcCLUsPQbfYQwWklnvtAlR+qWkn4fyhqQQGyJFu/EHCprjSzSanUnNGDFUlSdejhwss8+2eCktmuLM+kdm2e5mEmITFnY8p8EsUdwvRdWYWu69sZnu+H6sf21seS5f/jgizrOzKyt9YrH3u6LC3e6qxKEAAAFQRHxsoCLL48+nNGJppoYO2lURMRDjAgYKgYNDnuEgIxAZM+KjAApGdAkzZQcQhS7/+5LE34MTzVlSbLEXC7WzZ4nNMjhoHWwIBpTsEgUoZmBHVIuOEAUpm26QK98mHAqKlkMD5bLUWqkBdcVD+wiWMqwB2ZXXxo3tmoZkwiHhdPxKYqbMPJV9rhu/A31qilbnKZD1MdkZkF45g0cYTnV81kpIzDmLIXVxNehWatdzscqbEMSuLOyWrYfwmLUnkJLgJFjQWg5cBM6Ezqx0w0rM8BzPSEwpBJgEwsNRGAgYKGZgAQbIVoCjDQZVitQ0OBUXlkpawCRpSICIW6sqM2MCZGh1OYIHnOVaymeOML8dJRJqKQEJWWEnbHVXRldMOPs2T4LuCgrqePRjiwdWfvG3L+DO7cWx7Fh2kb4cBgKM4n7Ywesk8goRQn1dk3DCFvoUq8kQPG47kZo0GJU7NRVeMp2qzqCR8n2iCLfUWRyuFVWeqpNuMIUtrXbhbkRf+Wx7XvE6tQAQQVG8QgdpDz/JyHwoSsYi+XlBWCMrIpqWlmzd6tv8Li+BMt2hh1+jfdix4Em0U09oLKMKErKMM0pHMh6Vl6YQzxmmYgYrkRhnH88e//uSxOADlZlzSG2wtwsXLmjNt6bhs7NJ2hBILvDAQZvkpBBWMtNOSZMpDs+NkHY5m2BEJ1Eife2iWmDhZgAl3emiPlggJp9k02B9JrwuiEd2II5Z6ZqZO7YxGD9AAAJlFTE0AOMWBxgaO0LRqIMbMCJYV245hJAleXSBKhd84TihAimTuQrMYovOkmpk5IACDFETHIT/MeUeJNiphRrDOo3673GWCdheDLGXuiskv0Fw4VBcXj081Jr64UpfC4BxE0PtibAfQpBVJl+apzQUucxdTLlnVTkeGHyqYmBSGLVhUqfUjHBhvzocH7bHj0P4yUNkUxyRbJ4vDnIodsVDIQhgVqoZGeZSrhYcYCYU7Va858qtPw8mfQdpjsqED8TCHG0sK5jOtTIeT9/WGp3zYkYbxqQ05UPhv2pXK5vRVlVZD1VeMyK9TxFlsTDUuJ4CGMC2+o5xJ5G42qoDzDmmKz5MQU1FqqoAAFu5P0hevtIouGhA6SmqvX0TV45Ky4dREVlsPIzYeMz5tJiiEC23cHQkaGGopVU3X6wraTKHC0lzgv/7ksTtAxKJo2hnsMf0ErRpTby9eMwkMtmE8bTdDNHIqqxqSaaVSjULlts3phyUZXLqQT6EiPI0TjBMQHJo3tExipJLVJyiclW6bTnPUoo7in1b1eii4wgkdam3SaOprSR4qyxB8GvJNNE9qdRTbz6omzku+W9dWw+hQQISTezGTLU+tSLExNzQ5rhWAiBduH4yCjRg0QmnrYNAqEsrVpxXoLbGvMyA7CoJezucii4yToaUe3hMVigMU4/RYoaD+RFROchh0waD40QEofZaMMkxVZWQyqvNZ2KuQMLoMU5YkLk7IuYMlNAs2ws23GBxh21MlKJ+yVlpDD0nsnzSxJDOgbNmSHEAoFZGyLyEzEBOFJhmKnZVsudQHeQTYMObJzF6QJtupVqefdYu4/5Ffa0LCRyLgdmbIWHlQRmwqIC80IQMNKTIwkwA6VtToDGoOPshakQbL2FUOCG4yIZLtukJBQAJgglHRJ00yAsHwKYaksFCgMMBSfjvpdNLiAGLVBGlK6YIDQIaHlgnIY+OAbTUhlmEQMnVCJmGYfdKH5U3JAb/+5LE5AIUEYNebD0uytWza52HpanKVYWqjVy4bkIIKXFCVYhi87PVxZo7GcI/Uobx0tjAzsikciMvmeMq0UaTOroqHs6/AmeMUVmy5qF1OzQ4yprpyVr0+tPoDky3Uy2wxF9W2yyI2aTATmpOgcamZYqxuXA6HK1qeOc8TRGsmpLn94r53Uvmzx6Z9zfiy+K09QAzAEI4+eOBBTQlYFHxnaeaSlmWAhnBUEAxNWg4AauZmYoJDASg1gdBysgY5JhYyrcv5EUQBK9zDgdNFyneHjt1zQkRr4YXqmbE9DcsYMdNn1JA0EtyVKt2KPmwGHoZZVF5+QzMReDCVS1P5jmRcQfWwLXB9QF12GmiaexOoilKZytnrunOC1e/vPJWT10qvbMprehrbPAyVOvgUswMhqR1JUxJ+SJJYXanbcbJIoz8z7P8zM+knycfNpJtukr/yqqktqTY7W1JDLWdagAAGVTAEY2ZtMphTAj45dCPRCwAkloTGwY0k6MxORYnMHDgKDMvMXBjezsUCAYFsaFigwMEe1+HVCiWMhsHttB6vHEN//uSxP+DnemTSA283Msss+jJthuQPSRQRRCRea6lTloJwXAwh1zEBXQOcIWsO2iInyCoceHufivS8V6G0/gRnBqjybU0J7adra1bdxixpp4uMvNwoHgyCzH4sSplmXTKjGdbYGpVOL8v21KrmzKKctGxTOwE0Gj10S3FBhN1RkVNVppUVV0E+/Lz2cPdadj4gfZ7S9M14jWMuaSTENJIIYAACoNGjpIU1M+NkTjWG4S6zGjoDEBmRmJAhgoMBhNpZg4tBxgCnWoOAv2zx3iqO02DWuKBpVj17vQU3K4cxkfJqYLtP5IYeaNALvwrOIuaramPJ7NyXV2xW52kqRmvS2qd6mb07zA6knC1DsSY3tI7qMWJBMNUqe1j8FzVZsnoe2Cnq+TjdnNOdbOZmWl1snjiPvrhO3xNz+ztvKzuPpzGQ5rdDe85vZXWccOOIl4UPJoAAHGjIzxAOJMjEjgxpDEt8ZHBc0NETgEDiVIBjMxIWAAOAhAqoI8cGAiCgSjQclEoLI07E1hpANIX6cN9UIxGQIsM2MRzCexPv2rubX++qv/7ksTog5oJn0RtvRdKwS/pTbytuMFFAcQTJRAh90oEiEtfafanS1ocpJE71d/mnRqhSHbedkFNjDtW33dStA1gVxBFFmeKaz0DjTTyiyUmj5lvFRufO3E0+leDTG+Wqrt8jXQcv59b92w9b45JLO2ny7T9yelyr/y9f9ZdD2nBoeq9AHglTPpAjPgwxcuP5GTJxsylrMsGAVBmVjwZogIqTVMwJzOQUDJwsOAKITTAooZQIGEhheJTCnMRCjAQoBBjBEnDJhJkCwyWRuoOFQtNOGIFWPEhoQWDUHjogxfk4Y6sJg2JIomFOoyApI0RmiWYzzpgIIXqNAo5aWWJshu43g1jYy4x7xIsr3wPf3rqONZqgfWH8SuItXsvw/XvRR60mlUP6mPVEDF+MoTp54YIECZl7MVbqiKqltW9l3BRLwYqM+jUlHItr+ms/ne+lq9UyioAAKHYEE5pcWXKMQETDSgv4YAfy8wINVTMRDU6CEBL2JBhgYgsYmCsrVWBQGqqo80hqzRmUIwS9bCWc7FoOMyDqsadNaXeF5LmPJ4dyxL/+5LE7oOXzX9GTeDRgz+yaIm3pyEcU78+HjcTN8lKz3kYZ9zwNLw7mylqYvauvn0c/CkozyWmhXi7z7q6j5+X0W5lvZes9i0eQ/WJm2Tvfv+QvfXizAbvcvevbJ2LJtIgSQkOpqSUZZNLTScgRRJrbXx2sQ478lb//P/tg1QKQkoCRIemOH2djiZiIhnCo2MAMyZ7NhYSpeGWypuJIFgIYRwJ2CXAws1iMVjK/CFgcPIFY8TM0JMaNFABuBQLIpCgE4YgCgMbwCDj7x3ML4GBCOSsMQK08AAJcBMotWkiOJqF800QuGa6/ZcxQpd2EwyN7mZKMxx3JZDDfCMgrBIaCJPvLVqzkff2fuRCHq9FG33lkim6CvHI/WnaKmpaWdnoSJBd2cZ+epNSjLL4buTcg1OYS6zNTeqavawx7jnXxaLB+8pq3K6fcf/OaoKK7fmLOcVwnt40te9Uv1eYXuv1nS41f3ljbNN840Mtxg1arOSvX8/9j+VMQU1FMy45OC40ABTk3HCgA0G1LGUFGHHGYFFpYYL5pfso2FAZpxqXMEIR//uSxO2Dl0GHTm29N0PWraeJzeiZtcqWEsGHRrOHGJq0s2rQQ6kqn5KHIJJKHH9FGKuXCmHJPPfRP1tActVewGqmvuHbmYmqz13RkhQaa+4/rDvBxv/c/lnxZ9q0YZ3gd/Azj7rWXebjiDLPXSmb/o9hKJ6kePo+5o6Bpg6BhvDDz4cVMmO7VAYFS3RDbg+uv8xCZUuxy6QQhJuS7HwGZAM0QowVezIs7C3xmxEzsKeVt7P4OfYzYaMxCUuMZMu+oSnma4srjPjs+d9W23CkzC9H8DOt0xk2Fij61HN3jHvhi4kw7zizdacz2LU5xA64ZCxdkDRU4i7Tr1pCtcNbkpNW45spqg0/FjUIJrtNwaPoUIqbc5ib7uIlqE1EMFALx+r5NrKoowLLtR/5T8fGtQAQSZDBIQPBcU3aKDaYGN0AY3OFDCTaMToYxAIjC4NM+iQGBMxSfhlsESmDjMSA8e5xWB3FFRICiSBg0u+GAqWDBYtMKgsrBCqIKNyE3S8DSx4MDA2skSShLcgRSPEAtEazDboIQFxpOyY00ljjl/0wJf/7ksTXABR5g1RtPRdCXy1s3Pany2wGllsvaO/7qv9HZuWFgRNyQu1Kdw3NVpVam6jY6CzL24wxD15435uwLEZuNfO9m6evkCvyp/Zqhm41fwlPb8SpKOnVSmWI0dWvFLAirpwb5oH8LBXuKqVEsFyXJwHSi+q9aO4lCDc37krkjK0xUU0q+IhkSSGGoWYNlY5QtOE1YuXT575FCro2ax83h0lxApS8pD37mhyPAMDFZy0qeyJGeh5kyUZoCDpKYOPigMZEDlUKFkctMTL6VohAhEhjBw8jdTDgtFyGEgXXLWBAAg84skvwpxiAANLUXXiKzm1koyDMFh6xXTykEPSrUrwHlZ0Z7VGfZXmA/HLKKZHKGKcD2cmNSPIT6VniJ+8z3WF6KxsDfilsZxCl3PvUETC01tVpb1arXdRaFHPU1d2stOJe4gLxMwkmQOGF0qKNOssgy0hF4i7XCeKx5lEPqCYBSo/HXr/qAACwaHnkuBnJ6Z6PGJm5s4WDn4w4BMQFQMhGkBRiIOYiJofqQRsXiNiqJbuhcPMJB1osjaOCh8X/+5LE/4MhQZ88bmH3QvQsaIW3oyKFGmsOUUXTLW7wSYskOHMDxYDgA2GQaaMY0MMk7yu0+LeY+kNPuEn4KHVj+JJAqrGoErDhsW1patvNFYl4PnfQdv9wKQJsyV3f53cg8emJ9R8VvX5vW8n54fum0Ln5OOYFNdNMUYQ/NTu7va9FNPKay1+8Bsz539oPndm+obf4+Ny95gGBB6f+im4HxjgmbnHm/phqgWCgUxkeMPBjJy4wAISgL6DIqDiYwg+M6CV/IjiEUBQKm+3BWZXg8EQEkK8xg4DF1hG9MjQSUREhxi78RlJ5LGaYqqirbJWWwpmLTkTIagKg2vt+ncglz8Xyf1u7pt9YihMANAo2WPJTV4qu9p0edICVUS8sISEoa/FlCheIwoh/mgg99lhgTK3Ei3J1kVSek+pHqV6iyrLKgQF1jC7OMFFqhDtqGJ6Zk0licyQxZlmvd1K4a8TyTCbCI/wIBn/tAAa2SiGk2oQF6IwAEQY46dAiDJm5uFLE7447EqBx1eOyu2tDdG6KW7YWO5W2maqWl6S0isT9ATqk//uSxOKDl2GBRk2810tDLikJthvJRARh1FS7uG04Iz7kesRxM8vYu6x2FHx1X0AdbLIIMrqIJtqRlhSMqh4zyD0klPxeoIe+kHPoGF6goy7bhfbrJ7sJ3OtkdWJJ+c1ESbd+fFZQsxgrIGCScSRsVjA4sdRITAjAsAiFuDIbLisnSYYn/WJMEbQoVeFz8EcCo93/h48ikGZo2h0DcqUo2l/0slYYYgV32uLFo20afBMsSucd27MNQPTSWZfpl8eldNL5FHZPSlAIlrGO5XH8wm6bsNY34rUhiVjxL7YIuzzF4IUTywkgqDOBEdBbGhd2XQQsw6yiA8QXniJj3CEaPXUqByK6hrPNKTQUY6O0HumuxxHCC743oDg7Vr3sOW3KlMjiScLpOKk1gfFi10FQjKQgmAGwTJwYF5EmJZYHcRzo8eRKdrLzhTsfJTMd2dRUx/Zj3qMdM9Sf2fuv/rduX6P3bXWNQgOwBQOowAJ0WMctwUYtUA4m4hTUtmKOAnSlcmsxMtqKZS1iKdJ5u1H8qBVNdX88CI16UiEwIEy9ea2Vsv/7ksTjA5eNpVpM4SfLNT0ryYMzYAVEaBlGRaIHCTfNJkzBqdgN0NkPmaxCodI4bOOZMKElvabF0Xtl4jVGNBSIEfNW7w/Y2N5GZzCUMOvDcL1NKSiTUdTnhKRJrJFgrYqe0mTQo21Gj7TN48bk8YjvtOIroT7pD/t7ycUMzpSGFxBRcVBqjsFPqIgxDfVUjWjJcqIKsgJdyMLiqQdBozouw+0FMog6bfjGXOx7LAjKbZmeVSIe7kP250HKbyeyzP12vsSuRA+qxoLnDhtwm2SlRx0RDM6gCtYdpESAeRkIjUgdTNHBwaPKQZrrTA8dNoatcy4yVoy2Z2eUrn4nz06XLUNbfY371gjWdR9hl9thnavuK682YprES76FXSVTBxEZSpdgUk6A8GUmm3sX2OZs+lgjadcvOzDRVdCo71cfWWtiaB2iZ7t+ZozlI3o9tBd36zTU55rS9qpMQU1FMy45OC40qqosEpJwjYHNWn2IuK4j0ULcSZmH9Q83E62NhHXuBl8qlVK4Kl7HeodPaR0JkHJ4bD4oMiqPFsssc5ttfEf/+5LE5IPUsZViB5kbS2s9q0GHstHPocljI6U+zwpLKMrUyratPXktlyPpLo6zkiyb7LMExOWxlK0IxdyNSVx2QTw65jtWuBaDJ+GJElyxdzcanOUU+ttygKRhQsQkKcl3l4qAS2aSMOBa1LPhUq4wPBY0t4xVWjFO0pL+2pQQSWmkV9X+FHgZt7BCLCSadGic7OlB8HGX0/mxyhKFrGmouxoYY2WWZSy7jKd1FV8aMzQHrULanpaGkw527IIVpYtJNgYfqYBFSeVB9prPwOaUjyZ5JI32YrCKdEyyZEM1omqtZNTAaZ5pVibo5WJkXHnITBBRUQuK3qtfc05MrKy62HIIbfHPcbS51qt2ZgVsLGIUyYeRr1a9ei6FY+/Aoo9S13NveaXaWT8PhE5T/s+aAABxRYLqpaoOVxEDwCkOEkCqgHoMaKgSUOeoSlS9gYgRESeZa6LXqaw5TL1h4Ciy94XJE3WUAmCmlBygU/RUDGWvNayZW7axLsipoFaxCMaZfU9Xhys+03LRFXlwBhgXjUlJaiW21AqJh4rNoomMLRbW//uSxOSCFhmfZmexNsKZM61o8zMo3Wo2i6YqS5KGvPi++JHHCaOT9gnHZlDMR++sNBILDUJ3VesRE/38iTYkOdWuLzvCCJTjQNiq+J43XlbV2oZkvUPNssnAimB2CxBUHBeIdywYJnySzWTFoooeZPKiu6frGYVMLd/OGZIoiT8wWv7W25EUMYg1pA9wVhGEAREEpQAAGgmQF2FEzABpgTg0B52uJ1jzqyFMbi849HHjljQJNSvu3WD2VwtgTAzTi6wkLFTsrqS+qKpZIsI8AeZMVA/DwLjAdege9lOPel8+XkE8qck1YThyW3XF0IIeotfcYZdVruucMMLThxfyyY0OCM/faRwFitXOYPU76hqG0D8Dua50XPt2vlZyLHrzfYnYlbF79dZBj0aAyMBA0Bi8Cdwz7hPNur5SMRJZSqIaGZ73z84XH3Lg/XlHBBLyoBMyEIBQwzFxh0UL6rDp5qDW0Z3sp4KLRsTvNOp1G2D4R6QMHePUCvi8T8RjWsqhvuipyoLGJNLxkBIsqVx7iSpCREUkLaBvZAU5ckQBYhVKmv/7ksT/g5zZ6VhMMH1LDTzrgZYO+EIXWEFoURYGcNyQhU2S8GCVRBc1JRiTPtppKL0E2DkkS9CIuSkQFLCEdSQEyMJk0fAwjdPWBStCoo2Zn1yLkA7dNqTQkzKyGxT9RInEWslpqiWzClTESJrECeZUoeMukiV+IpkYlM+uGqyozY0vbGLePEQZsypDgoTBNZhEz1/QQeGWktAY+NakrOZlwVdyll7MEhFwKxQltE+p8ejLpBIa9taPIhLadL5d0pYjGYagaGakAEgqkssatJjC18/UkcGRdXiQisS3SALi2CouFg8NqC2gDq0hCWOBYMjk9hXWWoHI7JCozbiss4vtxonHpK9njhCK5K26tEqLhwdlz3Uc3u3X70YW0Oo2vah+yKiH7GYreWOvY8oeMEBcUJY7ynWIFKhyWvMdFWREYkrERpjo7eolqR1UmniNAAA1VgztQVM0CpKwCsquUNQc2nAWUYESgP49jEiY06k4ZEIDYOLnohw/RBjLdkzFoTCRQo/0IhKYjZTp5+fCX2o1G2uZM6shLRRFQLgYFZuQNEj/+5LE8QMX9aNgTDE0gzw86wGGF2i42yCQJTOoDwnVEiY0DzRgvihQyRCWTck2MTTjjiRckbD6679FkjKr0Em5pJWjTkIT1pE0S7mWFmpddA0sujvarNbvdQYQO7a+sNTSQ0h3RGfUNMJXOQxNKQqhJ6ja0yXIw9beYrBCmnNIDRaf+VlFNueFDmbaOG7QVaW6CEkzxTiomgFk1cqLt6ztuip2yrKjdMsExx6HYeuJqLT9her/wOtS0/pswXB5Fx1I0G4kgyDgLC8YD+UFSxzyqNQzLxYROMH69Gy+gKCuER2hEGSsd2o0Qg8ZRH4IUxyUHlXdEG00LgWXe3A/SGZxTkxySKkIpbZEqAxCRyPUV6PO/pNtKysUwteLbWpQbpz3wnsHYzLnSZUQ0h2krWQLNKzfP9LLz+pTTgAAQEwSgfX2oYSQH7AgKhAA4AAILdTtTckL/Lwd8lE2ebgKea5WhD3U8cepwIu/cTgBmkqeZpEcQpgQElRyhIeeoC08iyOLpitQjPRTUQRG4goE0koLEbcXrJk6MbDpCYaaRqpOavw1//uSxPADmKWjWky9L0MHMqtFhibaqZKSG1lnXl4PVK3U6R9t9Y2vtWqVhEvP1iGToAeEg8PYaRlM4EmsTDKZnkkR81jp+/i3b2WtnzVjplJFWPFD8LTNyvZc6Va9Wppdo5XM0snbcdzqTPXYtdcFhR39AAAYkAty83QJU4HZd1aSpGlsMRoUcVTPnS6Q1Qn/rZcLFgpKwNmzS5Ao4IUDx04hURzUlJUtWfH09xsnuZWE+KNaRTvxIKii9aXz+E5PfE9onukA3BR2Yjh4wLBUWFxYTbMDeHWVfMTQFxSjUZ6qSTkUQoXWPyBAfikYEo0IUkMUZY5MiCliIdYOGyIQtFg4IihRfSYyUUifzVV2UJCAY9ARtig8UVbXqBETojiGTJ9dPx0kLxSVWPyabZ//9dUAAGHBj+FAxYMJCpwjQJT0xEZhahQBHyDVUaRYyCYWnYOxtNRm7fpcwvSkhJFfTUZcMoJYLIXjDahy7aF10eo00lcrtovN6lwjoxVfLrNaa0uRkTq7O0JAEUcJkK5CFDMsmKc+RNkSXVkJ6YbMhpMz2f/7ksTzABbBmWNMJZOK+LQsqPYmOBLWyDPfKxeSyQdZUq4Q0pTJWnSoYkIeK4sSTl0qyfLtVRDqUysVKoufkjNPMfo30NgPXB2uVwzMD/ubXF+GLtkoNEqSSMGjYZBebJM8QikKRhMPNbmLF4nBV1jY/VFGpSk2VN5vhOMaqEspXGIdO8DlVDMhKDHhIZDKDKBYG6IZJut2DDiSaz4t3UXWY0pzkc5qRRB62kubJZQ4eaj7aWUb2auEv+C2ZJ500bhuef57JlnrIpCyOSNBicTdpsMOyp/5dTseyeyKXG7Uw/GnHsaodQWLsBDfKRdLL7BaB4RT+nNAdMICGSPU7a7iM7NSw9Kk1YdiJ92lOJxIXr/YNDd9RvrVlDdmO56nc259gDPCageUlYVTyh3sU62pDwzsBwEoGmwzsTjoKsxD7etbYxSV/L7MU6EUkqNTxdUEAAABLq+h87TV6t1DBtZd8UDDb+K+9aMzDkNr/QBNNYiuPp2dryeubhElxhW2bD8qvj2NlsKkAzKpKJDi0vJHkofsmF3AxhYs+EYlG9Mh9kH/+5DE/wOc7aFSTL07AxO0asWGG5qF6FUFSRmAjTl1wNHSMRHUL2yE1NCQsWTQR21BldQy2u0gIOVYUIFUac6NKLCtN8Io93tOISpKVLjABmIMkBOgT4HD6nQ28js0zFglJ9PmVU4RbRETBCxM9CbLDUfKKyRVEu1cZkbH6frCOjnfOaQJggNPLPoIlAy/hF2rUyiyVFH6S0bqyRV1C6MaS3omNsSnxpJ2ILtEAubJRk4gNp/WSachTDJC+TIjYuzCKIjnrWb0GRTN8wZSRPpgfmXAVB2occiCTEaVdlzJUuXOjxQoFTlYKOvXZ2TnUlH6HGy+YVcnoc0Eh8eRrlgGWrF26TiqUUZMOnhlMdU+qVzCmgLtdLDc+jvocaHqaI8SWk/C82dXR5Z94w+HJJ8mYpqG9Xer33knw28zcm+bfvayEr/R8fA4gUSkP8Dno7wAIlAqFEkp3mySgUZwUFcQSabTKqpXqrZbOTggIsa6JisNTAdWegWdybRKIqyJtowiM0bbiQMrqxnkkY+LxZqCcFKJfm40mwjWYZfRAwRtVun/+5LE7oGXSaFc7DEvQ0czqgWXprmFJrtE7JggYk3qoQqXfFmotton7dwAb0SDHg0YY4kyO2kjoa4EayHImkUj0DDjMYccdeFApTDXQBBpM8SPo1IECro1A1kcFMzxkWgGckkCJu6IAAMKAmNYHAhwIKFLUDAS6GuByzMEjHTLmtaj6+tF44usV3S3oYfoX47g9Pl2kkEkdjwOhQm6zuCbMrasQsqD4bB0qYcDauzwVyQLybqechG1KaqmgKex7Mp5E+ZkvAhMq5RM5IiaGkdB4rKENL0yn7Afx/Gkkr0IYdHBPVMF5KZ1cJRGVk61U48iDo+EN8tF5hcdIMLR+vKY5wqI4Xl5zZfAylgHhlkTjc5PmSUfg4SWgbFGzwrNg6OldnlhidAWB5KYF1hKVVpew5N1ZbnXyW0fLbc0vSHnFQqEmryZuyBvTn++/baVeUGLMCnRCuAs10lhINAQkJKdrio3PpHWGQtgTvtclwfKROhTD6NsxGM7j/b4IUJuMVWN7oyNMDMuRcZjhJgSA8kQf5KEUcSpOxiKsJ9OkSqUwwrQ//uSxO8AFFWjZaek08OatCoJl7I77DjOc3GFuZDqfjbP860yZEkRhQoYSpOVlazsL8ry8nqzwkJKao7P1JOWD6tcLYkCiNZc9Jp7eiEgqR7XLmBxKqp9xad1MXkJgv0PGUty++nPMov5XXV/je5AVW/H5ymUpams7+9Px1DgDKoM8QlkjNA48S6XjUICBUrZAIct+sdg7LGPxWNQw1tTq2smZW1YrjhXLPhI5Yj2nVj6A9UCq3CWVCww4EttwWtqY4DOpFe/7hC2tQojaU0qziJEjJMPGlNBIh06El9Etafx4gKaOpOWtJlv0gSunn2klL/YeOXvjw4LhS2x88TmqYoUwSy2hF2ztOxt/sWXGhHZThPYQnlZaUjmZLAKJ4LoM3fTbyKA7oeylNcq5TOpiGstNFdHt2Lb3q/jR40huRAgAABPIfAxAZJPIUEBVOkt1riZLQkZbClFpJGqhcFwQhQn+rmxJFiE1ip1JKppmM1Mt6pY6KbS+iSZliQtbSbE5J3T6LCVT9gVY14CEaaYDc8nhP4ICkvUHw+icVjD0g9xH//7ksTwgZlpb1AMPZHCyjNrXYexuJ7So9Qkc5LwOn5xCoWL7sGaAWsSXVv4oVeujfUGcRyIPJVBEKWvkkSvJPdipdRXw8FSA0OCMRmjggHVXmFK0vRq3+IZ8hL7Y1h4wPTY/JXTI7Mi5I/OHSpGcHdCvadiaeTOjs2iUvXsfP75HspAAAEBALeeItEloswVGlGumUtbXW7jhW1tNmwd6IOfKoJv3mlQVDumR/0lXFwiD4Ozq+hXlCWnhCPkY4QgRlmUU6V2iSGbB4+VfhMy1Lz6RMqZHstNlRQ0TbHcd5pBx1HU5H+BqzpcfhWIbsUFOC9CuuWLzt9MkhiAJ41moTyiIGwxEg8UaIggylYLoQKJD7a5AoeaokfUJR9vRNMunpcVD5RyAhIGLIoddGwyhIUmHTlGFFEDdrJnukkAIAABTzRwDE0HKxjwC+L/MeSpKwt4zOXDoXfxgKBlqRGCLUQl01DUDv/Txuq+NLGpHAkbp+kl4qOjkWwjcN1oHR+StA+lgJKNgN1xEJg4LjsxEQswnBUEi54Y/GrUkg/OUb1o2nz/+5LE+ACaCaNU7D2Nwucz6zWGJni6SWkg9B8dUTlV80gbEo6LKREaL0Rqv+jKnyc6mTx0A9UltnDKGpcVTRB89NKpB1KywKSQ0VDNo8qe2s8+PHunplq9Ow8lXMZjEghK9efKWZWrhRVaGWM6Zns+3lvO4u6M8CLFkaXtmF5v6gE8rO6o1aVJxI4K3XEOySTluUpzhR6gRQtgsMJ4ylUsQGJ0iGSNqIj1yonTximlTs+Umxowd+C6neSNfgwj+fREoJBDeeddQSoTgdGknDynIB2eEgqDkyPMkSxNTEA6lSPMWuNKRecHyV9C6HiynWsE16zKhPc3OK6bQmYiHxNKq1U+2KkqVSZvbC+dMwQjgWpdJDpLubLD4tMnfULzju1wxCJZrykHTcsnKYlHhGQ1stnUZLjUexaIiQ5VHqAuxeh2QqQx/XrVBACKuiJAoVYDSVpHp5DD/FG0LpYIAmDkgCaDOEW1TIRXU8YlZD1ZJVJJfvYwegVwK0B1cTAaFU5LlTMRllUP159sWNy2P5FLiV+AXMsGQhR3TiofSqIHLaqX//uSxPmCmiGlVOwx98MdNCqNh7F4QGnktlYnI1Dq99GdRRHO3PRILx7EsXr5s4XoionfxSwsXrlyInnkP2RoRmg4d3Bibk0eyatFRXD06D1Cw9Xm5F1ccJGFSVUdfJktL7BmJZtQrEuu1tejv3On66zT2et6lzvp5tgAr8C5k7QxGQwZYiVl3wgIXsSaLOLRctv1uOk3IvEzd4YzDS+V6O+uxrLhRyNO9YT4gwAB1Y2jy3KHp7B8LyN7HEUmmkQJPcwYiIvurOJAjghpQgoQ0vRK36yVESMMsV0iEW0p+OVCHHWLewmAqRvmYJiS0UwVBQG0SBamcxhBeDXRR5H9llVT1aIWwuSGxj/Mg6TjRS04H6yrCEvYSmO6CP1gVe3qiUCtUFMPluMqlUu3T8+oSilEcRIVEI83CN1FuTbILiznqtkDQKIDwsqSRmnaSA/cFYcqaUyr7v8nJryadGcKv879DPW6AAAIgAAl2OBQ7rsSgdiSmcUmYOhTwXKkmgJyA82O8r1i9bSAupTo7ZYMBmZpflrkyk8He9iqKS6gJ/hh7f/7ksTzgxfdpVZsPYFDrDRpBaenY2gVVpYsW5fAZJCTJ95Q8qVe9LGGNMLG7mQ6FU0R3fA6pK1kU/AiEJU2dTRQxeN5fgshi/NxWFzSlr2bQPIlxOch5xbihYg1M0e+zpChrb05AiJGlVl/OVatbcb/hnle1k4J1FOKAAAYqQZ0QP7RPR7AqyhoGPWQzRuIY7HBGDVdF6lXLoipdqMO0oSIDXPBsW08hJ0msqhbgs1AW6+UGmj0Ikbx1DsMstgWgVWrQQhY+7HaW0pSuHeSyMrjCRJeAQompinCqVC4kqL42q04Voqi3LagOw8LkmRbGTxVIMZB9q0xj08D4DBIFYxCE7eSFUaIjJt4qJj0kVXRoJcIQ7oiEfHpXqHbMnxweoa1bCgLj6pCPmHDtItqdfnMkOtYFTMCCzjN6GoanES83KLxdjYYYK/Rufu/Wm7SqWzO6v19UwWGNIB7vsBuAFQ48uIZB0wwg8ERIT+JQs7X22zYlhWPQ9L3CRghivHIZbu7cjZlW2xValxUj8S6HD0EngtbK8FMOswzJLGDyC+EiA//+5LE5QIURZdZTDEty460aQmXsjhoadDoZhP+nz2BgsBG00qi5KwgxSiyF4QyLGT5bmxUGijzeUo7DFVi6BxrJzwV2hxvURA5DzY2JWHaq3JRxlC7P9iV8iTeFaq4L122rVj4QVsZk2Zh+hKX2i/rMFlpyZKpSRJcWk2sHwRNSlWX1F9Wru4PtrY5/d0+xT8zP+n9WezqWnpmWYIOLPTW73Symfmf2HYpCIVFyU9mEGAS1JHR/XQXg7zsspQNRze9yI7DEdsP0oEd2XCZlN8OgrDFKp1GLq1F2qjRKhvWFdim4qkCr286IR2qIp1YkzxfIai2xDiDny00fk7SapbGB45mQhiylYbK6h3PYwlbzvVqOUDI/iv1FQ5Gdwvd8oGRTHkytbI5b0swcMlQ+QrErJll6EjzrENr6p2XJjAg2lostuko/f+pOpCuf/tgQiwlMMQqKF9CI/yVPfVUFWiSUk3i+Eo3bJS1HpUsUl8C7ufWCU2z1maLD1SYdlo11GaD+ansNOLvf1hA1q6y+nMjFNDhSmUQbfjSp2LayTEzpZxC//uSxOiDmkmTSiw9k8Lgq2mBl6Z4dG8JrfaqpWQSOmU0DRiB0nMRLoFrXSdldh8yE/HCpIQKMmCBVGgJ7RymtiTpFlegg00rVVDZRQ30nrlQt43MHR4Vk0SSxGdnaRCVOlwezT0E3lGAxQyctqGvPVy9w6dchQgAAABWqjEoXJqmEIgw4QVEvYycWDIIWQRhaydLRWtJ0FAyDXEl6TOUVwmqJFWaUNvZGscL2ZBwjonUEYjBdxbx9BJy+GUOQPsk7adBus0NPrkhDOjjJTQ31YuzlAjIw5oqaCUl0M0y1CW5OH0XpDjhVZ7VhuihSzCrkcL8GOu5NgJ5ynRhwPzwlH5JSkw9HnFZoJCJw9E02IUaahHXxD8VYXG7468Y/KFJvc1IKxCK+85upuxyOl2nNGy3ceLZyQj3FxLCp6q9Or1DeWtEku1FL8rTl7avMXeNaVYoxok+esrVAFOUxTT2WCIFImWKgyuQlDjJdtqsdZm+cR4Dk1evvJmvxFpayG5OjfjTqYM+c8OKVVZa/JMVWlDy3pU9KKqfAkM0FTVjUNN+/v/7ksTpgBT5o2VGJZfThjRpDaeyOKijbwHTsXUCullaWFYLin04S1TC/bYihDXL6h5ol8OswwFwE0cQtqMKaEa0rUMTuBulsZzpmSEJfq2w1DS45D4XayhpeDnWmFQMauUYChtQ+dDiJ3YQRY2RDYjFDGmyQMlEm7JzDeIYabYkc8k16XI26Xhk9bRbbsz54bt39SSsQq55upavDSLHgFKTElHiGmvcwxzM1D4TbX9MxuFQxeZs1OpbpZqtYeqVyrCkymaF4HXlkxKuWNYchtmRbF5IwclheZOi8a8XR2WG1ajArMmy+EkLInT9dFY+MxN4cgZY46iT/R5NGnVML6IZKVOJzqJmFMtWrllL/Gov1QTGe1IBU82hddnNLzGPcpjZ0858+zdvT274iSzH74ILMm0XIYYYz59g5Zrw2T3Kpm2G6wAAMdAPigAwpLhcUyDAYQsYvaFB3FCwsaEAEKZVAhN40qFwqXL+TnYWsItlrsWmXWdF5AoK05mtOLFPLOOA9i2I6X3pEgsFYneDhW8dtY7CD9ZCMB/jhKZNGsMEfcr/+5LE6wOaRYNGLL06wpe0agmWGyLAQoeI5RzpwsIno0TA8I9kyGacIcCiOMdTicRSJJAH2u3MZJMYyOqvLqIyGCSdiOE6WpSMhkmWezudWN5zVhTYhFVIXQmbLVF6VCciQ4br+aT1Swpx4sXTtmjdPLCO6V75T2frSlJXnCuBY8kQdtP3pi+7s2gxrJtte7OlxIObfotCQhHD4fszTy2BfcxAIZQljwSQoXCqBA7NGPpeLvVy9DF77IYbeGKu6kFGYS8DMnHXewFyGtjLQmY/0oO5+ZATQgR5lxbkilY6LOgnKw3luRRNm0lzcSQ5iWiZJ5GKZKI0apwFuQg6FEbLEssakQsfr9sQJxLalzFP9IxtwyYDrf3M1iW2iOUpPn221dZRDW3VbLoLDEiOIMis0qyq0nUKRKbIuKxNAsiYztMT2TnJtS8l0ae3DJTh4NBt5iZe0+fmGHVk/q61AAAgAAAF3M7/ARX4haS67GvI2u0+7AYEYq5tuXQQrkjmQ5DGXL2B0m6fNlkqS1+glE6hyxYTOn0JPY82Y2CYnjVZMl+y//uSxPWDm+mbREy9msMZLCjFl6boOHQvCnZkbO5qdwMRDo+IEFYw1TKVU4Gn0aA1CA+Sso6mWLItVgDSO9HVVA8hSLIXvTpOlkM3yIGxmETa1ESJ7PyWtwXYmuogBMgEALLJZI42uXqcdrrDqnfRVIhcQrFZOk9hyT65uklt11/Kzxew1A6BIDnbmONByIQz1l7x0jKGPtydpTQ1GpEa0Joo3CEJEfMFFRVtPyxGZkZCSqKZFwtJ3VHJwOoVU0Byevop2nqZKFZ+IBYKq1eXZfKhcfOYKoKC+WHcJZUTD+2WCI6dI1fLEFtYvPdYTiXbzh973oC7J8wtrVM5UmD8JMifYwqB8/MCzZjmnicPSQ9dLp0Tlj7giaQmdiNCnRgGcJe7GGjq7drwSJo/FdDZTMHtobwncvYpPjpqHLP5jVrW/1UTLF1aAAA0/TJWDboxpIkEHHjBAXNvjQNTF9pOl+r9maoW4P2zlTStRRLBPp2GSMxl91YN0pcisw9iDIrOEvyii74fVeKhYfbSMqPRWAWktAJsS0kNF4Yp3shODYWmQv/7ksTpApbFm09MPS/LAjRp6YexeJAeBangqmU1BwHeNrlgF3P9xTzYjRDk7SEoFOmHBKQTxcFlhY15dMb5Hn4/UqeQt8hp+sERoOpT2BB4yiWJA892mPndHy/QwodmTHEo9PWToe+sapXUTG2e92Jppj8Y3GZQ1a85TIcN7OssU1fmRWjl9sQnAgFgXB9YQer/oAIEAAp5lPwHMKMCdFJLg7SqSVBOUOLgimyEeJXKuHNKv3fnQdLY7Rb2PcmDe3ObjM3QpzTT4gS6cmORVLEZWFAKlhwIQfGMKhl7yOFkTS7aqAGzY6TGgFOhkUlhYgEqDm5oyU0F+RNlSopBjkJRmUjDjZMyRRQCu9xoMtHDAJacMIgovtlFFlS6FODSgukMihpuS6a+HXzSQQ/IlG0e9bAUQIURYymjPFYJpIl24MpMLnPtSuc1pJkNB9UAFBwQAC5rgUnLqKkbs/CuWDOApw6yzoshKnJmOOfOQDRXYMq0j+v7DUofeAt509qHY4yytl0hmZebOlqaE6IvIQ5HC8nCGKFKVSsvEqWxobNzs/X/+5LE9AIbGYVETT2awumy6ej2J0GHZIsv9a0RmGkkR4rSxc/EsOabUqhtRiE1QZHp9MfXPVLGbSBOgnRdZHotq06wjISm751I5Ia4nRwFeJAKwLCVkCts7vamoLSqmrE8RT+kEnZUQy/WY2KJSC8bmqI3Rmpqjt1o730vPK5QLezPNrz3AGAACVNAQ0QD9WBa+pUppLnShyGJbFUObyujGYCQKdiaYlabD1QQms8qyVYFAqToR8Htk1W46ixK9NKw3MQNG6MdURi+rBipp69ZWRzn9LwPDUiuV7EdEhG3qsfdQASLJwRy+02hcuIAmK3oD3ubDc6jVTkulQqPVQkakgo1zMB+rICy5OVOIbSqx9pHTvvrTYKsIIguQNr323WT1zz1zKkOrid6KxkISkqmrzRtC7GxGlUtbFFBE+hZvVblpfF7EczC0lGjL8jeigVGMAaVKGMQ4CiCmClWLBmWggDRN3a0JQWhP+lC+qf7W3Ugl+3ubnYplwsFWgDA8KUEaO9c92QQ+wJ8V/J3OGz8ZBMFc+VpaocTtXiVA2lEhpyP//uSxPCAGIGjT0yx98MOtGmdh7H45i/EhQgDC+dKvKNC2WzhNI4DzHySpXkLIYc4M1aSqXkGerWVaekzJ85M6FLSw4naXAvLs/aRjpYV4dS8zRlGwJUaeor8e16xaoLriclL2VbqevpRoIJylPHcYK1PfjZWmvl9H9DmiZI2vntdr0NdtNJc4IYBbWOqc58pA99F1AQAByWG1pvGzNmSc6PiBrN/cdxYUICQtdpAgsdZVKmgVULhAZGhbjnwr1IcbMhEZXsbHEMFs09eqpUGWxRlep1OXtQkhGCW5Hp5XMh7yrwdoR8ORSOgtIjEItNi+MjgdCgYjkbKV1CrRXhXPZ2FOZIl2DHPllbcsrfbo2YtrHaOJVzh8v/fzDpCvtdt2rlhSWksnzRDgjdYoypXmC+qy65CcpVlTCeJz1n2N4zghjitNqXqz3z9tvRc1r+lKgAANnYInmofCx9SwWJiIKpF0WWy4slDKZbQ5tWB31xrfh2CmdObLdMqVpjT+TMZSDjyx1ytcmpdCmgVrjgNM4qPbSBQHE2HxNr6CI54iIJgFv/7ksTzApsFcUANPZrC8LLpKYexuaItXHkXMZGlIbKlC8lYW4phb0MXaAPctpfkPAtp1RklUbA4HIdzMphukCeKKE5nrpuZFwPN3ZzMpvQtanRGn7KgVESHh8M0kAY2SkyaKTI1M2VGTQh+PQMWDjElJJKTqt+iJbIKWmDf7e0mzpAPl/lpn5URs7JH0DvL3uS6WQlbHTdp8mUphQlXz4wQUOuRwqNwbbWn6i8nSAIJKG24rMVl0qlysenHsORXOzOI6gszayGT07puhiaJP9hkg71xK3A+SNyNm0ZOx7m5Jumm5MgEYQo2T0ZKHINilNGwmQoLpzQV5uMWCRuc7gpuHlqk0yj6SszmaQ9Mqql4LrJrA60WLG8ZjuNv2PtVeRANJtStcmEWh4mLN5MvF8bjVL6ilk5Q+9x0H6oAUOpo6yaSVJhgLzChRlxggaVKWY0gayXXJgLtrlbaMrrYHeaq5kMymBIU6TqXlK3JUgMCF10rNocwdq2o6nuz8u87LAKIlIg4exOVFUApU3lgMMOgfw/2YY4Zp4Mg/CWnOyI4xhn/+5LE7wKa4aNATT06woMyaimGJXmBJAIRIAuiCi4FSXJLCOocfoBIrkMPIPwt6oetZ6CGNJ/xlanEMalsRhnhFuMdiPc52U72GSQg0AvqNWDTkhSrqx+LlCGJXYi1TKJhruzUkUXdhAQQMjJ9ksSw4yZgyk3TyCPso5Seej4dtYqtZy0yYKWFREefmtpihVUhhkZoiFF3VBGWvxKn/LiJ98EYWGWsKaQhxYiy6NQW4ECtInYejcdmnhhygXbEW7Q3cvRqkljjswRPQvfVwElUYpTeaNL1ox9sKmS63zovZN7W5shCAXQRdPOLJCGQ+jEVCEOwfE0EQNk943HNKF/JlhEjPn3x3eiVkNyq5APEVnfs44bnlFNbLjIk1ikt8clxOtlta0xaziGyhmUGH3EFKcUHk71CJ7AROouMZIJwE2zyKO7nvtZmAkrpFFJOXlxFQ4WRgmLiS06oYCgvKHCuLx3G7JUjUJYyVUWGz0iIPvlOMIUWIgQRqFUwmywhFeShEVN+ToxkQ5ORlJ5PRpGgSzDT7GD6T2Ek/EVCgtlqmo+l//uSxPmD2/GDPC082wLlLihBpg+bELObCzT0o5FOxgyxZEeYFhN+qqZvJ9eEY5BQhKNhVUyhkbU1NCsohTXQKIFzschVRRwdiFrJqI4WvPzj5t3n/9XLnb1KAAAAKOBhi0AZELBhiCAovgARVPkv5OoHGDgi2jBxRerzJBlpmaUzJaqYq6HiUvfVejsz9C5TB1eQAy+0m20t/GUPwmmVQBZJQCluFetQUVJidPl9UaVaGIuul8uoaCGhMPSLXOjZfqhpAMyhJSwluFUEkYGsxyCFoVgdIMBCiamCOsgDGX0rjQKcvxBh3IaXtVJwMsWFPNKOIOsIYfTOXV8nEkdB6sp6pZX76cW2x7Mn4TovK6Z2WNHcUmyROp29DmCR5lmXRzYY8tDZBcNwp/VXsKTNu2V1dCniIYUPMdDniEoSqywOM8VyZXNMPSBriBAgNLzTqWPJJGft1m30Nt14Nld7CIAAAXfACWRYOn2qsqNasKiTN3rcHlRNoUBgwMqMURwlszLN6YmMhzEcxVEJfG3JdaJIMA+N2imDYq3ddMmxrYJjSv/7ksTzgBPdm11HsSVcFLjnDbeLqctk5Hypzm8b85M1pw+pE6KTE8l7Fj6xE01AwopaZI0XLEaqKzbDB+cw9nLPdPsX6h8uPFyI8bPpvnibiE+lruoZXTI0IS9OzZR7Jq4bnKSIknDB0hxRXWy4cQj8tYi1tzKMflppRTSs2pM/kVemeWBbAYfyd3YY0cXLAycFM1iiwsaT0JhQT9iheJrzTKLJuU+SdLWW5M7ZGvhpoOBvC77vtDXmEBmsGAFwehVAjB2P00sgRTteColJKdyEu0XpgmBleiAY4S6QEHIhEPQO+abD6R9ajVFTMiS3l2nbXTihkrlSZd9eJkCZLRWCusBfA9pA6EkRKIVoOk8YtFGHUfarZEsfCyuSUEkVraqzlXMJhPZMHATaFEnbLlYimKqdO1i3GzHKlMqV3iPDiNauYINav4qbjWke1mfx2xqgmyqa+2Rc+HLIdNAiF3+0M7Cp7X//btu41mJ/kUxBTUWqAAAAMbccIdlxpc6TaKrWl4L+a4+7vwzUOB8LEcSOV8UwC7IuDOS5+wboryGC6pH/+5LE6ACWVaNK7CWKg6W0ZwWnm9o5iBGhuj+0ENkV5kfQMh6XcetXtxsOy2Toe7XznViyPR9o6LD8BZHbEoWLRFgLC1CVHzBUI75bOWz9tSX11fGcap9EJFjkpnyxOcNZuPsF5Gv52ODIbxraOxfPpft37WOVsNmabyPN3pfytNqt+cz6YvnPrP/bLfm85m2iKtDKLJMP5IJSbq+FqC4W47AaV0KT0qxFJxHs4bQhPijeARmll1JjEQ4WMoL9JjZC5DtJtT8FUR80iHKLygzNrAzFEvooi3dW0tA0efFBI+qSFTRcEXqsXybbhAk2gszuom7xEXwDoOwRAuyvBMsMCKOwvVZLZq7WyEDF/ag9K5u6mqQ26XnUaIB8hTWYR7vhU8t3YytYq4XnlL188LXqAAAKnJCSo2ffLlvAAkBURGlbrPVDx4d+Uhm9ft3KTjdGnXpplj7MNjzYrDDqeCX8ZRA79TY4UKWGxaUjOqiSN5lIE9WYhZcE8YxkJYKU6jrSy+1IaimmOYwDUQo/zzkLap2KiqXDWj1MqTxUxmucdi9X//uSxN4AFgGDQmw9jcJlNGqc8yWiBoZVU4P8LJ2qpTVcSXJdzXJwsaEyoc5rNoLC7Vt2KCozcZWSWKhjShyFv4Vdnuud7bF1eC/JCXqA1MK8kDyq2N8VSsz1mbnq0ricVu1NIdHAeDBfxaKZ5o8jixQkoUXGFymfUefUPcuX64uu7ZqIL6HSfmPEDygswXuQ6jQRPxQZxS9DJW0am1ZcSVMAsQUfl0Ih9sSu6zwu4zVpjdIql2RGlTKFqkVrlsBWmfEIBF0cBu4rA1JKtKlj8YYEqk2zOF+OkCQTb0cVb6caREiakxA4DKcBPikfswNpwPyox0g+NSonR/EgRxdKEoiD3HwEh0+QwgJwxWCzs1jWXCWcUEf0y5epFwUk45RDmVrnzp67YoOLSWP6T2w1L8D2M2PGRKpvMWt1oTmZS6vxNeVOZ85de6BjLQXeyYK62rKN+n+uAAABeHTDQoSUVKo8NDiFVqTexGLqfuNjunuilOg1ermpvOS7tIq49H86tyrxPoB5mg/gsmjMoOFiOdQroowVbcuVcokMK1XGWrVdpv/7ksT/g5wZoz5svZfDSCvnBaezkMZkVGdBGTR3NkpWI5WXJFDQqLa0RE8Y1lhg+uoyNcnvHaEpxdbIkh9T6WxaWYuohZR0wSwqaHcTV1bVC31nyr/7sDr5YHV3kK+MPwRFWKT60Mnd15sutSNcpPTatGXf65I9++5DWl6ftL9lvxpbW1/aBwB3kgAOuPYNrCOqITtJxPurGv5fr7sPtLhVnsexsqudcm6hSkbkjPPI7S5OSdOK2TKuMaXRdzuPkx2JhMEX7qBEkT6yd5gkw7dAhHPphuXEiJBXGpJQjls8cQj/0zpAHR5ynw14kKntZSoGwvK0q6VtHjrI8rS0QC3zssYPRWEbGl5eLpWJ6/W6LmKJ0sB7ouPKqopJx5l3SzRiGIuPxHMM02xBfVOlk7ULG3mQph6L423Y1hbms0au/BFtY/6q2gBXydPqdd0RMYuQliUMglGQL/kwV/J4HBFiLyfNcLJU9VKIPlq0G5KqtYXc4EefZljfKmSBFgTUVbWs51Z6JF0y6pfRlDesTYSpcUCMV0xdU9sYApDoXs7WCon/+5LE7IKXoaNAbL2NwwI0aGmXsbhPLsdhSaw8VT4bA7ei39eRyp950EBpicWgnieCGmqqnAu6Huoh0EOE0MEx1jRWIQ4FvLkWse60+jdlIGlUU4HewMH4MRJ0eUBQJbr7g+Pvn2x+l91m8JklKamW3sjpPbrHtWt3p0KtM5ajS/Bn136vTb6zu5dYUYRaxThMnpTs1AMQkpOHOuHRuejKwRFCEsXZ1EZwu9muy3BXkSThU1cSHOi+wBmsznFnZEYXUJA4JljtVqXh/HYAiDFR6HBsFyDRcZTpeo0WRWkiI8gDWo0dHR44ohLPUq0sl4zEFwCodCQYA3HxSg3F0RfUOqzIcnPRri8DAiLimMHXTouQGp0XTJQduHbd4x6vKSynquYxy5/fTuqeYXycviQqnIWmnIK9by5OXpFCphihr7pWWnDr23viqr1PytM5v1asPiB2L/5VAABxgeBNBvIDoonDUUuE8hAOQ3ZA4MCqBrCy+G4GU/3Gflaqs2zp0mmRSNP80iZYEozJnddGBu5XKN82vINKFsehwcFBgJza0YZw//uSxPQDm12DNi09nlMFMKeJl7G7XfZN2UYYqiiUxN0NRUcfZaHMYV6luLeo0Wk1Cn3kUuyxKZDAdTQn07eMerfFliIs3lA8frxeTxiLT2O9RMi7cWpxgMzczqFNsZkjTMcbYmrHl5LeSkA8XNsezlNs166aNm/Gg/8ns0SAD6pxTduanaSzz/WQf//teH4hf0dABeT1MQU4KU62VozQetEVDYuyVS93khV/o4n6BLknD7hyi3HzlnPeIeLGilWrCZDrShsIOXV0zszzLNCMrwXRbEXBbiWCEnmD1KE4lWfB/JxJOBymg5j6QXXzQcnvL6wFjE/cuOxsbrlNVyjeQDhZdaQiJRaXkinK9ddGlMa2rAneVLFVW8qxaJ5Do1k6hL6SwjgGvhxKLnF3U6HbaR6SafMEQnnl2cohRAUcuXET1aXOXa23oJfhbymz8ae81+LpcxUAADKoA41MxIoxJwHKBJGslR4QFnCcMLAF4Fyk1mmLrnkWHfhOGDP3JXSdpavzIbFAWBtBBHynCMKuVxoMmAcgNEIK4mAW5ODbMUnq8v/7kMTsA5kVkzpNPTrDBrRnzZexuIBSiSDHEBHmPpmISeSJZxJRBhij0KdqEAa1sgjx6WMeMMgybLGLY2tUp7p0/IquXCWkdsBPmGW8qiVTO31cYSzAeTLqqe2hJiYmUJhEYJINp0QESdJjWCrdHMKIhQh2an63jUvu+5+Ilv+l2TeVm7T63Pjvdeltt5Oj+vsIJZGMrC/8wQcKgi7o6Pb8ILtbDgZaOGVLNPwnugHAyrCHIhFuChDQNA1jDRb4sZo0AUy4m4J9FQZY2x6WAxDLAT1QoRBwIAeyWHuF6C6WRJiSxwt2JFhZEjeOabElBrnHUsm9QnNHVRcR2qAvByIoAypsuXQCsVnQKDkMFh4rBsDAutMHwjDuVCoVOP4y6em6Z1LJsK7Gb1jA0Wk7Ey5Gi718EMfLjs7QzFNSJfDt/n+mezOqdzNbfsu9Dl7TNYkJigjSGib91ioARCMPrAG5JkRYhEgwwCggYbMAIgNnrEJUVADXV7QOv8OLwWwOYcN82GKqu0zJwWnbUNh9/1HVAc3EpHHj13UdWikqoE2jc//7ksTsg5khgzhNPTPLIK3mxaex+lE2SojSRw0eWZPyz8VDRJz4Ze5ynEdaHxohqiWSx3I4iMLFEgHAYKqP1zS5iECUqmclNKqXSIUi5xBE0eBBgZ1XwfjutFRaMTQe5OFzCYavFB+eJ2Yj+qxtglJfxzd6OS6YpZXw7mQ41vZF1d3P+Jzpn1vNnhUQVUcx8Z/9Cavd7IDkBM4NlgoGQAw8YEMKhFroRJ5NJdrFf8UZZDSVCdV1rVlJliM4WNSHSsKTCRPNMCmFqRZ/mwzqHD89xbB9F5MlQDJApE7liM5OlhOguEgjDfUZYAhR0SNhDFEh2Fec6LevEg+MmeKo15zcE1CfkzL2paKsfTx8zJiKLGojLZsgaDyE6KpC6OyzKxgEyYiimiOd0fKHzFpv/SSIlIN79SYZuksnKoeNPMTqFo9A4yUQoITckTQhT8+4H8jCr9tSnSup6ExBTUUzLjk4LjSqqqqqqqoAACETkTMGxfhzQxJUypsHAEJAOkM6oWStDC6eKMiR8WEEoNNrweuxirSi1zL2symX1pJGlbBo7vL/+5LE6gOZBV02LT2cWwuzZwmnpjtNwhL6MR+fisVLjAqA1ZoSlKH7tphPC/isiFLFBEwQqbi1F4W7vklKy2DQDkHmxs5xnO7wdqmPYWeGmUKDVHalUKE1Sz88Y1cuBLTavNtwQ+I2JxAIREWmxMKB+c6kc3G72Y3VaatFJBa0tBl7jdtVj6TTkyM/lbY0O8ZgrJiTeq6xNn2xm29JT633+yjixoDzP+MRaxdapjE8SmM41uDu+omgAJvQBM2xAIAJugoVvcqvda9GxsD9siPTqL8z73Uz1MtXHP+hREwtjT9xZw+KHsdhMxhYeQUVTg9bHuTGr0Z1HNyGajNKphYyO+qhMVAxBcUD7CimFFOVpxr3IJZw7Vz5e030HfjCrTtcsbJ8wddXr2r3/2K1VdauAAAAVMEUMhNPR1MUMMSQMMeAr8xoVKsOJr+Kgl/RkwzpKhvlNVvLqeOIz6nmJpLtsrG6MvbZVZrrTmaqVurEW7wy3kbXaIxI7A5AdGmSoR5MoSJ7SkQ0fkE0TMhUKqi3nQ6vO8478i1UECf7L7PURBKU//uSxOMAG92bMk1h7dHTsmuowpr/BpeP1IpbKn+rRpnLdlOXxbahi8EOs4LDkJkYxghJ4HWwWDIEjMTjQuH5KD9NooelQLIgBYiaQCmkMnXGWV6dNNBPZT2TK3SsjLhEcaWJZSVcbUa7FWacXlNHXtPieAleeH6Ze6wpMrwOYuyGEcC/Xf3fL/c8cPCpL0cIhFKTqjwI2kI8JKVgYB2Jim0OCInjax6PhOFhOgoJx/ERRybHTn4+H0nQtJd7IF1hGIKM9IBs3AXTlO4NVxLcOFksHVhKPGmMzYKJnbTsSyyccG0kbuvRLwfUuUw7Km2y7WqkbAjFxmPF1tP3liRNRnEbbjOtE1/86zVZcSS6uHtfTI0jdd7ZlynfbpRWpaXeOmFS5Ej+/Se2e6nQfAZZTvasscyz89MLVQAAcwcuC80byUizULCRhSeKhIkEgoSVWL5JftfV4mq/dQuvGX6l0gZ09iSawS8GczijMBRl9maNzW6nWsmGaPOuwtgiNojEOQTCZsKSawxd3CzrXWRK8WHaYhNdZKZujJVZGAMMMwZSt//7ksT/gJ2lmy5tYZHCoTRonYewSh14Zi0LQoZDF28j7PolZm4PbginZhqNNefqSw63O0zPC1CPY+tMHpqdyTQ8Xgu8lf0wiq2XIl56klY2VnFZMXiSbWs9GtvzQnxadnBf9mLIezoacz2zSZeyf1ZzOttLI+rey1CkijXwMWGmwmz36gCEICd3MGyDBAOKWAYQFQgtqFANZYVCk1G7CMBL9pWp7hA8iRFVLXVgEQBShSBq4obnIbaGzdjroHUKPKWSe6+oegeYWy09HRlZZV+HTEeB58BNnSxZYVBslFFonFuGLIfNwecZDjCClUggaWO3ALK0P0/Yw5TKmfu21+FOyy9QDjzRilfuMQy11c8ippqGIbbFLsXahFiefiFM9eiak8cldqiiUfNIRLI68bNFDNkiDj3qBdAriMEFlHEqDK3NU9Xnde1dthy/lSVb1REJmqeq0raPPdyomlu6QUlZaJIAAAAUYRmf1jTJKluhjSReYlAiEInsuhi8rd2FxLbHYZgyezcF/2TPxTQq0wytKYeTqhpiDZ+MyuTu52JKGNn/+5LE+wObAXEwTeGRw3qwpcm8Jnsclk8mi0c5OPo6yl8LZ+2Jdj5vpFIgri9IFW5wxGI9DMZch2YekUqiFdcTT1AEVnKLy408tNTt7RQX9XxlxxhUlgq/Fqy7ClNViNNFDsTfdVmB7O+0O0lDjuIuHBelTtq1G2x3izhAcPOJW0V2dksUXtM71LXaLgA0lMkeEdcs2EhAhPlsVqCgtIthrbtwZIwBkT8F4VnKHKF2TkHISZYCSMJ+FO2KqIOM1RGzyeFiUChWH4tKYABpkGk1A4SEngOkmAcSQHUfxMxzl6UyNESI9iYgn4ChQ5UJ0Zo5zxS1WwwdKR8lD5Ptcn48fqF8xPj2mjUCwZDQumku84AyAiJWlhqKMlmOjRov7aWFBL4qWdzOpvzE3dRM6SeC31FWRdq+Z/M74S3yi0wrOslWoZY/f/6e51F4Z/EFAAABeQEGXRwqYFYsTBYgJQULrmMEDmhpaOvGS9zBXJb984MxTytw9MrqYOoEv72x25KuVgDFF4O5J2txSfqT6/XJSDWZI3JHStjet2aRd0Vc5nr8//uSxOYDlr2jNm0wvoMHMGZNp6Y5uDNTT2Nak05GgaACoBNK8h2B5i5OJZgeNixAPh9VoSIvrtqQh/HZNXHLnlS4R7UuylOFl36qXSnaBcUo0K9/X9C8zZ2cccvkUJlUttDUbOH0y0W5/VOu1nHZOUu22ySAhzK1bZi/Uy+fP7rT6DxBs1NBBCw1f0729eBbkEkAoRYXDxMKhxxk1AYHXNK1VSziYCSqLXpTpGlAiYzpCTHGBgmARB8wA5i43koS3dG+3FoFnVRBYAWOh0DhQ8CJqRUvVvbIJFAAHvTdLVrTY5OsFTVaG7b7i34hAjAnPpEgXDllA8Ugs9IAAhZI40gPEAfS6TFSIkCKRENg+FA9ImDxWSS3jZdPx4RBxESyIOpkJ8ZnZM2VWxzsneibMXmlz6xepbXwuPnZJ9vegOZ2el+Z3JhPJvSYO79nO35rkz05M48jYj/7VQAAABSUQMMlTN1JGowcEFj8CBwCA0WUBhcdVS2pm9jpLbWZHZt7Jx+Geo/tCYwuWMNbtSiVMLh4vcrTacOFRmW0yhbjNxa/Uv/7ksTwg5itgzRt4Y3DS7Blhawx+n4bZy28tc560fsUPE9yYGmYgzlLuzHJMBhB0JE3VmEkmjDEcylV6nD6OVCT+LkqzkZKw/DUxzLzNFmSFMNTPCet6aes0OHAd6ZXTA2q3bje7JRbt4N5F3Ej+0OFWaseIcVE2nF03svaHe5cXIZQuMLJb1NOicWVfYbjbEWEwEQMDsDTRsBEpd0LIphoY3dVZJF5yqAvqIgpYOHlhUWMLbptnZUQgKD6sKZ7FLr+QA1poBfpJBXzAW1mNZV5dB6U4k5gHHcwAKw7C2k3GIN4khby2maQ4/CsLJRLtAoMaZbD+ZYiuLCfK4cDrgq5VMT4dCpSSYWYaeg4bBbRDtRl49GxU5XaxpGKt4wszmpdZvFYsL+9yabpNtVG1VWY6Ux4avieE1vgiodU+dA3vdXqsFqkaBTVFlyUde4AAAq8gAnVfHGEEINrZhAhgwDupxtIXAzyyKJ8xl0JiwoUci1DFvPIlh/ktZ0WtGcZY5EgFmOpRH85x8Q0uqB4NKCUwkBjJRFH+fQiERK2mLRCLIb/+5LE6oOYhYMwbbz8yvOrJcW3lvIh69GFIMla0y9QT3WWVwfLjkfC4ieweJLpZrEtNDn6tEIwV2W2eivVMLym4w6xfawXW1hb9YU6Mo+STHPrF8HSPFywoLBwwgGTb431n5jPU1MicOwYUyPlksVtLp1X60/drh/ecPJ22ZkF+ft+ex4RATzAMtMojsw6IkRRENDAApEioDAUBgIXZU1bqDQOmCyt2B4RqxMNfiMKMCkxJ0ikqG8BsagtI9KsEmLPhmSNbuIrQy9MrdQu4o4UWVwqOGRG4FXX2qktpCSWxjT/S59EgFOlhRqamTd4ASyEgsufRfF8MGyp4aadTCV63eCFRMIf9hbXX0ijCm0kNNJUyy/0HWTIehLKVSUUTM7H4fhqD5sp5x948oZ6hEyBDPG2wfakDdjUwY+UhwuiubnjFCzu5uwEbqsTLH5l+qp/85oBxCDdbmJnfXvVACSAAAlKWbDQBlrBoDnOV2o7nm2TD5UOdqwlj86W9QjFSbRNpNCcSWis1tzMSZ1qb8GKVdavpSZYzTDWx0GJmYMLol2U//uSxPCDmF2jNG09i8NhqyUFzDI4i9nPo8saWhmTZqn8fZytPCuMZJZE9zXk1ODV4TU2zRFz5SsJuSy9XWreLvEUj4kLSYWFAvSeQtpnZodR5Osw3WRuk3tb0T574Z9qE9+1kc2t9XTAAAOQiwwNXjKqSMXh0xOJQQSQ4HA4BDQ9LAHBABWKjgnUNBomAIgHoI1AQKV+4UHhXY8pMhf6sMsTdXKst8EURo4tqHGVoJ4zDcWtRFeIKITycJmqm0pVlUOYKGYCTOZaBUGUTLAmmDSVHXRawAGyCI0gpYCBmIgFWLqO8fSdbG8a2wn2g3iUKtPiMm8nYhPlKWF8fBbxJVc5p9kSsy8o2BQtyPcnh3NO1W+Vrqz6GvuBP8NqpgwPN54L1xjWLmx9lTre9pDw8teHJr/VaOW6781qPbV3PiFe2c1p6WxvG7V+/uAZcGmsOu/WAEtYbfwnPO5hQADRoCEzAwwfMHFkn1SjQwqoYQALpTOJAoBCav1PxxoK0I647hJyM3f5JmmY3fUZFgDIozHUq4U211giIzpCpU3IEauMFv/7ksTpABMVo0NMPSHTqTGkycw9uAVrEgaCFAN86+SSbRGhMwcx9X4qNquWUNs15wIBSYgd4oLzpaCZHAJhHIQhgq6uIMTqUeC2OYtJvEMSViEX0C9zSpAJyRaOZwzThoHtSZM0KkOEUtI0HVXTzWcuj48q1Aoa/cxh38g6b7MzLGbubW7YEPFVHaqwpo3LCACMylAlOTWgs1OqDoVSPI+pyzPlApBTDoY7nUgz9TcdsRd4r5Y6HQ6UN0ZSVmOXkE0xGUTzlMWwuQUY/XxOEgrKLKF1v9/Fu5Q8cykw2qda8nxZHVBdrHSjPr/YE/KrVrq1s5snSMJZougiA+wYemXl8ilI+/nyDastONRLkItE5PBSv5fLWm/z3TfbYXDXZ3DY9GjnGqM0Z9d+NUtadqinftaN++T2/LLdAABzA4cMHXA02eTEILMOBcwUVTEguMDBAwaKBYCJpAQJhgGMFgwMAoo9TUsw7SYDTmXP+AgqJCgi16dLdSQbLU0F6usOtXfTBUCTzEmAxFHVGJbwEYDHorwwMhMBXlVGsxUSOrWETw3/+5LE7gAZRV0oLeGP0qY0aKmHsPqzwo0rmL8I+R5krxiuCYilFuR4tghYZI2FaFS/LoarmQpTIUfticneDBOlrYjmT5qx0aj0QqU7BLJxa1aZB/K9OKd06eKiHGXCtUW7xG5nZzffVRkkKuqeDR3qlHTZtjbH+nn00Yn3rdcU1TCInx/WbnL70xje/XN/nXz+4Y9s/cRb2NI+/WW1O/YDgIwtWYoaA4wMVDTDBYwQXYQBgglCn/Bhip5r0DsVdplStDSXcEQseZu2qbkbb54meJ1uGdRI8MvNWJYDFGKDGyy50xYBAcw5zJIreQCoc2kw1Ye5WhxFYJl4GgQ+sGwmG3+YHGHcbR5CyTL5BDsZXpP0TkJ4vWqdm7OYbhdZzLdyC1KXmuUpLLg5qL1RHcYRKDEX9qOyt1PCa+mbeWoRsOCrix39bNq31ILe1VCi6reP93z25PTuHT0zO97z9X+n/u1qAAAAcBAmFuEw0JCAlI8VLiEPLPCACSIHABYsVdlLNyGTrFfW1e940GYQylwVh4YcKmlUXcZISnX/E6B7Ycrw//uSxPqDnc2RJE5h7cMcK6TBvLI428zDJcgOjdK8DQ3RxYy47vxdbTtOxNw8yxvn4tXgJBwvVicgDXHpShRDwtTIRiFhQMC3dMpOvdKvcVjp5o6tDdho1tVuFu7KWdeOjuYGSdEA11v7V5qSUDkwPUmTIPEbjfm5dpEIP+/GKGllGvqE+V+OLjn8d6TBViPcnDCAoRBZiA+AooDWAFBxkFHh5VYeHIUIiBHoue0ceL1urFfnNLeCGskoEkiwZrSGTqpEp0g4hatO5GJbSDq6Ga3xgaUBdo2hmWmQUMKHrJ0rbYWzRTRYdkbdVLIElySEOMqiL4ospuwh9F9QSq5wJRDTnOg4b2jIS0L8o8vM/Lw3UZb70wzDbhwNuKSSsqfCETE/JoYswbt0q1+C7+5mpHUKmTIyFISmSYmBgiO5DWXZ84qWJGl/DZ9GjrxfLa/zqIv/W9vQuRlVvyffytUA02jH/geujDwYIDwoamHBDDIcBgCxyLy1t37aqvEOAIpCaOWR1YWEryLIQk3hAVwXYUo5RMwdDs3RcYSeXKsWi2hLAP/7ksTmA5bNkyxtsRyLQyvkRbwmeCEeOBkBzkaH4kC6I9HMIR8l8VgJaP9RrbSXE8zQRKEq1O6hnqbbCwq8PsvTKThOUQuAekKjBEOk5tNb7ZTLuzc6rSuHR14gK2eDfcM3nzBxeCqWBZu337X+XVixtwkRLwKamb3fb+r8zlOXWXU9+sDi5JluFmQiiYBBxhYEmCBoFBgAQAIwkmcDgcgc6S2pIhJcIDAVhSKyjDL3pRadtgbwByl5LAw44aQ0Dr1TIbMwNkMDRiGJRGiBCqhYDTxkkI1tY7poMOQ7ivuNfKhIHgJdLSmlv6vplAdxdsipZx/YU9dl11pUULHEeTYDIfNPqDUuG76orF1avfB4d4PKxQL7j61MZNIYlUZs2yTk0X7cpsu1XGNfs/PVgfj1MzGXDaGiZdZYsi5frSyc2IRBABBQTPA5ZTF63N5H/1oAAaacbBFmjpyCcRiBKFBwKWAESHhoFZuta+iC2qsa+B4Kb104TDUdGAHBxIeXND0EQU4MUhaZC2mON3uwt57rS4o/ygiV1+VEIA8C33RUaZP/+5LE6IOWaV0oLbzT0zGpJInMMfiwqL1FfqYTsGNJV7FIv4LATF2iiovD64oPjsHHiAIxWIRwcJzw+PUNglkn17EkD8h93YjiC0UMRT9a9D6uhLrLiGQvqwVb1w7ilmCLGH2DpBiTLkUN0i+vJX4Y/pN3UKmdaxK3f0Yjp5yjaEmDSUIvoZERJiARmFGmRgm0RgZwGtEiBBDCUrWY9swRnLsCjED6YSazSD1GhQCTIMKX6RBep6UK0MUVi7D2Nohmo8x9d0TUpUDBrWTGqUArUTeCcEAQiYqoLrWQpuWrD0ooo+P8AErPh+maizo1EljXnYibQUQZeygdAuX3ahiDLSV7Wk1KNcDXWdWYNeNwkB0JbhGIwxXuF3v1Zuw/K7aWXwBS51rF+ZsyjPHKGaKC9V3iwrRiCLPcJ6nyoI/atVbVurY72WTWub7j/Oc3nQRcs1DZ3Oakdn/6agQAAAl6rpI5RuoCBJWDTS7rXkUlchAUcpgLj9CTBSJYjINRD2sWN0pTcGOpTReahhqQ1c6X2ooBiWuXplGqHSXhnT4oELU6//uSxO8Dl5WFKE2wXRNmqeOBzWBIHbhvz6FiVsByQk/F67WaRVwItY6DYLMaGJZdWTh5vU8k0olGWAhq60drOoYj5SMptU3usGTNpYkGr+My0pDncWeO7fwVQOaA3ysHrNrwoONWVl2O6IVkCPEjHscrrDc5w3KTGrwKKLuQUAoikDIhAfBGXnxJqAKU9hwHMEqzSzNag6ABUgIgRTZB1PRK6FwAydwjSSRtoyGbsBSiAulEhw3G1FG8+HoOlSkQXtjQTY1w3pTE6S5b0zKNlGHonoh6TqY3heuceAjBmnPGs7KQqWQzgl+WCIWqwgkGwkks1Qjjo7H0mgNzXG/UC1Q9AiccPl5ytzkSfGXGNPTyCYiwgMuF8nriSX2OmzSXtP8BovL52+raYMEPbNIMNJc7E5KLeuraM2PfprXiyW/Uu3yiCfpw6gAAU7wCU8OOoB55dRc820addyVtsjEmaMUsK7MFkNJQtKmOVibi2yMiLP44AyjhTrMyrTp9GXKcO0/W5VaL6d15bQy2UGg8TrgwOkqMPDJadwSEIWQtQRUvMP/7ksTqAJeZUyrtYeEC8yvlXbexuUhCgPsEOujDSJEisqQKMvw4TnI3T4sLrJT1uJ5fTExMICQhWEJIumYTc3KF7BlsZbDBdsUKk4gWQF9OIT6jKBM+QNI1HLikfA5kLnBwLrCcQODZwwI0QYOHhWRCQjaFB0cFawkGzQoOk5G1plg1OQF4cZwUREhAMUh6iyCQFkIjJytcXU9LasqeNLH60FuO8xSdLtU3LaVRYw6RJi7m0aUQ0ki0M0ZSsiHKZbQ1JLZ0pJpOVvUK6aUNXCbNE7lYdSJcBMhpCIhgXDJZtmpKowycJhCSBoQkDparUtVSxEuSlmyVZuVsrPQpGiFclLPIShoUjSA1GMERVhEk9DBpVhEq8UqExCwTJuQqNKsIkzIqUJlWESbK05XkpxlqtsyDZSSJLKCFEsoIEpYQoqhhCiqKFMVRRkxBTUUzLjk4LjSqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5LE84OYuaMsbD0rwyUt4kmXpfGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

export default Game;

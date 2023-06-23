import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rnd } from "react-rnd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Row, Tabs } from "react-bootstrap";
import { AddEvent, EditEvent } from "../../../../Redux/Action";
import "./calendar.css";
// import SevenDay from "./SevenDay";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
export default function Calender({
  handleEventAddingOpen,
  showCal,
  handleModalOpen,
  handleMoreOption,
  handleEventEditingOpen,
  tabtype,
  setModalOpen,
}) {
  // const [days, setDays] = React.useState([]);

  const [state, setState] = React.useState({
    height: 50,
  });
  const { dataItem, eventItems } = useSelector((state) => state);
  console.log(eventItems, "eventItems");
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= showCal; i++) {
    
    let first = curr.getDate() - curr.getDay() +i;
  
    let day = new Date(curr.setDate(first)).toISOString();

    week.push(day);
  }

  let days = [];
  for (var i = 1; i <= week.length; i++) {
    days.push(i);
  }

  console.log(week, "week");

  const dispatch = useDispatch();

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #222",
    background: "blue",
    position: "absolute",
  };

  console.log(tabtype);

  return (
    <div
      class="container"
      style={{
        backgroundColor: " rgb(221, 221, 221) ",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="row flex-nowrap">
        {week.map((item) => {
          return (
            <div
              className="col calendarBox border border-white"
              style={{
                background: "rgb(221, 221, 221)",
                height: "46px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {new Date(item).getDate()}
              {new Date(item).toLocaleString("en-us", { month: "short" })}
            </div>
          );
        })}
      </div>
      <div className="row flex-nowrap">
        {days.map((item) => {
          return (
            <div
              className="col calendarBox border border-white"
              style={{
                background: "rgb(221, 221, 221)",
                height: "52px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      {dataItem.map((elem) => {
        return (
          <div className="row flex-nowrap">
            {week.map((item) => {
              return (
                <div
                  onClick={(e) => {
                    if (
                      !eventItems.filter(
                        (el) =>
                          el.room == elem &&
                          new Date(el.time.start).getDate() ==
                            new Date(item).getDate()
                      ).length
                    ) {
                      handleEventAddingOpen(item, elem, e);
                    }
                  }}
                  className="col border calendarBox border-white"
                  style={{
                    background: "rgb(221, 221, 221)",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // position: 'relative',
                  }}
                >
                  {eventItems.filter(
                    (el) =>
                      el.room == elem &&
                      new Date(el.time.start).getDate() ==
                        new Date(item).getDate() && new Date(el.time.start).getMonth() ==
                        new Date(item).getMonth() &&
                      tabtype == el.type
                  ).length ? (
                    <Rnd
                      style={{
                        background:
                          eventItems.filter(
                            (el) =>
                              el.room == elem &&
                              new Date(el.time.start).getDate() ==
                                new Date(item).getDate()
                          )[0].condition == "Arrived"
                            ? "#e9be89"
                            : eventItems.filter(
                                (el) =>
                                  el.room == elem &&
                                  new Date(el.time.start).getDate() ==
                                    new Date(item).getDate()
                              )[0].condition == "Day Out"
                            ? "rgb(236, 64, 122)"
                            : "#03a9f4",
                        borderRadius: 50,
                      
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      size={{
                        width: eventItems.filter(
                          (el) =>
                            el.room == elem &&
                            new Date(el.time.start).getDate() ==
                              new Date(item).getDate()
                        )[0].width,
                        height: state.height,
                      }}
                      maxHeight={40}
                      minHeight={40}
                      minWidth={130}
                      position={
                        eventItems.filter(
                          (el) =>
                            el.room == elem &&
                            new Date(el.time.start).getDate() ==
                              new Date(item).getDate()
                        )[0].position
                      }
                      onDragStop={(e, d) => {
                        console.log("eeeee");
                        // console.log('dddd', d);
                        if (Math.floor(d.y / 50) || Math.floor(d.x / 141)) {
                          let old = eventItems.filter(
                            (el) =>
                              el.room == elem &&
                              new Date(el.time.start).getDate() ==
                                new Date(item).getDate()
                          )[0];

                          old = {
                            ...old,
                            room: dataItem[
                              dataItem.indexOf(elem) + Math.floor(d.y / 50)
                            ],
                            time: {
                              start:
                                week[
                                  week.indexOf(item) + Math.floor(d.x / 141)
                                ],
                              end: week[
                                week.indexOf(item) + Math.floor(d.x / 141)
                              ],
                            },
                          };

                          handleEventEditingOpen(old, e);
                        }
                      }}
                      onResizeStop={(e, direction, ref, delta, position) => {
                        console.log("direction");
                        let old = eventItems.filter(
                          (el) =>
                            el.room == elem &&
                            new Date(el.time.start).getDate() ==
                              new Date(item).getDate()
                        )[0];
                        var date;
                        if (direction == "right") {
                          date = new Date(old.time.start);

                          // add a day
                          date.setDate(
                            date.getDate() +
                              Math.ceil(
                                Number(ref.style.width.split("px")[0]) / 140
                              ) -
                              1
                          );
                          old = {
                            ...old,
                            time: { ...old.time, end: date },
                            width:
                              Math.ceil(
                                Number(ref.style.width.split("px")[0]) / 140
                              ) *
                                130 +
                              (Math.ceil(
                                Number(ref.style.width.split("px")[0]) / 140
                              ) -
                                1) *
                                2 *
                                5,
                          };
                        } else {
                          date = new Date(old.time.end);

                          // add a day
                          date.setDate(
                            date.getDate() -
                              Math.ceil(
                                Number(ref.style.width.split("px")[0]) / 140
                              ) +
                              1
                          );
                          old = {
                            ...old,
                            time: { ...old.time, start: date },
                            width:
                              Math.ceil(
                                Number(ref.style.width.split("px")[0]) / 140
                              ) *
                                130 +
                              (Math.ceil(
                                Number(ref.style.width.split("px")[0]) / 140
                              ) -
                                1) *
                                2 *
                                5,
                          };
                        }

                        // dispatch(EditEvent(old));

                        handleEventEditingOpen(old, e);

                        setState({
                          // width: ref.style.width,
                          height: ref.style.height,
                          ...position,
                        });
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          padding:"0px 10px",
                          flexWrap:'nowrap'
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            flexWrap:'nowrap'
                          }}
                       
                       
                        >
                          <div >
                          <img
                            src="./assets/hostelWorldLogo.png"
                            style={{
                              width: "13px",
                              height: "13px",
                            }}
                          />
                          </div>
                        
                          <div style={{marginLeft:'10px'}}
                             onClick={(e) => {
                              handleModalOpen(e, eventItems.filter(
                                (el) =>
                                  el.room == elem &&
                                  new Date(el.time.start).getDate() ==
                                    new Date(item).getDate() &&
                                  tabtype == el.type
                              ));
                             
                            }}>
                         {
                            eventItems.filter(
                              (el) =>
                                el.room == elem &&
                                new Date(el.time.start).getDate() ==
                                  new Date(item).getDate()
                            )[0].name
                          }
                    
                         <span>
                         <ArrowRightIcon />
                         </span>
                         
                          </div >
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                        <img src='./assets/pay1.png' style={{width:'24px',height:'35px'}}/>
                         
                          <MoreVertIcon
                            onClick={(e) => {
                              handleMoreOption(e);
                            }}
                          />
                        </div>
                      </div>
                    </Rnd>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";
import Accordian2 from "./Accordian2";
function Accordion(props) {

  const {
    option, setOption, data, show, showSmall
  } = props
  const [showContent, setShowContent] = useState(false);

  console.log("option",option);
  return (
    <>
      <div
        className="row mx-0 py-2 my-3 sidebarmenuList"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        <div className="col-auto">
          <div className="menuImg">
            <img src={data?.img} />
          </div>
        </div>
        <div className="col px-0">
          <div className={`menuItem ${show && !showSmall?'d-none':''} ${option.menu == (data.title) ? 'active-menu ' : ''}`} onClick={() => option.menu == (data.title) ? setOption(prev => ({ ...prev, ['menu']: '' })) : setOption(prev => ({ ...prev, ['menu']: data.title }))}> {data.title} </div>
        </div>
        <div className="col-auto ">
          <div className={`menuIcon ${show && !showSmall?'d-none':''}`}>
            <img src={data?.icon} />
          </div>
        </div>
      </div>
      {/* <div
        className="sidebarList"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {data.title}
      </div> */}
      {data.children.length && showContent
        ? data.children.map((item) => {
         
          return (
            <Accordian2 show={show} showSmall={showSmall} data={item} option={option} setOption={setOption} />
            //   <>
            //     <h5>{item.title}</h5>
            //     {item.children.length && open
            //       ? item.children.map((item) => {
            //           return (
            //             <>
            //               <h4>{item.title}</h4>
            //             </>
            //           );
            //         })
            //       : null}
            //   </>
          );
        })
        : null}
    </>
  );
}

export default Accordion;

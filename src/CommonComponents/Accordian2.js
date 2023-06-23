import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Accordian2(props) {
  const [showContent, setShowContent] = useState(false);
  const { data, option, setOption, show, showSmall } = props
  const navigate = useNavigate();
  let a = window.location
  console.log("url", a.hash.split('/')[1])
  return (
    <>
    
      <div
        className="row mx-0 py-2 sidebarmenuList"
        onClick={() => {
          navigate(data.route);
          setShowContent(!showContent);
        }}
      >
        <div className="col-auto">
          <div className="menuImg">
            <img src={data?.img} />
          </div>
        </div>
        <div className="col ">
          <div className={`menuItem ${show && !showSmall?'d-none':''} ${option.submenu == data.title ? 'active-menu' : ''} menuItemAdd `} onClick={() => option.submenu == data.title ? setOption(prev => ({ ...prev, ['submenu']: '' })) : setOption(prev => ({ ...prev, ['submenu']: data.title }))}> {data.title} </div>
        </div>
        <div className="col-auto ">
          <div className={`menuIcon ${show && !showSmall?'d-none':''}`}>
            <img src={data?.icon} />
          </div>
        </div>
      </div>
      {/* <div
        className="row"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        <div className="col-auto bgWhite d-none">
          <div className="menuImg">{data.img}</div>
        </div>
        <div className="col bgWhite">
          <div className="menuItem">{data.title}</div>
        </div>
        <div className="col-auto bgWhite">
          <div className="menuIcon">
            <img src={data?.icon} />
          </div>
        </div>
      </div> */}
      {/* <div
        className="sidebarListNav"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        <div className="sidebaListNavLink">{data.title}</div>
      </div> */}
      {data.children.length && showContent
        ? data.children.map((item) => {
   
          return (
            <>
            {show?'':
            <div
            className={`sidebarSubNav py-2 itemHover ${option.supersubmenu == (item.title) ? 'itemActive text-white' : ''} `}
            onClick={() => {
              navigate(item.route);
            }}
          >
            <div className="row">
              <div className="col-auto ps-5">
                <div className="menuImg">{item.img}</div>
              </div>
              <div className="col px-0">
                <div id='menuItemAdd' className={`menuItem ${show?'d-none':''} active`} onClick={() => option.supersubmenu == (item.title) ? setOption(prev => ({ ...prev, ['supersubmenu']: '' })) : setOption(prev => ({ ...prev, ['supersubmenu']: item.title }))}>{item.title}</div>
              </div>
              {/* <div className="col-auto">
                <div className="menuIcon">{item.icon}</div>
              </div> */}
            </div>
            {/* <div className="sidebarSubNavLink"></div> */}
          </div>
            }
              
            </>
          );
        })
        : null}
    </>
  );
}

export default Accordian2;

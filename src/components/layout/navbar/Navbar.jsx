import { BsKanbanFill } from "react-icons/fa";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./navbar.css";

import { useContext, useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import RequestContext from "../../../context/request/RequestContext";
function Navbar() {



    // const { requests, loading, fetchRequests } = useContext(RequestContext);
  
    // useEffect(() => {
    //   fetchRequests();
    // }, []);
  
    // console.log(requests);



  // set timer
  const [time, setTime] = useState();
  useEffect(() => {
    setInterval(() => {
      const timer = new Date();
      setTime(timer.toLocaleTimeString());
    }, 1000);
  }, []);

 
  return (
    <>
    <header className="navbar">
      <div className="navbar_start">
    <Sidebar/>
   
      </div>
      <div className="navbar_center">
        <Link to={"/"} className="cursor-pointer normal-case text-sm">
          Kanban NC
        </Link>
        <div className="time"> <strong>{time}</strong>  </div>
      </div>
      <div className="navbar_end">
        <div className="indicator">
          <span className="indicator_item_badge">2</span>
          <Link to={"/requests"}>
            <button className="btn btn_indicator">Demandes</button>
          </Link>
        </div>
      </div>
    </header>
</>
  );
}

Navbar.defaultProps = {
  title: "Application Kanban NC",
};

Navbar.propTypes = {
  title: propTypes.string,
};
export default Navbar;

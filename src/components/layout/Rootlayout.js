import React from "react";
import Menubar from "../pages/Menubar"
import {Outlet} from 'react-router-dom';
function Rootlayout(){
    return(
<div>
   <Menubar />
    <Outlet/>
</div>
    );
}
export default Rootlayout;
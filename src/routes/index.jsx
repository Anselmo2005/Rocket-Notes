import { BrowserRouter } from "react-router-dom";

import { Approutes } from "./app.routes";
import { Authroutes } from "./auth.routes";


export function Routes(){

    return(

        <BrowserRouter>
        
        <Approutes/>
        
        </BrowserRouter>
        
        



    );



}
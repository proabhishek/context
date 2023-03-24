import PackageContext from "./Context";

import { useState } from "react";

const Provider = (props) => {
    const [criketer, setCriketer] = useState({
        name: "Sachin Tendulkar",
        age: 45,
        country: "India",
        runs: 100000,
        wickets: 235,
    });

    return(

        <PackageContext.Provider
        
         value = {
               {
                     data: criketer,
                     updateAge: ()=>setCriketer({...criketer, age: criketer.age+1}),
               }

         }
        
        >

            {props.children}

        </PackageContext.Provider>




    )


}

export default Provider;
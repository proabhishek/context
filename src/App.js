import PackageContext from "./Context";
import Provider from "./Provider";



const Smile=()=>{
      return(
           <PackageContext.Consumer>

            {
                (info) => (
                    <div>
                           <h1>Name of the Cricketer  is:  {info.data.name}</h1>
                            <h2>Age of the Cricketer is: {info.data.age}</h2>
                            <h3>Country of the Cricketer is: {info.data.country}</h3>
                            <h4>Runs of the Cricketer is: {info.data.runs}</h4>
                            <h5>Wickets of the Cricketer is: {info.data.wickets}</h5>
                            <button onClick={info.updateAge}>Update Sachin Age</button>
                    </div>
                )

            }
            
           </PackageContext.Consumer>
      )
}


const App = () => {
  return (
    <div>
      <h1>Hello World!</h1> 

        <Provider>
            <Smile/>
        </Provider>
    </div>
  );
}

export default App;
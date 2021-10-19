import React,{ Component } from 'react'

class app extends Component{

     render(){

    return(
      <div>
    
     <div class ="container">
       <div class = "row">
          
           <div class = "row">
             <div class ="col-sm-4"><label>job name</label></div>
             <div class ="col-sm-4"><input name = "jname" type = "text"></input></div>
           </div>

           <div class = "row">
             <div class ="col-sm-4"><label>Interview Date</label></div>
             <div class ="col-sm-4"><input name = "idate" type = "text"></input></div>
           </div>

           <div class = "row">
             <div class ="col-sm-4"><label>Interview Time</label></div>
             <div class ="col-sm-4"><input></input></div>
            
           </div>

           <div class = "row">
             <div class ="col-sm-4"><label>jsalary</label></div>
             <div class ="col-sm-4"><input></input></div>
           </div>

           <div class = "row">
             <div class ="col-sm-4"></div>
             <div class ="col-sm-4"><button>submit</button></div>
             <div class ="col-sm-4"></div>
           </div>




     </div>
     </div>

</div>


   
  
    )



}
}
export default app;


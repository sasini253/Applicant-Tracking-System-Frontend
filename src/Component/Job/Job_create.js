import React,{ Component } from 'react'
import '/job.css'

class app extends Component{


  onSubmitForm() {
    console.log(this.state)
  }

     render(){

    return(
      <div>
    <form>
     <div class ="container">
       <div class = "row">
          
           <div class = "row">
             <div class ="col-sm-4"><label>job name</label></div>
             <div class ="col-sm-4"><input name = "jname" type = "text"></input></div>
           </div>

           <div class = "row">
             <div class ="col-sm-4"><label>job skills</label></div>
             <div class ="col-sm-4"><input name = "jskills" type = "text"></input></div>
           </div>

           <div class = "row">
             <div class ="col-sm-4"><label>job type</label></div>
             <div class ="col-sm-4"><input name = "jtype" type = "text"></input></div>
            
           </div>

           <div class = "row">
             <div class ="col-sm-4"><label>jsalary</label></div>
             <div class ="col-sm-4"><input name = "jsalary" type = "text"></input></div>
           </div>

           <div class = "row">
             <div class ="col-sm-4"></div>
             <div class ="col-sm-4"><button onClick = {this.onSubmitForm}>submit</button></div>
             <div class ="col-sm-4"></div>
           </div>




     </div>
     </div>
 </form>
</div>


   
  
    )



}
}
export default app;

import { Component } from "react"
import{Link} from 'react-router-dom'


class Main extends Component{

    render(){

        return(

            <div>
                <div class="container">
  <div class="row">

    
    <h2>Hello Select Options....</h2>
 
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#"><div class="row"><Link className="link textdec"  to = "/jobs">Create Job</Link></div></a>
</nav>


<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1"><div class="row"><Link className= "link-textdec" to = "/meeting">Create Meeting</Link></div></span>
</nav>


<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1"><div class="row"> <div class="row"><Link  className="link textdec"  to = "/view_jobs">View Job</Link></div></div></span>
</nav>
    
    

<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1"><div class="row"><div class="row"><Link  className="link textdec"  to = "/view_meeting">View Meeting</Link></div></div></span>
</nav>

<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1"><div class="row"><div class="row"> <div class="row"><Link  className="link textdec"  to = "/view_interview">View Interview</Link></div>
    
    
    </div></div></span>
</nav>
    
    
    

     

     
    
   
    
   
  </div>
</div>
                     
                     
                     


            </div>
        )
    }


}
export default Main;
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {withRouter} from "react-router";

class Job_List_Item extends Component {

    componentDidMount() {


    }

    render() {




        return (


            <div>
                <div className="row">
    <div class = "col-sm-2"></div>
    <div class = "col-sm-4">
            <div className="card border-secondary mb-3" style={{width: "50rem"}}>
                <div className="card-body text-secondary">
                    <h5 className="card-title"> :{this.props.jobname} </h5>

                    <p className="card-text"> {this.props.jobsalary} </p>
                    <p className="card-text">{this.props.jobtype} </p>
                    <p className="card-text">Skills:{this.props.jobtype} </p>


                </div>
            </div>
            </div>
            <div class = "col-sm-4"></div>


        </div>

                


            </div>

        )
    }


}

export default Job_List_Item;


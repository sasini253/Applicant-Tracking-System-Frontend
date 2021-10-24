import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {withRouter} from "react-router";

class Meeting_List extends Component {

    componentDidMount() {


    }

    render() {

        return (

        <div className="row">
    <div class = "col-sm-2"></div>
    <div class = "col-sm-4">
            <div className="card border-secondary mb-3" style={{width: "50rem"}}>
                <div className="card-body text-secondary">
                    <h5 className="card-title">Meeting Department : {this.props.Dname}</h5>

                    <p className="card-text">Meeting Date :{this.props.MeetingTime} </p>
                    <p className="card-text">Meeting Time:{this.props.MeetingDate} </p>


                </div>
            </div>
            </div>
            <div class = "col-sm-4"></div>


        </div>

        )
    }


}

export default Meeting_List;
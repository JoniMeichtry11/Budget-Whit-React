import React from "react";

export default class SaveBudget extends React.Component{
    render(){
        return(
            <div className="row">
                <button id="btnCapturar" className="col btn btn-warning m-3 d-flex justify-content-md-around align-items-center">
                    Save as image<img src="" alt=""/>
                </button>
                <button className="col btn btn-danger m-3 d-flex justify-content-md-around align-items-center">
                    Save as PDF<img src="" alt=""/>
                </button>
                <button className="col btn btn-success m-3" onClick={this.props.totalBudget}>Save as template</button>
            </div>
        );
    };
}; 
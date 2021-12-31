import React from "react";

export default class AddExpenses extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center mt-3">
                <form style={{width: "100%"}}>
                    <div className="row row-cols-2">
                        <div className="col-md-5 col-sm-5 col-xs-6 input-group-lg">
                            <input type="text" className="form-control" placeholder="Spending"/>
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 input-group-lg">
                            <input type="number" className="form-control" placeholder="Value"/>
                        </div>
                        <div className="d-flex justify-content-center col-12 col-md-2 col-sm-2">
                            <button type="button" className="btn btn-primary add" style={{minWidth: 80}}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};
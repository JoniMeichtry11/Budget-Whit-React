import React from "react";

function BudgetName (){
    return(
        <div className="d-flex justify-content-center">
            <div className="input-group input-group-lg mb-3 mt-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Budget name"
                />
            </div>
        </div>
    );
}

function BudgetTotal (){
    return (
        <div className="d-flex justify-content-center">
            <div className="input-group input-group-lg mb-3">
                <span className="input-group-text" id="basic-addon1">Total balance</span>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Money to spend"
                    />
            </div>
        </div>
    );
};

export default class BudgetHeader extends React.Component {
    render() {
        return (
        <>
            <BudgetName />
            <BudgetTotal />
        </>
        );
    };
};


import React from "react";

function BudgetName (props){
    return(
        <div className="d-flex justify-content-center">
            <div className="input-group input-group-lg mb-3 mt-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Budget name"
                    name="budgetName"
                    onChange={props.changeName}
                />
            </div>
        </div>
    );
}

function BudgetTotal (props){
    return (
        <div className="d-flex justify-content-center">
            <div className="input-group input-group-lg mb-3">
                <span className="input-group-text" id="basic-addon1">Total balance</span>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Money to spend"
                        name="budgetTotal"
                        onChange={props.changeMoney}
                    />
            </div>
        </div>
    );
};

export default class BudgetHeader extends React.Component {
    initialState = {
        nameBudget: '',
        moneyToSpend: 0
    };

    state = this.initialState

    render() {
        return (
        <>
            <BudgetName changeName={this.changeName}/>
            <BudgetTotal changeMoney={this.changeMoney}/>
        </>
        );
    };

    changeName = (event) => {
        const name = event.target.value
        this.setState({
            nameBudget: name
        });
        setTimeout(() => {
            this.props.nameBudget(this.state);
        }, 10);
    };

    changeMoney = (event) => {
        const money = event.target.value
        this.setState({
            moneyToSpend: money
        });
        setTimeout(() => {
            this.props.moneytoSpend(this.state);
        }, 10);
    }
};

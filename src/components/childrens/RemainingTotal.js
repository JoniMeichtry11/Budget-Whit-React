import React from "react";

export default class RemainingTotal extends React.Component{
    totalChange = (totalBalance, temaining) => {
        this.props.totalChange(totalBalance, temaining);
    }
    render(){
        let totalBalance = [];
        let spendingTotal = [];
        this.props.spendingData.budgetHeader.map(item => item.moneyToSpend).forEach((array) => totalBalance.push(Number(array)));
        this.props.spendingData.spendings.map(item => item.value).forEach((array) => spendingTotal.push(Number(array)));

        let temaining = totalBalance - spendingTotal.reduce((a, b) => a + b, 0);

        this.totalChange(totalBalance[0], temaining);
        return(
            <table className="table table-success table-bordered border-dark mt-3">
                <thead>
                    <tr>
                        <td align="center">Total balance</td>
                        <td align="center">Temaining money</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fs-5" align="center"><strong>${totalBalance[0]}</strong></td>
                        <td className="fs-5" align="center"><strong>${temaining}</strong></td>
                    </tr>
                </tbody>
            </table>
        );
    };
};
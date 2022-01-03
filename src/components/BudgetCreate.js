import React from "react";
// Components
import BudgetHeader from './childrens/BudgetHeader'
import TableBudget from './childrens/TableBudget'
import AddExpenses from './childrens/AddExpenses';
import RemainingTotal from './childrens/RemainingTotal';
import SaveBudget from './childrens/SaveBudget';

export default class BudgetCreate extends React.Component{
    state = {
        budgetHeader: [],
        spendings: [],
        totalBalance: 0,
        temainingMoney: 0
    }

    render(){
        const spendings = this.state;

        return(
            <div className="d-flex justify-content-center" id="htmlData">
                <div style={{width: "100%", maxWidth: "50rem"}}>
                    {/* Nombre del Presupuesto y Saldo total */}
                    <BudgetHeader nameBudget={this.changeNameBudget} moneytoSpend={this.changeMoneyToSpend}/>
                    {/* Tabla de Gastos */}
                    <TableBudget spendingData={spendings} removeSpending={this.removeSpending} changeInput={this.changeInput}/>
                    {/* Agregar Gastos con su valor */}
                    <AddExpenses handleSubmit={this.handleSubmit}/>
                    {/* Total, Restante */}
                    <RemainingTotal spendingData={spendings} totalChange={this.totalChange}/>
                    {/* Guardar Presupuesto */}
                    <SaveBudget totalBudget={this.saveBudget}/>
                </div>
            </div>
        );
    };

    changeNameBudget = (name) => {
        this.setState({budgetHeader: [name]})
    }

    changeMoneyToSpend = (money) => {
        this.setState({budgetHeader: [money]})
    }

    changeInput = (input, index) => {
        let inputValue = Number(input.value);
        const {spendings} = this.state
        spendings[index].value = inputValue;
        this.setState({});
    }

    handleSubmit = (spendings) => {
        this.setState({spendings: [...this.state.spendings, spendings]});
    }

    removeSpending = (index) => {
        const {spendings} = this.state
        this.setState({
            spendings: spendings.filter((spending, i) => {
                return i !== index
            })
        });
    };

    totalChange = (totalBalance, temaining) => {
        this.totalBalance = totalBalance;
        this.temaining = temaining;
    }

    totalBalance = 0;
    temaining = 0;

    saveBudget = () => {
        this.setState({
            totalBalance: this.totalBalance,
            temainingMoney: this.temaining
        })
        setTimeout(() => {
            console.log(this.state);
        }, 500);
    }
};
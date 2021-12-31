// Components
import BudgetHeader from '../../components/BudgetHeader'
import TableBudget from '../../components/TableBudget'
import AddExpenses from '../../components/AddExpenses';
import RemainingTotal from '../../components/RemainingTotal';
import SaveBudget from '../../components/SaveBudget';

export default function CreateBudget(){
    return (
        <div className="d-flex justify-content-center" id="htmlData">
            <div style={{width: "100%", maxWidth: "50rem"}}>
                {/* Nombre del Presupuesto y Saldo total */}
                <BudgetHeader />
                {/* Tabla de Gastos */}
                <TableBudget />
                {/* Agregar Gastos con su valor */}
                <AddExpenses/>
                {/* Total, Restante */}
                <RemainingTotal/>
                {/* Guardar Presupuesto */}
                <SaveBudget/>
            </div>
        </div>
    );
};
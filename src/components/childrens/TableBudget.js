import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function TableHeader (){
    return(
        <thead>
            <tr>
                <td className="fs-5" align="center"><strong>Spending</strong></td>
                <td className="fs-5" align="center"><strong>Value</strong></td>
                <td ></td>
            </tr>
        </thead>
    );
};

function TableBody (props){
    const row = props.spendingData.spendings.map((row, index) => {
        return(
            <tr key={index}>
                <td align="center" style={{ textTransform: 'capitalize'}}>{row.spending}</td>
                <td align="center">
                    <input type="number" id={`inputChange${index}`} className="sinborde" value={row.value} onChange={() => {let input = document.getElementById(`inputChange${index}`); props.changeInput(input, index);}}/>
                </td>
                <td align="center" className="d-flex justify-content-center" style={{paddingbottom: 10}}>
                    <FontAwesomeIcon icon={faTrashAlt} style={{color: "red", fontSize: 27, cursor: "pointer"}} onClick={() => {props.removeSpending(index)}}/>          
                </td>
            </tr>
        );
    });
    return(
        <tbody>{row}</tbody>
    );
};

const TableBudget = (props) => {
    const {spendingData, removeSpending, changeInput} = props;

    return(
        <table className="table table-light table-bordered border-dark">
            <TableHeader/>
            <TableBody spendingData={spendingData} removeSpending={removeSpending} changeInput={changeInput}/>
        </table>
    );
};

export default TableBudget;
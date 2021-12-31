import React, {Component} from 'react';
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

function TableBody (){
    return(
        <tbody>
            <tr>
                <td align="center" style={{texttransform: "capitalize;"}}>Camisa</td>
                <td align="center" style={{verticalalign:"middle;"}}>
                    <input type="number" className="sinborde"/>
                </td>
                <td align="center" className="d-flex justify-content-center" style={{paddingbottom: 10, verticalAlign: "middle"}}>
                    <FontAwesomeIcon icon={faTrashAlt} style={{color: "red", fontSize: 27}}/>          
                </td>
            </tr>
        </tbody>
    );
};

export default class TableBudget extends Component {
    render(){
        return(
            <table className="table table-light table-bordered border-dark">
                <TableHeader/>
                <TableBody/>
            </table>
        );
    };
};
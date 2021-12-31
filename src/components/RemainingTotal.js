import React from "react";

export default class RemainingTotal extends React.Component{
    render(){
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
                        <td className="fs-5" align="center"><strong>$0</strong></td>
                        <td className="fs-5" align="center"><strong>$0</strong></td>
                    </tr>
                </tbody>
            </table>
        );
    };
};
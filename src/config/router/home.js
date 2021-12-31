import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="d-flex justify-content-center heightFull">
            <div className="d-flex flex-column justify-content-center align-items-center">

                <div className="m-3 d-grid col-12 mx-auto">
                    <Link className="btn btn-success btn-lg" to="/create-budget">Create Budget</Link>
                </div>
                
                <div className="m-3 d-grid col-12 mx-auto">
                    <button className="btn btn-primary btn-lg">Install APP</button>
                </div>

                <h4>--BUDGETS CREATED--</h4>

                <div className="m-3 d-grid col-12 mx-auto">
                    <button className="btn btn-warning btn-lg">
                        Customize Template
                    </button>
                </div>
            </div>
        </div>
    );
}
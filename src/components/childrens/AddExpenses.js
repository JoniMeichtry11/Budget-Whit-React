import React from "react";

export default class AddExpenses extends React.Component{
    initialState = {
        spending: '',
        value: '',
        button: true
    };

    state = this.initialState

    handleChange = (event) => {
        let { name, value } = event.target

        if(name === "value"){
            let newValue = Number(value);
            this.setState({
                [name]: newValue,
            });
        } else {
            this.setState({
                [name]: value,
            });
        }
        setTimeout(() => {
            this.validateForm();
        }, 100);
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }

    validateForm = () => {
        if(this.state.spending.length > 0 && this.state.value !== ''){
            this.setState((state) => {
                return (state.button = false)
            });
        } else {
            this.setState((state) => {
                return (state.button = true)
            });
        }
    }

    render(){
        const { spending, value, button } = this.state;

        return(
            <div className="d-flex justify-content-center mt-3">
                <form style={{width: "100%"}}>
                    <div className="row row-cols-2">
                        <div className="col-md-5 col-sm-5 col-xs-6 input-group-lg">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="spending"
                                id="spending"
                                value={spending} 
                                onChange={this.handleChange}
                                placeholder="Spending" 
                                autoComplete="off"
                            />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 input-group-lg">
                            <input 
                                type="number" 
                                className="form-control" 
                                name="value"
                                id="value"
                                value={value} 
                                onChange={this.handleChange}
                                placeholder="Value" 
                            />
                        </div>
                        <div className="d-flex justify-content-center col-12 col-md-2 col-sm-2">
                            <button type="button" className="btn btn-primary add" style={{minWidth: 80}} onClick={this.submitForm} disabled={button}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};
/*eslint-disable no-empty-label */
import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            category: "",
            income: 0,
            squareFoot: 0
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.change=this.change.bind(this);

    }

    change = e => {
     this.setState({
         [e.target.name]: e.target.value
     });
    };
    
    onSubmit(){
        this.props.onSubmit(this.state);
        this.setState({
            name: "",
            category: "",
            income: 0,
            squareFoot: 0
        });
    }
  render () {
    return (
      <div>
          <div>
              <h5>Asset Form</h5>
            <form>
                Name:<input 
                name="name"
                type="text" 
                id="name-input"
                placeholder="Asset Name"
                onChange={e => this.change(e) }/><br/>
                Category:<input 
                name="category"
                type="text" 
                id="category-input"
                placeholder="Category"
                onChange={e => this.change(e) } /><br/>
                Income:<input 
                name="income"
                type="text" 
                id="income-input"
                placeholder="Income"
                onChange={e => this.change(e) } /><br/>

                <button 
                type="submit"
                value="Submit" 
                id="submit-button" 
                onClick={() => this.onSubmit()}>Submit</button>
            </form>
        </div>
      </div>
    );
  }
}

export default Form;

import React, { Component } from 'react';

export default class InputGrossSalary extends Component {
  handleChange = (event) => {
    const { onSalaryChange } = this.props;
    const newSalary = event.target.value;
    onSalaryChange(newSalary);
  };

  render() {
    const { currentValue } = this.props;

    return (
      <div className="input-field col s12">
        <label className="active" htmlFor="inputGrossSalary">
          <span>
            <i class="material-icons tiny">attach_money</i>
          </span>
          Gross salary
        </label>
        <input
          className="validate"
          autoFocus
          id="inputGrossSalary"
          type="number"
          value={currentValue} // Faz o input já começar com o valor da variável
          onChange={this.handleChange}
          min="0"
          step="100"
        />
      </div>
    );
  }
}

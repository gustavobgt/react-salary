import React, { Component } from 'react';

import { formatMoney, formatPercentage } from '../helpers/formatters';

export default class InputReadOnly extends Component {
  conditionalRender = (id) => {
    const INSS = 'inputINSS discount';
    const IRPF = 'inputIRPF discount';
    if (id === INSS || id === IRPF) {
      return (
        <span>
          <i class="material-icons tiny">money_off</i>
        </span>
      );
    }

    return (
      <span>
        <i class="material-icons tiny">attach_money</i>
      </span>
    );
  };

  render() {
    const { color = 'black', value, percentage, label } = this.props;

    const id = 'input' + label;
    let formattedValue = formatMoney(value);
    formattedValue += percentage > 0 ? ' ' + formatPercentage(percentage) : '';

    return (
      <div className="input-field col s12 m6 l3">
        <label className="active" htmlFor={id}>
          {this.conditionalRender(id)}
          {label}
        </label>
        <input
          id={id}
          type="text"
          value={formattedValue}
          style={{ color, fontWeight: 'bold' }}
          readOnly
        />
      </div>
    );
  }
}

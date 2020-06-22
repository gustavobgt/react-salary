import React, { Component } from 'react';
// Components
import InputGrossSalary from './components/InputGrossSalary';
import InputReadOnly from './components/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary';

//Helpers
import * as salaryHelpers from './helpers/salary';

const COLOR_INSS = '#e67e22';
const COLOR_IRPF = '#c0392b';
const COLOR_NET_SALARY = '#16a085';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      grossSalary: 0,
    };

    this.salaryObject = null;
  }

  handleSalaryChange = (newSalary) => {
    this.setState({
      grossSalary: newSalary,
    });
  };

  render() {
    const { grossSalary } = this.state;

    this.salaryObject = salaryHelpers.calculateSalaryFrom(grossSalary);

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.salaryObject;

    const percentINSS = (discountINSS / grossSalary) * 100;
    const percentIRPF = (discountIRPF / grossSalary) * 100;
    const percentNetSalary = 100 - percentINSS - percentIRPF;

    return (
      <div className="container">
        <header style={styles.headerStyle}>
          <h1 className="center">React Salary</h1>

          <div className="row">
            <InputGrossSalary
              currentValue={grossSalary}
              onSalaryChange={this.handleSalaryChange}
            />
          </div>
        </header>

        <div className="row" style={styles.headerStyle}>
          <InputReadOnly label="INSS base" value={baseINSS} />

          <InputReadOnly
            label="INSS discount"
            value={discountINSS}
            percentage={percentINSS}
            color={COLOR_INSS}
          />

          <InputReadOnly label="IRPF base" value={baseIRPF} />

          <InputReadOnly
            label="IRPF discount"
            value={discountIRPF}
            percentage={percentIRPF}
            color={COLOR_IRPF}
          />

          <ProgressBarSalary
            percentINSS={percentINSS}
            colorINSS={COLOR_INSS}
            percentIRPF={percentIRPF}
            colorIRPF={COLOR_IRPF}
            percentNetSalary={percentNetSalary}
            colorNetSalary={COLOR_NET_SALARY}
          />

          <hr className="col s12" style={{ marginBottom: '40px' }} />

          <InputReadOnly
            label="Net Salary"
            value={netSalary}
            percentage={percentNetSalary}
            color={COLOR_NET_SALARY}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  headerStyle: {
    border: '2px solid lightgray',
    borderRadius: '10px',
    margin: '10px 0px',
    backgroundColor: 'white',
    padding: '10px',
  },
};

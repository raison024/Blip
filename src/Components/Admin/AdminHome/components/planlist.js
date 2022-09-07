import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../AdminHome.css';

const Plan = props => (
  <tr>
    <td>{props.plan.name}</td>
    <td>Rs.{props.plan.price}</td>
    <td>{props.plan.validity} month/s</td>
    <td>
       <a href="#" onClick={() => { props.deletePlan(props.plan._id) }}>delete</a>
    </td>
  </tr>
)

export default class PlanList extends Component {
  constructor(props) {
    super(props);

    this.deletePlan = this.deletePlan.bind(this)

    this.state = {plans: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/plans/')
      .then(response => {
        this.setState({ plans: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePlan(id) {
    axios.delete('http://localhost:5000/plans/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      plans: this.state.plans.filter(el => el._id !== id)
    })
  }

  planList() {
    return this.state.plans.map(currentplan => {
      return <Plan plan={currentplan} deletePlan={this.deletePlan} key={currentplan._id}/>;
    })
  }

  render() {
    return (
      <div className='Admin-header'>
        <Link className='Admin-signout' to="/AdminHome">
            &#8592; Go back
        </Link>
        <h3>Existing Plans:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Validity</th>
            </tr>
          </thead>
          <tbody>
            { this.planList() }
          </tbody>
        </table>
      </div>
    )
  }
}
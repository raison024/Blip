import React, {Component, useState} from 'react'
import './Plan.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Plans = props => (
    <div className='Plan-container'>
    <div className='Plan-padding'>
        <div style={{fontSize: '2.5vmin', fontWeight: 'bold'}}>
            {props.plan.name}
        </div>
        <div className='Plan-line' />
        <div style={{fontSize: '2vmin', fontWeight: 'bold'}}>
            <span style={{fontWeight: 'normal', color: '#f0f0f0'}}>Rs. </span>
            {props.plan.price}
        </div>
        <div>for <span style={{fontWeight: 'bold'}}>{props.plan.validity}</span> month/s</div> 
    </div>
    <Link className='Plan-button'to="/payment" >Select Plan</Link>   
</div>
)

export default class Plan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plans: [],  
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/plans/')
      .then(Response => {
        this.setState({ plans: Response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  planList() {
    return this.state.plans.map(currentplan => {
      return <Plans plan={currentplan} key={currentplan._id} />;
    })
  }

  render() {
  return (
    <div className='Plan-header'>
        <div className='Plan-title'>
            Choose the right plan for you
        </div>
        <div className='Plan-row'>
            {this.planList()}
        </div>
    </div>
  )
}
}

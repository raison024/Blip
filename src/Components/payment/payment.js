import React from 'react';
import { Link } from 'react-router-dom';
import './payment.css'

function payment() {
  return (
    <div className='Payment-header'>
        <div className='Payment-container'>
            <img class="Payment-card" src="https://pngimg.com/uploads/credit_card/credit_card_PNG99.png" alt="Card image" />
            <form>

                <input type="text" className='Payment-cardno' placeholder='Card No' />
                
                <input type="text" className='Payment-cardno' placeholder='Your Name' />
                
                <div className='Payment-row'>

                <select name="month" className='Payment-monthyear'>
                  <option value="Month" selected disabled>Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                
                <select name="year" className='Payment-monthyear'>
                  <option value="Year" selected disabled>Year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>

                    <input type="text" className='Payment-cvv' placeholder='CVV' />
                </div>
                <Link type="submit" className='Payment-submit' to="/login" >Submit</Link>
            </form>
        </div>
    </div>
  )
}

export default payment
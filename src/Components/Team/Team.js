import React from 'react'
import './Team.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Bil from '../../Assets/bil.jpg'
import Rae from '../../Assets/rae.jpg'

function Team() {
  const team = [
    { id: 1, name: "Bilin P Oommen", img:Bil, pos:"Backend Developer", rolno:"19CS1A3181", sec:"BCA-C"},
    { id: 2, name: "Raison Sabu", img:Rae, pos:"Frontend Developer", rolno:"19CS1A3197", sec:"BCA-C"}
  ];
  return (
    <div>
      <div className='TeamContact-header'>
        <Navbar />
        <div className='TC-title'>Our Team</div>

          <div className='Team-container'>
            {team.map(people => {
              return (
                <div key={people.id} className='Team-card' >
                  <img src={people.img} className='Team-cardimg' />
                  <div className='Team-name'>{people.name}</div>
                  <div className='Team-pos'>{people.pos}</div>
                  <div className='Team-rol'>{people.rolno}</div>
                  <div className='Team-rol'>{people.sec}</div>
                </div>
              )
            })}
          </div>

      </div>
      <Footer />
    </div>
  )
}

export default Team
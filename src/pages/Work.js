import React from 'react';
import Card from '../components/Card'
import exp from '../data/experience'

const Work = () =>{

  const expCards = exp.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  }).reverse()
  

  return (
    <div className='work'>
      <div className='work--head'>
        <h1>Experience</h1>
      </div>

      <section className='cards'>
        {expCards}
      </section>
        
    </div>
  );
}
export default Work;
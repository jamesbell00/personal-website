import React from 'react';
import Card from '../components/Card'
import proj from '../data/projects'

const Projects = () =>{

  const projCards = proj.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  }).reverse()
  

  return (
    <div className='projects'>
      <div className='projects--head'>
        <h1>Projects</h1>
      </div>

      <section className='projects'>
        {projCards}
      </section>
        
    </div>
  );
}
export default Projects;
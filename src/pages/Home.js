import React, {useState} from 'react';
import logo from '../images/james.png'

const Home = () =>{

  const [rotate, setRotate] = useState(true)

  return (
    <main className='home--main'>
        <div className='home--imgcontainer'>

          <ul className='home--locations'>
            <li>
                <i typeof="icon" className="fa fa-1.5x fa-map-pin fa-fw" />
                <p>San Francisco</p><p className='hidden'>, California</p>
            </li>
            <li>
              <i typeof="icon" className="fa fa-1.5x fa-map-pin fa-fw" />
              <p>Madrid</p><p className='hidden'>, Spain</p>
            </li>
            <li>
              <i typeof="icon" className="fa fa-1.5x fa-map-pin fa-fw" />
              <p>London</p><p className='hidden'>, England</p>
            </li>

          </ul>

          <img 
            src={logo} 
            alt="profile"
            className={rotate ? "home--img--rotate" : "home--img"}
          />
        </div>

        <div className='bio'>
          <h2>
            A few things about me.
          </h2>
          <p>
            First of all, I'm glad you made it. You're one of the few lucky people who will actually read
            this. I'm a senior at SLU Madrid studying Computer Science with
            a minor in Math. This past year I've worked on multiple projects which have taught me new tools
            such as <strong>React, Node.js</strong> and a strong proficiency in <strong>MySQL</strong> as well 
            as other invaluable skills like working with a team and time management & prioritization. Currently, 
            I'm working as a Data Analyst/Junior Developer at Demand Local using <strong>SQL</strong> & <strong>Python</strong> for
            reporting dashboards for clients and maintaining the CRUD scripts and data loader APIs in <strong>PHP</strong>.<br>
            </br>
            I have too many passions to list them all but my main ones include playing basketball, <em>watching</em> basketball (go Warriors!),
            surfing, and triathlons. I also like to cook, or at least try to.<br>
            </br>
            Fun fact: I have 3 passports: USA, UK, and Spain! ✈️

          </p>
        </div>

    </main>
  );
}
export default Home;
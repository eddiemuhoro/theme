import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div className='homestic'>
        <main>
            <div className='sidebar'>
                <div>
                    <h1>LOGO</h1>
                </div>
                <ul>
                    <li>Dashboard</li>
                    <li>Properties</li>
                    <li>Clients</li>
                    <li>Sales Team</li>
                    <li>Income</li>
                    <li>Reports</li>
                </ul>
            </div>
            <content className='content-container'>
                <header>
                    <input type='search' />
                </header>
                <div className='content-wrapper'>
                    <div className='stats'>
                        <h3>Welcome to your Dashboard!</h3>
                    <content className="stats-items-wrapper">
                        <div className="stats-items">
                                <div className='stat-item'>
                                    <header>
                                        <h4>Properties for Sale</h4>
                                        <div className='percentage'>
                                            <p>8%</p>
                                            <p>less than last month</p>
                                        </div>
                                    </header>
                                    <div>
                                        <h2>140</h2>
                                    </div>

                                </div>
                                <div className='stat-item'>
                                    <header>
                                    <h4>Properties for Sale</h4>
                                        <div className='percentage'>
                                            <p>8%</p>
                                            <p>less than last month</p>
                                        </div>
                                    </header>
                                    <div>
                                        <h2>140</h2>
                                    </div>

                                </div>
                        </div>
                        <div style={{padding:"0 20px"}}>
                            <p style={{color:'gray', fontSize:'15px'}}>Top Sellers</p>
                            Images
                        </div>
                    </content>
                    </div>
                    <div className='homes'>
mblcjk. 
                    </div>
                </div>
            </content>
        </main>
    </div>
  )
}

export default Home
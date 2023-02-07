import { AddOutlined, ArrowDownward, ArrowDownwardOutlined, CalendarMonth, CalendarMonthOutlined, CalendarViewDayOutlined, Comment, ContactMail, Edit, EmailOutlined, Face, Home, LockClock, Message, More, Notifications, NotificationsActiveOutlined, Phone, Settings, SettingsPower, Star, ThumbUp, TimeToLeaveOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import './styles.css'
const PortfolioProjects = () => {
  return (
    <div className='project-wrapper'>
        <nav>
            <Star style={{marginBottom:'10%', display:"none"}} />
            <div>
                <li><Home /></li>
                <li><ContactMail/></li>
                <li><Phone/></li>
                <li><Face/></li>
                <li><LockClock/></li>
                <li><Settings/></li>
            </div>
            
            <p><SettingsPower/></p>
        </nav>
        <div>
            <header className='topbar'>
                <input type='search' placeholder='search' />
                <div style={{display:'flex', alignItems:"center"}}>
                    <CalendarMonthOutlined/>
                    <NotificationsActiveOutlined/>
                    <p style={{marginLeft:'10px'}}>Edwin</p>
                </div>
                
            </header>
            <div style={{display:"flex"}}>
                <main>
                
                    <h2>Projects</h2>

                    <div className='project-items-wrapper'>
                        <section className='started'>
                                <header>
                                    <p>Started</p>
                                    <Button><AddOutlined/></Button>
                                </header>
                                <div className='project-item'>
                                    <header>
                                        <p>Web Design</p>
                                        ...
                                    </header>
                                    <div>
                                        <p>Wireframing, mockups, clients collaboration</p>
                                    </div>
                                    <footer>
                                <Button> <ThumbUp style={{fontSize:"18px"}} /></Button>
                                    <div className='comment-section'>
                                    <Comment  style={{fontSize:"18px"}}/><span>22</span>
                                    </div>
                                    
                                    </footer>
                                </div>

                                <div className='project-item'>
                                    <header>
                                        <p>Web Design</p>
                                        ...
                                    </header>
                                    <div>
                                        <p>Wireframing, mockups, clients collaboration</p>
                                    </div>
                                    <footer>
                                    <Button> <ThumbUp style={{fontSize:"18px"}} /></Button>
                                    <div className='comment-section'>
                                    <Comment  style={{fontSize:"18px"}}/><span>22</span>
                                    </div>
                                    </footer>
                                </div>

                                <div className='project-item'>
                                    <header>
                                        <p>Web Design</p>
                                        ...
                                    </header>
                                    <div>
                                        <p>Wireframing, mockups, clients collaboration</p>
                                    </div>
                                    <footer>
                                    <Button> <ThumbUp style={{fontSize:"18px"}} /></Button>
                                    <div className='comment-section'>
                                    <Comment  style={{fontSize:"18px"}}/><span>22</span>
                                    </div>
                                    </footer>
                                </div>
                        </section>

                        <section className='ongoing'>
                                <header>
                                    <p>On going</p>
                                <Button><AddOutlined/></Button>
                                </header>
                                <div className='project-item'>
                                    <header>
                                        <p>Web Design</p>
                                        ...
                                    </header>
                                    <div>
                                        <p>Wireframing, mockups, clients collaboration</p>
                                    </div>
                                    <footer>
                                    <Button> <ThumbUp style={{fontSize:"18px"}} /></Button>
                                    <div className='comment-section'>
                                    <Comment  style={{fontSize:"18px"}}/><span>22</span>
                                    </div>
                                    </footer>
                                </div>

                                <div className='project-item'>
                                    <header>
                                        <p>Web Design</p>
                                        ...
                                    </header>
                                    <div>
                                        <p>Wireframing, mockups, clients collaboration</p>
                                    </div>
                                    <footer>
                                    <Button> <ThumbUp style={{fontSize:"18px"}} /></Button>
                                    <div className='comment-section'>
                                    <Comment  style={{fontSize:"18px"}}/><span>22</span>
                                    </div>
                                    </footer>
                                </div>
                        </section>

                        <section className='started'>
                                <header>
                                        <p>Completed</p>
                                        <Button><AddOutlined/></Button>
                                    </header>
                                    <div className='project-item'>
                                        <header>
                                            <p>Web Design</p>
                                            ...
                                        </header>
                                        <div>
                                            <p>Wireframing, mockups, clients collaboration</p>
                                        </div>
                                        <footer>
                                        <Button> <ThumbUp style={{fontSize:"18px"}} /></Button>
                                        <div className='comment-section'>
                                        <Comment  style={{fontSize:"18px"}}/><span>22</span>
                                        </div>
                                        </footer>
                                    </div>
                        </section>
                    </div>
                

                </main>
                <section className='project-desc'>
                    <h2>Stats</h2>
                    <section className='stats-items'>
                        <div>
                            <h4>Total</h4>
                            <p>144</p>
                        </div>
                        <div style={{backgroundColor:'rgb(229, 232, 236)'}}>
                        <h4>Completed</h4>
                            <p>65</p>
                        </div>
                        <div style={{backgroundColor:'rgb(229, 232, 236)'}}>
                        <h4>In Progress</h4>
                            <p>34</p>
                        </div>
                        <div style={{backgroundColor:'rgb(235, 236, 229)'}}>
                        <h4>Waiting</h4>
                            <p>14</p>
                        </div>
                    </section>
                    
                    <div>
                       
                        <div className='stats-time'>
                            <div style={{display:'flex'}}>
                                <TimeToLeaveOutlined sx={{color:'white',backgroundColor:"purple", padding:'2px', borderRadius:"7px", fontSize:'30px', marginRight:"5px" }} />
                                <div>
                                    <p>Sunday, 20 December</p>
                                    <h4>8:00 - 11:00 AM</h4>
                                </div>
                            </div>
                            <Edit />
                        </div>

                        <div className='stats-time'>
                            <div style={{display:'flex'}}>
                                <EmailOutlined sx={{color:'white',backgroundColor:"purple", padding:'2px', borderRadius:"7px", fontSize:'30px', marginRight:"5px" }} />
                                <div>
                                    <p>Declaration Centre</p>
                                    <h4>Internal Messages</h4>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default PortfolioProjects
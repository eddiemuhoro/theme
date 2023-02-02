import { AddOutlined, Comment, ContactMail, Face, Home, LockClock, Phone, Settings, SettingsPower, Star, ThumbUp } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import './styles.css'
const PortfolioProjects = () => {
  return (
    <div className='project-wrapper'>
        <nav>
            <Star />
            <ul>
                <li><Home /></li>
                <li><ContactMail/></li>
                <li><Phone/></li>
                <li><Face/></li>
                <li><LockClock/></li>
                <li><Settings/></li>
            </ul>

            <p><SettingsPower/></p>
        </nav>
        <main>
            <header>
                <input type='search' placeholder='search' />
            </header>
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
            <p style={{color:'rgb(229, 230, 232)'}}>I'm the section tag</p>
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
        </section>
    </div>
  )
}

export default PortfolioProjects
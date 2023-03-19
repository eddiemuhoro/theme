import React from 'react'

const Slider = () => {
    const images=[
        {
            id:'one',
            src: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id:'two',
            src: 'https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
            id:'three',
            src: 'https://images.unsplash.com/photo-1674050288049-7008419cd2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
        },
        {
            id:'four',
            src: 'https://images.unsplash.com/photo-1674071393771-eaeaa3d4d1c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
          id:'one',
          src: 'https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
      },
      {
          id:'two',
          src: 'https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      },
      
     ]
    
    return (
        <div>
            <section>
                <div>
                    <div className="item active" style={{backgroundImage:`url('https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg')`}}>
                        <div class="item-desc">
                            <h3>Dota 2</h3>
                            <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
                                Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage:`url('https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg')`}}>
                        <div className="item-desc" >
                            <h3>The Witcher 3</h3>
                            <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense
                                of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage:`url('https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg')`}}>
                        <div className="item-desc">
                            <h3>RDR 2</h3>
                            <p>RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
                                Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage:`url('https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg')`}}>
                        <div className="item-desc">
                            <h3>PUBG Mobile</h3>
                            <p>PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
                                Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage:`url('https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg')`}}>
                        <div className="item-desc">
                            <h3>Fortnite</h3>
                            <p>Battle royale where 100 players fight to be the last person standing. which was a community-created mod
                                for Blizzard Entertainment's Warcraft III.</p>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage:`url('https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg')`}}>
                        <div className="item-desc">
                            <h3>Far Cry 5</h3>
                            <p>Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.
                                which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slider
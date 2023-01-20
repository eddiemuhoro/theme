import React from 'react'
import axios from 'axios'
const Fetch = () => {
    const [posts, setPosts] = React.useState([])
    React.useEffect((e) => {
        e.preventDefault()

        //message to be sent
        const message = {
            title:  posts.title
        }

        axios.post('http://localhost:4000/message',message)
        .then(res => {

            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {

            console.log(err);
        })
    }, [])
    console.log(posts)

  return (
    <div>
        <h1>Hello World</h1>
        <form>
            <input type="text" placeholder="Enter your name"  value={posts.title} onChange={e => setPosts(e.target.value)} />

        </form>
    </div>
  )
}

export default Fetch
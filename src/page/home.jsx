import React from 'react'
import { Navbar } from '../components/navbar/navbar.component'
import { Posts } from '../components/Posts'
const Home = () => {
  return (
    <div>
        <div>
        <Navbar/>
        </div>
        <div style={{padding:'50px'}}>
        <Posts/>

        </div>
    </div>
  )
}

export {Home}
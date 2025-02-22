import React from 'react'
import { Posts } from '../components/posts/Posts'
import { Sugerencias } from '../components/sugerencias/Sugerencias'

export const Home = () => {
  return (
    <div className='home'>
        <Posts/>
        <Sugerencias/>
    </div>
  )
}

import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = (props) => {
  const data1 = useLoaderData()
  console.log('Home props', props, data1)

  // // 若配置了ErrorBoundary
  // // 可在ErrorBoundary中catch
  // throw new Error('12')

  return (
    <div>
      Home
    </div>
  )
}

export default Home
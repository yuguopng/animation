import React, { Suspense } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import './index.css'

const LinkDemo = (props) => {
  const len = useLoaderData()
  return (
    <div>
      <div>
        {
          new Array(len).fill(0).map((item, idx) => (
            <div className='link-item'>
              {idx + 1}: 
              <Link to={`/link/${idx}`}>home</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LinkDemo
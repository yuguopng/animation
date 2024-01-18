import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CodeSplitting = (props) => {
  const data1 = useLoaderData()
  console.log('CodeSplitting props', props, data1)

  return (
    <div>
      CodeSplitting
    </div>
  )
}

export default CodeSplitting
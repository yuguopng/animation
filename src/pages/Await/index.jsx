import React, { Suspense } from 'react'
import { useLoaderData, Await } from 'react-router-dom'
import { List } from 'react-content-loader'

const AwaitDemo = (props) => {
  const { info, desc } = useLoaderData()

  return (
    <div>
      {/* 高优先级信息 需要快速展示 */}
      <h3>姓名： <i>{info.userName}</i></h3>
      {/* 低优先级信息可以先不展示 登台其他内容完成后渲染 */}
      <Suspense fallback={<List />}>
        <Await
          // 接受一个 promise
          // 等待其完成后在渲染子元素
          resolve={desc}
          errorElement={(
            <div>
              can not get desc
            </div>
          )}
        >
          {(data) => <div>简介: {data}</div>}
        </Await>
      </Suspense>
    </div>
  )
}

export default AwaitDemo
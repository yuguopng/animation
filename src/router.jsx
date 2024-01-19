import { createHashRouter, createBrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Link from './pages/Link'

export const router = createHashRouter([
  {
    /**
     * 基础配置
     */

    /**
     * when the URL matches this segment
     * 路由配置
     * 完整配置 https://reactrouter.com/en/6.21.2/route/route#dynamic-segments
     */
    // "/page1/:id/:type"
    path: '/',
    element: <Home />,
    // /**
    //  * with this data loaded before rendering
    //  * 初始化 element 数据
    //  * 可在组件内使用 useLoaderData 读取获取的数据
    //  * @param {*} props 
    //  * @returns 
    //  */
    // loader: async (props) => {
    //   console.log("run loader", props)
    //   return new Promise((r) => {
    //     setTimeout(() => {
    //       r('loader success')
    //       // 页面 5s 后渲染
    //     }, 5000);
    //   });
    // },
    /**
     * 错误边界
     * loaders ｜ actions ｜ component rendering got error will render instead of `element`
     * errorElement 和 ErrorBoundary 均可 catch
     * ErrorBoundary 优先级大于 errorElement
     * 
     * 在组件内可使用 useRouteError 获取错误信息
     */
    // errorElement: <ErrorBoundary type="errorElement" />,
    ErrorBoundary,
    /**
     * 子节点
     */
    children: [
      
    ]
  },
  {
    /**
     * support code-splitting
     * lazy load
     */

    path: '/code-splitting',
    lazy: async () => {
      /**
       * 注意 export default 和 export const
       */
      const { default: Component } = await import(/* webpackChunkName: "CodeSplitting"  */ './pages/CodeSplitting')

      return {
        loader: async (props) => {
          console.log("run loader", props)
          return new Promise((r) => {
            setTimeout(() => {
              r('success')
              // 页面 5s 后渲染
            }, 5000);
          });
        },
        Component
      }
    },
  },
  {
    /**
     * Await
     */

    path: '/await',
    lazy: async () => {
      /**
       * 注意 export default 和 export const
       */
      const { default: Component } = await import(/* webpackChunkName: "Await"  */ './pages/Await')
      
      return {
        loader: async () => {
          const info = await new Promise((r) => {
            setTimeout(() => {
              r({
                userName: '余国平',
                userId: 1,
              })
            }, 500);
          });

          return {
            // 高优先级信息
            info,
            // 低优先级信息
            desc: new Promise((r) => {
              setTimeout(() => {
                r('我是余国平，一个小前端～')
              }, 2000);
            })
          }
        },
        Component
      }
    },
  },
  {
    /**
     * Link
     */

    path: '/link/:id?',
    element: <Link />,
    loader: async (props) => {
      console.log("run loader", props)
      return new Promise((r) => {
        setTimeout(() => {
          r(Math.floor(Math.random() * 100))
          // 页面 5s 后渲染
        }, 2000);
      });
    },
  }
])
import { useRouteError } from 'react-router-dom'

const ErrorBoundary = (props) => {
  console.log('ErrorBoundary props', props)
  let error = useRouteError();
  console.error('ErrorBoundary error', error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang! render error!</div>;
}

export default ErrorBoundary
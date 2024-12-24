"use client"

const ErrorBoundary = ({error,reset}:{error: Error;reset:()=>void;})=> {
  return (
    <div>Custom Error message {error.message}
    <button onClick={reset}>Tr again</button></div>
  )
}

export default ErrorBoundary
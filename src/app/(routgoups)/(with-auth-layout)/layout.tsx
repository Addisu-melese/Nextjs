import React from 'react'

const AuthLayout = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <>
        <h1>Common Authentication layout feature</h1>
        {children}
    </>
  )
}

export default AuthLayout
import Link from 'next/link'
import React from 'react'

const F4 = () => {
  return (
    <>    
    <div>F4 page</div>
    <div><Link href="/f1/f3/">F3</Link></div>
    <div><Link href="/about">About</Link></div>
    </>
  )
}

export default F4
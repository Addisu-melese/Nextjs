import Link from "next/link"
const page = () => {
  return (
    <>
    <h1>Product List</h1>
    <h2><Link href="/product/1" replace>product 1</Link></h2>
    <h2><Link href="/product/2">product 2</Link></h2>
    <Link href="/">Home</Link>
    </>
  )
}

export default page
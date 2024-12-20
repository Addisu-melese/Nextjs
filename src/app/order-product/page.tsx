"use client"
import { useRouter } from "next/navigation";
const page = () => {
    const router=useRouter();
    const handleonclick=()=>{
        router.push("/");//==router.replace("/")==router.back()==router.forward()

    }
  return (
    <>
    <h1>Order the product</h1>
    <button onClick={handleonclick}>Place product</button>
    </>
  )
}

export default page
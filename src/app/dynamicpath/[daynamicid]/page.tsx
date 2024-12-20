
import { Metadata } from "next";
type props={
  params:{
    daynamicid:string;
  };
};
export const generateMetadata=({params}:props)=>{
  return {
    title:`products ${params.daynamicid}`
  }
}
const page = ({params,}:{params:{daynamicid:string};}) => {
  return (
    <div>page1 {params.daynamicid}</div>
  )
}

export default page
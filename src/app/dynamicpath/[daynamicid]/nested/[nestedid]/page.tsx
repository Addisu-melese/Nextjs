import { error } from "console";
import Error from "next/error";

function getRandomInt(count:number) {
  return Math.floor(Math.random()*count);
}

const page = ({params}:
    {
        params:
        {
            nestedid:string,
            daynamicid:string
        };
    }
) => {
  const random=getRandomInt(2);
  if(random===1)
    {
    throw new ErrorEvent("Error loading review")
   }
  return (
    <div>daynamicid {params.daynamicid} nested {params.nestedid}</div>
  )
}

export default page
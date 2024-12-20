
const page = ({params}:{
    params:{
        slug:string[]
    };
}) => { 
  {
  if(params.slug.length===1)
   {
   return <div>Parameter {params.slug[0]}</div>
  }
  else if(params.slug.length===2)
    {
    return <div>Parameter {params.slug[0]} and {params.slug[1]}</div>
   }
   else 
     {
     return <div>many parameter inported</div>
    }
}
}

export default page
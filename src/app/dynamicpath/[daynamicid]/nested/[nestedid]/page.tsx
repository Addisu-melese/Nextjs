
const page = ({params}:
    {
        params:
        {
            nestedid:string,
            daynamicid:string
        };
    }
) => {
  return (
    <div>daynamicid {params.daynamicid} nested {params.nestedid}</div>
  )
}

export default page
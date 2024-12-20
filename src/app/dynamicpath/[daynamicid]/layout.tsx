
const NestedLayout=(
    { children,}: 
    {
        children: React.ReactNode;
    })=> 
    {
    return (<>
    <h1>COMMON HEADER FOR THIS NESTED LAYOUT</h1>
        {children}
      </>
    );
  }

export default NestedLayout
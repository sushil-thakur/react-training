const h1Style = {
  color: 'red',
  backgroundColor: 'yellow'
};

const app1=()=>{
  const num=10;
  return(
<div>
 <h1 style={h1Style}> hello World</h1>
 <p>{num}</p>
 <button onClick={()=>{
  console.log("first button clicked");
  alert("hi...whats up");
 }}>Click me</button>
</div>
  )
}
export default app1;
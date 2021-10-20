

export default function OnClickEvent(){
   function showName(){
       console.log("Mike");
   }
   function showAge(age){
       console.log(age)
   }
//    function showText(e){
//     console.log(e.target.value)
//    }

   function showText(txt) {
       console.log(txt)
   }
   
    return (
        <>
    <h1>Hello</h1>
    <button onClick={showName}>show name</button>
    <button onClick={()=>{
        showAge(10);
    }}>
        showage</button>
    {/* <input type="text" onChange={e=>{
        console.log(e.target.value)
    }}/> */}
        <input type="text" onChange={e=>{
            const txt = e.target.value;
            showText(txt); 
        }} />
        </>
   )
}
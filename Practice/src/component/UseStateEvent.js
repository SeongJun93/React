import {useState} from "react";

export default function UseStateEvent(){
    //let name = 'Mike';
    const [name, setName] = useState('Mike');

    // function changeName(){
    //     name = name === "Mike" ? "Jane" : "Mike";
    //     document.getElementById("name").innerText=name;
    // }

    function changeName(){
        //const newName = name === "Mike" ? "Jane" : "Mike";
        setName(name === "Mike" ? "Jane" : "Mike")
    }
    // useState 는 각각 따로 관리된다.
    return (
        <>
        <h1>state</h1>
        <h2 id="name">{name}</h2>
        <button onClick={changeName}>Change</button>
        <button onClick={()=>{
            setName(name === "Mike" ? "Jane" : "Mike");
        }}>Change2</button>
        </>
    )
}
import {useState} from "react";
import Props2 from "./Props2";

// export default function Props(props){
//     //let name = 'Mike';
//     const [name, setName] = useState('Mike');
//     const [age, setAge] = useState(props.age);

    export default function Props({age}){
        //let name = 'Mike';
        const [name, setName] = useState('Mike');
        const msg = age > 19 ? "성인입니다" : "미성년자 입니다.";

    // function changeName(){
    //     name = name === "Mike" ? "Jane" : "Mike";
    //     document.getElementById("name").innerText=name;
    // }

    // function changeName(){
    //     //const newName = name === "Mike" ? "Jane" : "Mike";
    //     setName(name === "Mike" ? "Jane" : "Mike")
    //     setAge(age+1)
    // }

    function changeName(){
        //const newName = name === "Mike" ? "Jane" : "Mike";
        setName(name === "Mike" ? "Jane" : "Mike")
    }
    // useState 는 각각 따로 관리된다.
    return (
        <>
        <h1>state</h1>
        <h2 id="name">{name}({age}) : {msg}</h2>
        <Props2 name={name}/>
        <button onClick={changeName}>Change</button>
        <button onClick={()=>{
            setName(name === "Mike" ? "Jane" : "Mike");
        }}>Change2</button>
        </>
    )
}
import React from 'react';
import Entry from "./pages/entry";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



function App() {

    gsap.registerPlugin(useGSAP);
    const container = useRef();
    const Tl = gsap.timeline();

    // const Tl = gsap.timeline();
    //
    // useGSAP(
    //     () => {
    //         // gsap code here...
    //         Tl
    //             .to(container.current, { x: 100,duration:3 })
    //             .to(container.current,{rotate:360,duration:3});
    //     },
    //     { scope: container }
    // ); // <-- scope is for selector text (optional)


    const handleClick = ()=>{
        if(true){
            Tl.to(container.current,{x:100,duration:3});
            console.log(Tl)
        }
        Tl.restart();
    }
  return (
   <Entry>
     <h1>section 1</h1>
     <button ref={container} className={"btn1"} onClick={()=>{handleClick()}}>hello world</button>
     <h1>section 3</h1>
     <h1>section 4</h1>
     <h1>section 5</h1>
   </Entry>
  );
}

export default App;

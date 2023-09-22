import { memo, useEffect, useState } from "react"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import "./rollButton.scss" ;

function RollButton() {
    const [scrollY,setScrollY] = useState(false) ;
    useEffect( () => {
        window.addEventListener("scroll", (e) => {
            if(window.scrollY<300) {
                setScrollY(false) ;
            } else {
                setScrollY(true) ;
            }
        })
    },[]) ;
    const rollToHead = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: "smooth"
        })
    }
    return <>
        { scrollY && <div className="roll" onClick={rollToHead}><KeyboardDoubleArrowUpIcon /></div> } 
    </>
}

export default memo(RollButton) ;
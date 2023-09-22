import { memo } from "react";
import "./ImageHover.scss" ; 

function ImageHover(props) {
    return <div className="imageHover">
        <img src={props.img} alt="" />
            <div className="content">
            <h4>{props.content}</h4>
            <button>Launch</button>
    </div>
</div>
}

export default memo(ImageHover)
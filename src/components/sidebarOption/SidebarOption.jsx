import { memo, useState } from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./SidebarOption.scss" ;
import ImageHover from "./imageHover/ImageHover";
import img1 from "../../assets/styling1.jpg" ;
import img2 from "../../assets/styling2.jpg" ;
import stylling1 from "../../assets/styling4.jpg" ;
import stylling2 from "../../assets/styling5.jpg" ;
import stylling3 from "../../assets/styling6.jpg" ;
import stylling4 from "../../assets/styling8.jpg" ;
import stylling5 from "../../assets/styling9.jpg" ;
import stylling6 from "../../assets/styling10.jpg" ;
import stylling7 from "../../assets/styling11.jpg" ;
import stylling8 from "../../assets/styling12.jpg" ;

function SidebarOption() {
    const [open,setOpen] = useState(true) ;
    const handleOpenSidebar = () => {
        setOpen(!open) ;
    }
    return <div className={"sideBarOption "+( open && "transform-X340px")}>
        <div className="sideBarOption_option">
            <span onClick={handleOpenSidebar}><SettingsOutlinedIcon /></span>
            <span><FavoriteBorderIcon/></span>
            <span><BookOutlinedIcon /></span>
            <span><ShoppingBagOutlinedIcon /></span>
        </div>
        <div className="sideBarOption_content">
            <h1>Create With Grand Tour</h1>
            <p>
                We designed Grand Tour theme to make it works especially for tour & travel site
                . Here are a few included examples that you can import with one click.
            </p>
            <div className="imageHoverWrapper">
                <ImageHover img={img1} content="Demo 1" />
                <ImageHover img={img2} content="Demo 2" />
            </div>
            <div className="predefinedColor">
                <h1>Predefined Colors</h1>
                <div className="colorWrapper">
                    <span className="red"></span>
                    <span className="orange"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                    <span className="skyblue"></span>
                    <span className="blue"></span>
                    <span className="purple"></span>
                    <span className="brown"></span>
                </div>
            </div>
            <h1>Predefined Stylings</h1>
            <div className="imageHoverWrapper scd">
                <ImageHover img={stylling1} content="Left Align Menu" />
                <ImageHover img={stylling2} content="Center Align " />
                <ImageHover img={stylling3} content="Center Logo + 2 Menu" />
                <ImageHover img={stylling4} content="Fullscreen Menu" />
                <ImageHover img={stylling5} content="Side Menu" />
                <ImageHover img={stylling6} content="With Frame" />
                <ImageHover img={stylling7} content="Boxed Layout" />
                <ImageHover img={stylling8} content="With Top Bar" />
            </div>
        </div>
    </div>
}

export default memo(SidebarOption) ;

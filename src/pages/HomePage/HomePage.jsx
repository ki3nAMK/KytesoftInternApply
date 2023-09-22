import { memo } from "react"
import NavBar from "../../components/NavBar/NavBar";
import Youtube from "../../components/youtube_video/Youtube";
import SidebarOption from "../../components/sidebarOption/SidebarOption";
import BodyContent from "../../components/bodyContent/BodyContent";
import Footer from "../../components/footer/footer";
import RollButton from "../../components/rollButton/rollButton";

function HomePage() {
    return <>  
        <NavBar></NavBar>
        <Youtube></Youtube>
        <SidebarOption></SidebarOption>
        <BodyContent></BodyContent>
        <Footer></Footer>
        <RollButton></RollButton>
    </>
}

export default memo(HomePage) ;
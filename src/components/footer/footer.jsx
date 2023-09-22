import { memo } from "react"
import "./footer.scss" ;
import award1 from "../../assets/awards1.png" ;
import recent1 from "../../assets/recent1.jpg" ;
import recent2 from "../../assets/recent2.jpg" ;
import recent3 from "../../assets/recent3.jpg" ;
import recent4 from "../../assets/recent4.jpg" ;
import recent5 from "../../assets/recent5.jpg" ;
import recent6 from "../../assets/recent6.jpg" ;
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return <div className="Footer">
        <div className="infoWrapper">
            <div className="info1 info">
                <h2>Our Awards</h2>
                <p>
                    London is a megalopolis of people, 
                    ideas and frenetic energy. 
                    The capital and largest city of the United Kingdom.
                </p>
                <div className="imageWrapper">
                    <img src={award1} alt="" />
                </div>
            </div>
            <div className="info2 info">
                <h2>Contact Info</h2>
                <p>
                    <span><PhoneAndroidOutlinedIcon /></span>
                    <span>1-567-124-44227</span>
                </p>
                <p>
                    <span><PlaceOutlinedIcon /></span>
                    <span>184 Main Street East Perl Habour 8007</span>
                </p>
                <p>
                    <span><AccessAlarmsOutlinedIcon /></span>
                    <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
                </p>
                <div className="iconWrapper">
                    <span><FacebookRoundedIcon /></span>
                    <span><TwitterIcon /></span>
                    <span><YouTubeIcon /></span>
                    <span><LinkedInIcon /></span>
                    <span><InstagramIcon /></span>
                </div>
            </div>
            <div className="info3 info">
                <h2>Recent Trips</h2>
                <div className="imageWrapper">
                    <img src={recent1} alt="" />
                    <img src={recent2} alt="" />
                    <img src={recent3} alt="" />
                    <img src={recent4} alt="" />
                    <img src={recent5} alt="" />
                    <img src={recent6} alt="" />
                </div>
            </div>
        </div>
        <div className="endFooter">
            <hr />
            <div className="outtro">
                <p>
                    © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
                </p>
                <div className="nav">
                    <span>Home</span>
                    <span>Tour</span>
                    <span>Blog</span>
                    <span>Purchase theme</span>
                </div>
            </div>
        </div>
    </div>
}

export default memo(Footer) ;
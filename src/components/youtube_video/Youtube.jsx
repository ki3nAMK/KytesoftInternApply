import { memo, useEffect, useState } from "react"
import youtubeVideo from "../../assets/y2mate.com - Spectacular Norway  from the air_1080p.mp4" ;
import "./Youtube.scss" ;
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function YouTube() {
    const [open,setOpen] = useState(false) ;
    const handleAdvanceOption = () => {
        setOpen(!open) ;
    }
    return <div className="YoutubeWrapper"> 
    <div className="videoContainer">
        <video src={youtubeVideo} autoPlay muted loop ></video>
    </div>
    <div className="contentTrailer">    
        <h1>Where do you want to go?</h1>
        <h3>Trips,experiences,and places. All in one service.</h3>
        <div className="inputWrapper">
            <div className="inputNExpandInput">
                <div className="input1">
                    <input type="text" placeholder="Destination, city"/>
                    <SearchIcon />
                </div>
                <div className="selectWrapper">   
                    <select name="" id="">
                        <option value="" selected>Any Month</option>
                        <option value="">January</option>
                        <option value="">Febulary</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                        <option value="">June</option>
                        <option value="">July</option>
                        <option value="">August</option>
                        <option value="">September</option>
                        <option value="">Optober</option>
                        <option value="">Noveber</option>
                        <option value="">December</option>
                    </select>
                    <CalendarTodayIcon />
                </div>
                <div className="selectWrapper">   
                    <select name="" id="">
                        <option value="" selected>Sort By Date</option>
                        <option value="">Price Low to High</option>
                        <option value="">Price High to Low</option>
                        <option value="">Sort By Name</option>
                        <option value="">Sort By Popularity</option>
                        <option value="">Sort By Review Score</option>
                    </select>
                    <CompareArrowsIcon />
                </div>
                <button><p>Search</p></button>
                { open && <div className="selectWrapper selectAdvance">   
                    <select name="" id="">
                        <option value="" selected>All Categorises</option>
                        <option value="">Mountain</option>
                        <option value="">Rural</option>
                        <option value="">Snow & Ice</option>
                        <option value="">Wildlife</option>
                    </select>
                    <KeyboardArrowDownIcon />
                </div> }

                { open && <div className="selectWrapper selectAdvance">   
                    <select name="" id="">
                        <option value="" selected>Any Destinations</option>
                        <option value="">Tokyo</option>
                        <option value="">Seoul</option>
                        <option value="">Paris</option>
                        <option value="">London</option>
                        <option value="">Venice</option>
                        <option value="">Miami</option>
                        <option value="">Rome</option>
                        <option value="">Prague</option>
                        <option value="">Calofornia</option>
                        <option value="">Kyoto</option>
                        <option value="">Hong Kong</option>
                        <option value="">Santorini</option>
                    </select>
                    <KeyboardArrowDownIcon />
                </div> }
                { open && <div className="input1 selectAdvance">
                    <input type="text" placeholder="Max budget ex.500"/>
                    <SearchIcon />
                </div> }
                <div className="advanceOption" onClick={handleAdvanceOption}>
                    { open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                    <span>Advanced Search</span>
                </div>
            </div>
        </div>
    </div>
    </div>
}

export default memo(YouTube) ;
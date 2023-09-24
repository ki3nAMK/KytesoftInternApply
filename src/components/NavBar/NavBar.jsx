import { memo , useState , useEffect } from "react"
import "./NavBar.scss" ;
import img from "../../assets/logo.png" ;
import mountain from "../../assets/moutain.jpeg" ;
import river from "../../assets/river.jpeg" ;
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const dataList = [{
    id:1,
    title:"Home" ,
    children:["Home 1 - Background Image","Home 2 - Youtube Video","Home 3 - Google Inspired","Home 4 - Travel Site"] 
},{
    id:2,
    title:"Tour" ,
    children:[{
        title:"Tour Classic Fullwidth" ,
        subchildren:["2 Columns","3 Columns","4 Columns"]
    },{
        title:"Tour Classic Sidebar" ,
        subchildren:["Right Sidebar","Left Sidebar"]
    },{
        title:"Tour Grid FullWidth" ,
        subchildren:["2 Columns","3 Columns","4 Columns"]
    },{
        title:"Tour Grid Sidebar" ,
        subchildren:["Right Sidebar","Left Sidebar"]
    },{
        title:"Tour Header Type" ,
        subchildren:["Features Image","Video"] 
    },{
        title:"Tour CateGorises" ,
        subchildren:["Rural","Snow & Ice","Wildlife","Mountain"] 
    }]
},{
    id:3,
    title:"Booking" ,
    children:[{
        title:"Online Payment for Booking" ,
        subchildren:["Variable Tour Pricing","Simple Tour pricing"]
    },{
        title:"Custom Booking Form" ,
        subchildren:["Booking Form + Sub Tour Date","Booking Form + Custom Date"]
    },{
        title: "Tour Durations" ,
        subchildren:["Single Day Tour","Multiple Days Tour"] 
    },{
        title:"Custom Booking URL for Affiliate Tour" ,
        subchildren:null 
    },{
        title:"Custom Booking using custom HTML & Shortcode" ,
        subchildren:null 
    },{
        title:"Header Option" ,
        subchildren:["Standart Background Header","Video Background Header"]
    },{
        title:"Layout Option" ,
        subchildren:["With Sidebar","FullWidth"] 
    }]
},{
    id:4 ,
    title:"Destination" ,
    children:["Destination Fullwidth","Destination + Video Header","Destination Right Sidebar","Destination Left Sidebar","Single Destination","Single Destination + Video"]
},{
    id:5 ,
    title:"Pages" ,
    children:["About Us","Contact Us","FAQs","Gallery","Page Fullwidth","Page + Video Background Header","Page Right Sidebar","Page Left Sidebar"]
},{
    id:6 , 
    title:"Blog" ,
    children:["Blog Right Sidebar","Blog Left Sidebar","Blog Fullwidth","Blog Grid Right Sidebar","Blog Grid Left Sidebar","Blog Grid Fullwidth","Blog Full + Grid Right Sidebar","Blog Full + Grid Left Sidebar","Blog Full + Grid Fullwidth"]
},{
    id:7 , 
    title:"Shortcodes" ,
    children:["Accordion & Toggles","Alert Boxes","Animated Content","Buttons & Social Icons","Columns","Google Maps","Image Frame & Animation","Image Teasers","Pricing Tables","Tabs"]
},{
    id:8 , 
    title:"Shop" ,
    children:["Shop Fullwidth","Shop Sidebar","Single Product Fullwidth","Single Product With Sidebar"]
}]

function NavBar() {
    const [open,setOpen] = useState(false) ;
    const [numLock,setNumLock] = useState(null) ;
    const [modeModal,setModeModal] = useState("translateX_34px") ;
    const [scrollY,setScrollY] = useState(true) ;
    const [bgWhite,setBgWhite] = useState(false) ;
    useEffect( () => {
        window.addEventListener("scroll", (e) => {
            const width = screen.width ;
            if(width>=943) {
                setScrollY(false) ;
                if(window.scrollY<300) {
                    setScrollY(true) ;
                } else {
                    setScrollY(false) ;
                }
            } else {
                setScrollY(true) ;
                if(window.scrollY>100) {
                    setBgWhite(true)
                } else {
                    setBgWhite(false)
                }
            }
        })
    },[]) ;
    const setUpMenuDrawerAfter = () => {
        const data = dataList.find( (obj) => {
            return obj.id === numLock ;
        }) ;
        const ulData = document.querySelector(".menuDrawer_before").querySelector("ul") ;
        if(data === undefined) {
            ulData.innerHTML = null ; 
            return ; 
        } else {
            console.log("check") ;
            data.children.forEach( (dataElem) => {
                if(typeof dataElem === "string") {
                    console.log("1") ;
                    const li = document.createElement("li") ;
                    li.innerHTML = `<p class="text">${dataElem}</p>`
                    ulData.appendChild(li) ;
                } else {
                    console.log("2") ;
                    const li = document.createElement("li") ;
                    li.innerHTML = `
                        <p class="text">${dataElem.title}</p>
                        <ul></ul>
                    `
                    const ulInside = li.querySelector("ul") ;
                    if(dataElem.subchildren === null) return ; 
                    dataElem.subchildren.forEach( (dataInside) => {
                        const newLi = document.createElement("li") ;
                        newLi.classList.add("liInside","text") ;
                        newLi.innerHTML = dataInside ;
                        ulInside.appendChild(newLi) ;
                    })
                    ulData.append(li) ;
                }
            })
        }
    }
    useEffect( () => {
        if(open) setUpMenuDrawerAfter() ;
    },[numLock])
    useEffect( () => {
        handleModal() ;
    },[open])
    useEffect( () => {
        if(modeModal==="translateX_34px") setTimeout(() => {
            setOpen(false) ;
        }, 250);
    },[modeModal])
    const handleFindNumNRender = (num) => {
        setNumLock(num) ;
        const menuDrawer = document.querySelector(".menuDrawer") ;
        menuDrawer.classList.add("translateX_minus8point5vw") ;
        menuDrawer.classList.remove("translateX_21vw") ;
    }
    const setBackMenuDropDown = () => {
        const menuDrawer = document.querySelector(".menuDrawer") ;
        menuDrawer.classList.remove("translateX_minus8point5vw") ;
        menuDrawer.classList.add("translateX_21vw") ;
        setNumLock(null) ;
    }
    const handleOpenModal = () => {
        setOpen(true) ;
    }
    const handleCloseModal = () => {
        setModeModal("translateX_34px") ;
    }
    const handleModal = () => {
        const modal = document.querySelector(".navBar_Blur_Drawer") 
          ? document.querySelector(".navBar_Blur_Drawer") : null ;
        if(modal===null) return ; 
        if(modal.classList.contains("translateX_34px")) {
            setModeModal("translateX_0") ;
        } else {
            setModeModal("translateX_34px")
        }
    }
    return <div className={"navbar "+(!scrollY && " hidden_navBar ")+(bgWhite && " bgWhite")}>
        <div className="navbar_ImgContainer">
            <img src={img} alt="" />
        </div>
        <div className="navbar_Content">
            <ul className="navbar_Content_List">
                <li className="navbar_Content_List_Item d-none"><p>Home</p><div><KeyboardArrowDownIcon/></div>
                    <ul className="menuDropDown">
                        <li className="menuDropDown_item"><p>Home 1 - Background Image</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Home 2 - Youtube Video</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Home 3 - Google Inspired</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Home 4 - Travel Site</p></li>                        
                    </ul>
                </li>
                <li className="navbar_Content_List_Item d-none"><p>Tour</p> <div><KeyboardArrowDownIcon/></div>
                    <ul className="menuDropDown">
                        <li className="specialMenu"><p>Tour Classic Fullwidth<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>2 Columns</p></li>
                                <div className="crossLine"></div>
                                <li><p>3 Columns</p></li>
                                <div className="crossLine"></div>
                                <li><p>4 Columns</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Tour Classic Sidebar<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>Right Sidebar</p></li>
                                <div className="crossLine"></div>
                                <li><p>Left Sidebar</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Tour Grid FullWidth<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>2 Columns</p></li>   
                                <div className="crossLine"></div>
                                <li><p>3 Columns</p></li>
                                <div className="crossLine"></div>
                                <li><p>4 Columns</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Tour Grid Sidebar<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>Right Sidebar</p></li>
                                <div className="crossLine"></div>
                                <li><p>Left Sidebar</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Tour List Sidebar<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>Right Sidebar</p></li>
                                <div className="crossLine"></div>
                                <li><p>Left Sidebar</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Tour Header Type<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>Features Image</p></li>
                                <div className="crossLine"></div>
                                <li><p>Video</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Tour CateGorises<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>Rural</p></li>   
                                <div className="crossLine"></div>
                                <li><p>Snow & Ice</p></li>
                                <div className="crossLine"></div>
                                <li><p>Wildlife</p></li>
                                <div className="crossLine"></div>
                                <li><p>Mountain</p></li>
                            </ul>
                        </li>                        
                    </ul>
                </li>
                <li className="navbar_Content_List_Item d-none"><p>Booking</p> <div><KeyboardArrowDownIcon/></div>
                    <ul className="menuDropDown">
                        <li className="specialMenu"><p>Online Payment for Booking<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>Variable Tour Pricing</p></li>
                                <div className="crossLine"></div>
                                <li><p>Simple Tour pricing</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Custom Booking Form<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>Booking Form + Sub Tour Date</p></li>
                                <div className="crossLine"></div>
                                <li><p>Booking Form + Custom Date</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Tour Durations<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>Single Day Tour</p></li>
                                <div className="crossLine"></div>
                                <li><p>Multiple Days Tour</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu p-top"><p>Custom Booking URL for Affiliate Tour</p></li>
                        <div className="crossLine"></div>
                        <li className="specialMenu p-top"><p>Custom Booking using custom HTML & Shortcode</p></li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Header Option<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>Standart Background Header</p></li>
                                <div className="crossLine"></div>
                                <li><p>Video Background Header</p></li>
                            </ul>
                        </li>
                        <div className="crossLine"></div>
                        <li className="specialMenu"><p>Layout Option<KeyboardArrowRightIcon/></p>
                            <ul>
                                <li><p>With Sidebar</p></li>
                                <div className="crossLine"></div>
                                <li><p>FullWidth</p></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="navbar_Content_List_Item d-none"><p>Destination</p> <div><KeyboardArrowDownIcon/></div>
                    <ul className="menuDropDown">
                        <li className="menuDropDown_item"><p>Destination Fullwidth</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Destination + Video Header</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Destination Right Sidebar</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Destination Left Sidebar</p></li> 
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Single Destination</p></li>      
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Single Destination + Video</p></li>      
                    </ul>
                </li>
                <li className="navbar_Content_List_Item d-none"><p>Pages</p> <div><KeyboardArrowDownIcon/></div>
                    <ul className="menuDropDown">
                        <li className="menuDropDown_item"><p>About Us</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Contact Us</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>FAQs</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Gallery</p></li> 
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Page Fullwidth</p></li>      
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item p-top"><p>Page + Video Background Header</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Page Right Sidebar</p></li>        
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Page Left Sidebar</p></li>  
                    </ul>
                </li>
                <li className="navbar_Content_List_Item d-none"><p>Blog</p> <div><KeyboardArrowDownIcon/></div>
                    <ul className="menuDropDown">
                        <li className="menuDropDown_item"><p>Blog Right Sidebar</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Blog Left Sidebar</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Blog Fullwidth</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Blog Grid Right Sidebar</p></li> 
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Blog Grid Left Sidebar</p></li>      
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Blog Grid Fullwidth</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Blog Full + Grid Right Sidebar</p></li>        
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Blog Full + Grid Left Sidebar</p></li>  
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Blog Full + Grid Fullwidth</p></li>  
                    </ul>
                </li>
                <li className="navbar_Content_List_Item d-none"><p>Shortcodes</p> <div><KeyboardArrowDownIcon/></div>
                    <ul className="menuDropDown">
                        <li className="menuDropDown_item"><p>Accordion & Toggles</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Alert Boxes</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Animated Content</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Buttons & Social Icons</p></li> 
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Columns</p></li>      
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Google Maps</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Image Frame & Animation</p></li>        
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Image Teasers</p></li>  
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Pricing Tables</p></li>  
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Tabs</p></li> 
                    </ul>
                </li>
                <li className="navbar_Content_List_Item d-none"><p>Shop</p> <div><KeyboardArrowDownIcon/></div>
                    <ul className="menuDropDown">
                        <li className="menuDropDown_item"><p>Shop Fullwidth</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Shop Sidebar</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Single Product Fullwidth</p></li>
                        <div className="crossLine"></div>
                        <li className="menuDropDown_item"><p>Single Product With Sidebar</p></li> 
                    </ul>
                </li>
                <li className={"navbar_Content_List_Item navbar_Content_List_logo "+(bgWhite ? "cl_black" : "cl_white")} 
                    onClick={handleOpenModal} 
                ><MenuIcon /></li>
                <li className={"navbar_Content_List_Item navbar_Content_List_logo "+(bgWhite ? "cl_black" : "cl_white")}> 
                    <Badge badgeContent={1} color="warning">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </li>
            </ul>
        </div>
        { open && <div className="navbar_menuSideBar"></div> }
        { open && <div className="navbar_Blur ">
            <div className={"navBar_Blur_Drawer "+modeModal}>
                <div className="classheader"><button
                    onClick={handleCloseModal}
                ><ClearIcon /></button></div>
                <div className="menuDrawer translateX_21vw">
                    <div className="menuDrawer_after">
                        <ul>
                            {dataList.map( (elem) => {
                                return <li key={elem.id} className="text" onClick={(e) => {
                                    handleFindNumNRender(elem.id) ;
                                }}>{elem.title}</li>
                            })}
                        </ul>
                    </div>
                    <div className="menuDrawer_before">
                        <div className="back" onClick={setBackMenuDropDown}><KeyboardArrowLeftIcon/> <p>Back</p></div>
                        <ul></ul>
                    </div>
                </div>
                <div className="crossLine"></div>
                <div className="footer">
                    { open && <div className="imgContainer"></div> }
                    <div className="imageWrapper">
                        <div className="image">
                            <img src={mountain} alt="" />
                        </div>
                        <div className="detail">
                            <div className="price">
                                <div className="price_detail">$3,900</div>
                            </div>
                            <h1>Swiss Alps Trip</h1>
                            <div className="rate">
                                <span><StarIcon/></span>
                                <span><StarIcon/></span>
                                <span><StarIcon/></span>
                                <span><StarIcon/></span>
                                <span><StarBorderIcon/></span>
                            </div>
                        </div>
                    </div>
                    <div className="imageWrapper">
                        <div className="image">
                            <img src={river} alt="" />
                        </div>
                        <div className="detail">
                            <div className="price">
                                <div className="price_detail_second">
                                    <span className="text_hidden">$4,900</span>
                                    <span>$4,200</span>
                                </div>
                            </div>
                            <h1>5 Lake of Fuji San</h1>
                            <div className="rate">
                                <span><StarIcon/></span>
                                <span><StarIcon/></span>
                                <span><StarIcon/></span>
                                <span><StarIcon/></span>
                                <span><StarBorderIcon/></span>
                            </div>
                        </div>
                    </div>
                    <div className="logo">
                        <span><FacebookIcon /></span>
                        <span><TwitterIcon/></span>
                        <span><YouTubeIcon /></span>
                        <span><LinkedInIcon /></span>
                        <span><InstagramIcon /></span>
                    </div>
                </div>
            </div>
        </div> }
    </div>
}

export default memo(NavBar) ;
import React from "react";
import "./index.css";
import { Language, NotificationsNone, Settings } from '@mui/icons-material';

export default function Topbar(){
    return (
        <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Proyecto Código</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/291368672_5738760612801612_1469977525127736896_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGU7JVFvPx_9YrLyOD4009muJ9H-2fDHD64n0f7Z8McPtsnxmUynz2zz-hotFyQrZUgGFVjkzBkipO3jIf6E0_p&_nc_ohc=N4QrtCgaJIsAX91yQFL&_nc_ht=scontent-lim1-1.xx&oh=00_AT948wfkoi7d6ZaHhbmtdMFIlGJIeOmng5lKs4viGJHxlA&oe=62FD6710" 
                alt="" className="topAvatar">
                </img>
            </div>
        </div>
        </div>
    )
}


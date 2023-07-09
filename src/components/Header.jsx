import React from "react";

import Welcome from "./assets/Welcome";
import Taskbar from "./header-contents/Taskbar";
import Profile from "./header-contents/Profile";

function Header() {
    return (
        <div>
            <Welcome description="Welcome back!" />
            <Taskbar />

            <div className="profile-container">
                <Profile />
            </div>
            
        </div>
    )
}
export default Header;
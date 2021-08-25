export const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 id="sidebar-heading">RESTOIC</h3>
            <h6 id="sidebar-subheading">SMART COACH</h6>
            <ul className="sidebar-list">
                <li>
                    <i className="fas fa-home"/>
                    <p>WEEKLY TASKS</p>
                </li>
                <li>
                    <i className="fas fa-spinner"/>
                    <p>TEAM PROGRESS</p>
                </li>
                <li>
                    <i className="fas fa-download"/>
                    <p>DOWNLOADS</p>
                </li>
                <li>
                    <i className="fas fa-file"/>
                    <p>CHOOSE YOUR PROGRAM</p>
                </li>
            </ul>
            <div id="sidebar-footer">
                <hr></hr>
                <ul className="sidebar-list">
                    <li>
                        <i className="fas fa-cog"/>
                        <p>TEAM MEMBERS</p>
                    </li>
                    <li>
                        <i className="fa fa-sign-out"/>
                        <p>LOGOUT</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
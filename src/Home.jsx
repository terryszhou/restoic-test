export const Home = (props) => {
    let teamData = props.teamMembers.map((member, id) => {
        return (
            <>
                <li className="team-list-item">
                    <i className="fas fa-user"/>
                    <div>
                        <p className="email">{member.email}</p>
                        <p className="info">{member.position} | {member.status}</p>
                    </div>
                </li>
                <hr className="team-line"/>
            </>
        )
    })

    return (
        <div className="home-container">
            <h3 id="home-heading">Admin</h3>
            <div id="team-box">
                <h6 id="team-heading">TEAM MEMBERS</h6>
                <button id="team-invite-button">INVITE</button>
                <hr className="team-line"/>
                <ul id="team-list">
                    {teamData}
                </ul>
            </div>
        </div>
    )
}
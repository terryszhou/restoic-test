import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Home } from './Home'
import { Sidebar } from './Sidebar'
import { teamMembers } from './data/teamMembers'

export const App = () => {
    return (
        <Router>
            <Route
                exact path="/"
                render={() => <Home teamMembers={teamMembers}/>}
            />
            <Sidebar />
        </Router>
    )
}

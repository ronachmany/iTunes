import React from 'react';
import {Search} from '../Search/Search'
import {MediaPlayer} from '../MediaPlayer/MediaPlayer'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import * as s from './App.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TopTenModal from '../TopTenModal/TopTenModal'

function App(){
    return(
        <Router>
            <div>
                <div className={s.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={s.grow}>
                            <Link to={'/'}>iTunes</Link>
                        </Typography>
                        <TopTenModal/>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                <div>
                    <Route path="/" exact component={Search} />
                    <Route path="/track/:trackId" component={MediaPlayer} />
                </div>
            </div>
            </div>
        </Router>
    )
}

export default App;

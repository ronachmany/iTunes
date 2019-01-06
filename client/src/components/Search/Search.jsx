import React, {Component} from 'react';
import * as s from './Search.module.css'
import {TrackLayout} from './TrackLayout/TrackLayout'
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import searchService from '../../services/TrackService'


export class Search extends Component {
    state = {searchText: '', trackList: []};

    handelSubmit = async (event) => {
        event.preventDefault();
        const response = await searchService.search(this.state.searchText);
        this.setState({trackList: response.data.results});
    };

    handelOnChange = (event) => {
        this.setState({searchText: event.target.value});
    };

    render() {
        const {trackList, searchText} = this.state;
        return (
            <Grid container justify="center">

                <Grid item xs={5}>
                    <Paper className={s.searchBar}>
                        <form onSubmit={this.handelSubmit}>
                            <Grid container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center">
                                <Grid item>
                            <InputBase className={s.grow} value={searchText} onChange={this.handelOnChange}
                                       placeholder="Search..."/>
                                </Grid>
                            <Grid item>
                            <IconButton onClick={this.handelSubmit}>
                                <SearchIcon/>
                            </IconButton>
                            </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <TrackLayout trackList={trackList}/>
            </Grid>
        );
    }
}

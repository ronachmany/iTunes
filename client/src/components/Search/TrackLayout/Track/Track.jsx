import React from 'react';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import * as s from './Track.module.css'
import {Link} from 'react-router-dom'

export function Track(props) {
    const {trackId, artworkUrl100, artistName, kind, trackName} = props.item;
    return (
        <Grid item xs={6}>
            <Link to={`/track/${trackId}`}>
                <Paper className={s.track}>
                    <Grid container
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start"
                          spacing={24}
                    >
                        <Grid item xs={3}>
                            <img src={artworkUrl100} />
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container
                                  direction="column"
                                  justify="flex-start"
                                  alignItems="flex-start">
                                <Grid item>
                                    tack name: {trackName}
                                </Grid>
                                <Grid item>
                                    artist: {artistName}
                                </Grid>
                                <Grid item>
                                    kind: {kind}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        </Grid>
    );
}

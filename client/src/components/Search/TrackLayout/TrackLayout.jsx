import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Track} from './Track/Track'

export function TrackLayout(props) {
    return (
        <Grid container spacing={24}>
            {props.trackList.map((track, index) => {
                return <Track key={index} item={track}/>
            })}
        </Grid>
    );
}


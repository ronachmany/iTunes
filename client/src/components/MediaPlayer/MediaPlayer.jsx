import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress';
import TrackService from '../../services/TrackService'
import * as s from './MediaPlayer.module.css'

export class MediaPlayer extends Component {
    state = {track: {}, isLoaded: false};
    getTrack = async(trackId) => {
        const response = await TrackService.getTrack(trackId);
        return response.data.results[0];
    };

    async componentDidMount(){
        const track = await this.getTrack(this.props.match.params.trackId);
        this.setState({track: track, isLoaded: true});
    };

    mediaRender = () => {
        const {kind, previewUrl} = this.state.track;
        return kind === 'song' ?
            <audio src={previewUrl} controls/> :
            <video width="320" height="240" controls>
                <source src={previewUrl} type="video/mp4">
                </source>
            </video>
    };

    render() {
        if (this.state.isLoaded) {
            const {trackName} = this.state.track;
            return (
                <Grid className={s.container} container
                      direction="row"
                      justify="space-around"
                      alignItems="center">
                    <Grid item xs={7}>
                        <Paper>
                            <Grid container
                                  direction="column"
                                  justify="center"
                                  alignItems="center">
                                <Grid item>
                                    <h1>{trackName}</h1>
                                </Grid>
                                <Grid item>
                                    {this.state.isLoaded && this.mediaRender()}
                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            );
        }
        else{
            return (
                <Grid container
                      justify="center"
                      alignItems="center">
                    <CircularProgress/>
                </Grid>
            )
        }
    }
}

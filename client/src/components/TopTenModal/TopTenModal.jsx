import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import StatisticService from '../../services/SatisticService'


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class TopTenModal extends React.Component {

    constructor(prop){
        super(prop);
        this.state = {open: false, topTen: []};
    }

    getTopTen = async() => {
        let response = await StatisticService.topTen();
        this.setState({topTen: response.data});
    };

    handleOpen = () => {
        this.setState({ open: true });
        this.getTopTen();
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleOpen}>Top Hits</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <h1>
                            Top 10 Searches
                        </h1>
                        {this.state.topTen.map((result, index) => {
                            return <h6 key={index}>{result.search} - {result.count}</h6>
                        })}

                    </div>
                </Modal>
            </div>
        );
    }
}

TopTenModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const TopTenModalWarped = withStyles(styles)(TopTenModal);

export default TopTenModalWarped;
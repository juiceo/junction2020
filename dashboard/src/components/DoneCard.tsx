import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {}

const DoneCard = (props: Props) => {
    return (
        <Box height={200} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h3">That's it for now!</Typography>
            <Typography variant="body2">Check back tomorrow for more suggestions!</Typography>
        </Box>
    );
};
export default DoneCard;

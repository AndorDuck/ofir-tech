import { Favorite, MoreHoriz } from '@mui/icons-material';
import { Box, Chip, IconButton, Toolbar } from '@mui/material';

export function AdHeaderControls(props) {

    return (
        <Toolbar disableGutters sx={{
            marginBottom: 2
        }}>
            <Box sx={{
                flexGrow: 1
            }}>
                {props.dateDiff < 5 && <Chip color='success' label="Nyt Job" />}
                {props.dateDiff > 15 && <Chip color='error' label="Udløber snart" />}
            </Box>
            <IconButton>
                <Favorite />
            </IconButton>

            <IconButton>
                <MoreHoriz />
            </IconButton>
        </Toolbar>)
}

import { ArrowForward, Place } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/future/image';

// import styles from '../styles/Home.module.css'
export function AdHeader(props) {
    return (<Stack direction={{
        xs: 'column',
        lg: 'row'
    }} gap={5}>
        <Box sx={{
            flexWrap: 'wrap',
            order: {
                xs: 2,
                lg: 1
            }
        }}>
            <Stack spacing={2}>
                <Box>
                    <Typography variant='link'>{props.hiringCompany?.name}</Typography>
                </Box>
                <Box>
                    <Typography variant='h1'>{props.heading}</Typography>
                </Box>

                <Box>
                    <Stack gap={1} direction='row'>
                        <Typography variant='subtitle1' sx={{           
                            color: '#a3a3a3',
                            flexShrink: 1
                        }}>{props.workTime?.[0]?.name}</Typography>
                        <Divider flexItem orientation='vertical' />
                        <Typography variant='subtitle1' sx={{
                            flexShrink: 1
                        }}>{props.locations?.[0]?.location?.formatted_address}</Typography>
                    </Stack>
                </Box>

                <Box>
                    <Stack gap={1} direction='row' alignItems='center'>
                        <Typography variant='subtitle2'>ID: {props.id}</Typography>
                        <Divider flexItem orientation='vertical' />
                        <Typography variant='subtitle2'>Indrykket for {props.dateDiff < 2 ? `${props.dateDiff} dag` : `${props.dateDiff} dage`} siden</Typography>
                        <a href={`https://www.google.com/maps/place/${props.locations?.[0]?.location?.formatted_address}`} target='_blank' rel="noreferrer">
                            <Stack direction={'row'} alignItems='center'>
                                <Box>
                                    <Place />
                                </Box>
                                <Box>
                                    <Typography variant='link'>Se på kort</Typography>
                                </Box>
                            </Stack>
                        </a>
                    </Stack>
                </Box>
                <Box>
                    <Button size='large' fullWidth sx={{
                        maxWidth: {sm: 350},
                        background: 'linear-gradient(to right, #0f446d, #0b5385bf)',
                        color: '#fff',
                        borderRadius: 5,
                        justifyContent: 'start'
                    }} variant='contained'>
                        <Box>
                            Søg dette job
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            marginLeft: 1,
                            flexGrow: 1,
                            justifyContent: 'end'
                        }}>
                            <ArrowForward />
                        </Box>
                    </Button>
                </Box>
            </Stack>
        </Box>

        <Box sx={{
            order: {
                xs: 1,
                lg: 2
            }
        }}>
            <Box sx={{
                minWidth: 300,
                height: '100%',
                minHeight: 200,
                position: 'relative'
            }}>
                {props.hiringCompany?.logo_url && <Image fill style={{
                    objectFit: 'contain'
                }} src={props.hiringCompany.logo_url} alt={props.hiringCompany?.description} />}
            </Box>
        </Box>

    </Stack>);
}

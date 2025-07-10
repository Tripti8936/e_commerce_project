import { createTheme } from '@mui/material/styles';
import { BREAKPOINTS } from './constants';

let theme = createTheme();
export default theme = createTheme({
    breakpoints: BREAKPOINTS,
    spacing: 8,
    typography: {
        h1: {
            fontSize: 23,
            fontFamily: 'Inter-Bold',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 21,
            },
        },
        h2: {
            fontSize: 20,
            fontFamily: 'Inter-Medium',
        },
        h3: {
            fontSize: 17,
            fontFamily: 'Inter-Medium',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 15,
            },
        },
        h4: {
            fontSize: 16,
            fontFamily: 'Inter-Medium',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 14,
            },
        },
        h5: {
            fontSize: 15,
            fontFamily: 'Inter-Medium',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 14,
            },
        },
        h6: {
            fontSize: 13,
            fontFamily: 'Inter-Regular',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 12,
            },
        },
        subtitle1: {
            fontSize: 12,
            fontFamily: 'Inter-Medium',
        },
        subtitle2: {
            fontSize: 16,
            fontFamily: 'Inter-Medium',
        },
        body1: {
            fontSize: 14,
            fontFamily: 'Inter-Medium',
        },
        body2: {
            fontSize: 13,
            fontFamily: 'Inter-Medium',
        },
        button: {
            fontSize: 17,
            fontFamily: 'Inter-Medium',
        },
    },
});

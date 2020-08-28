import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        action: {
            active: '#002884',
            hover: "#93d5fa",
            selected: "#00a2ff",
            disabled: "eb4034",

        },
        text: {
            primary: '#000',
            secondary: '#222',
        },

    },

});
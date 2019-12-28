import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple'

let theme = createMuiTheme({
    pallette: {
        primary: red,
        secondary: purple,
    },
    status: {
        danger: 'orange'
    },

});

theme = responsiveFontSizes(theme);

export default theme;
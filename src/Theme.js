import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "40px",
          border: "1px solid #46B0E6",
          fontSize: "14px",
          fontWeight: "600",
          padding: "8px 16px",
          "&:hover": {
            backgroundColor: "#46B0E6",
            color: "#fff",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#F9FAFF",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #CBCBCB",
          },
        },
      },
    },
  },
});
export default theme;
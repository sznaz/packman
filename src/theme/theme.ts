import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shape: {
    borderRadius: 12,
  },

  palette: {
    primary: {
      main: "#dc2626",
    },
    secondary: {
      main: "#f97316",
    },
    background: {
      default: "#f9fafb",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily:
            "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        },
      },
    },
MuiOutlinedInput: {
  styleOverrides: {
    root: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#d1d5db",
      },

      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#6b7280",
      },

      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: "#dc2626",
      },

      "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#dc2626",
      },
    },
  },
},
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

import { createTheme } from "@mui/material/styles";
import ComponentsOverrides from './overrides';

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        bold: true;
    }
}

const JobFactorTheme = createTheme();
JobFactorTheme.components = ComponentsOverrides(JobFactorTheme);

export { JobFactorTheme };

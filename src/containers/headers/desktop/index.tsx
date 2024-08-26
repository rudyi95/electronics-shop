import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { CustomIcon } from "src/components";
import { IconType } from "src/types/enums";
import { SearchInput } from "src/components/inputs";

export const DesktopHeader: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar>
          <CustomIcon type={IconType.logo} color="black" />
          <SearchInput />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

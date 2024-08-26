import { TextField } from "@mui/material";
import React from "react";
import { CustomIcon } from "src/components/customIcon";
import { IconType } from "src/types/enums";

export const SearchInput: React.FC = () => {
  return (
    <TextField
      placeholder="Search"
      variant="outlined"
      InputProps={{
        startAdornment: <CustomIcon type={IconType.search} />,
      }}
      sx={{ backgroundColor: "#F5F5F5" }}
    />
  );
};

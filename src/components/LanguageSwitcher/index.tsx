"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

export default function LanguageSwitcher() {
  const [language, setLanguage] = React.useState("");
  const locale = useLocale();
  const pathName = usePathname();
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const nextLocale = event.target.value;
    router.replace(pathName, { locale: nextLocale });
  };

  React.useEffect(() => {
    setLanguage(locale);
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="language"
          onChange={handleChange}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"bn"}>Bengali</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

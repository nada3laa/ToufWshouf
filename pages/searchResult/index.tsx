import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  Grid,
  Stack,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import BackgroundImage from "@/components/ui/BackgroundImage";
import bgSearch from "@/assets/images/search.jpg";
import FilterSearch from "@/pages/searchResult/_components/Filter";
import { StarHalfRounded } from "@mui/icons-material";
import SearchItem from "@/components/products/ProductDisplay";

interface Props {}
const Index: NextPage<Props> = () => {
  const { t } = useTranslation();
  const [select, setSelect] = useState("Featured");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  return (
    <div>
      <Head>
        <title> search Result </title>
      </Head>
      <BackgroundImage imageSrc={bgSearch}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          <Typography variant="h1" sx={{ color: "body.light" }}>
            {t("Entertainment Trip")}
          </Typography>
        </Stack>
      </BackgroundImage>
      <Container maxWidth="lg">
        <Grid container sx={{ mt: 3 }} spacing={4}>
          <Grid item xs={3}>
            <FilterSearch />
          </Grid>
          <Grid item xs={9}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center">
                <Typography variant="h4">{t("Search Result")}</Typography>
                <Typography variant="h5">{t(" (50 Trip)")}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1" sx={{ mr: 0.5 }}>
                  {t("Sort by:")}
                </Typography>
                <FormControl variant="standard">
                  <Select
                    id="start"
                    value={select}
                    onChange={handleChange}
                    defaultValue={"Featured"}
                    sx={{
                      "&::before  ": {
                        borderBottom: "unset !important",
                      },
                    }}
                  >
                    <MenuItem value={"Featured"}>{t("Featured")}</MenuItem>
                    <MenuItem value={2}>1</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
              <SearchItem />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;

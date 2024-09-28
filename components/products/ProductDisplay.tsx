import { Grid, Box, Stack, Typography, Button, Paper, IconButton } from "@mui/material";
import Tags from "@/components/products/Tags";
import ProductRating from "@/components/products/ProductRating";
import Img from "@/assets/images/products/S1.jpg";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import ImageWithPrice from "@/components/products/ImageWithPrice";
import DeleteIcon from '@mui/icons-material/Delete';
interface Props {
  // id: number;
  // title: string;
  // rating: number;
  // mainImage: string;
  price?: number;
  offerPrice?: number | undefined;
  offer?: boolean;
  myBooking?:boolean
}
const ProductDisplay: FunctionComponent<Props> = ({
  offer = false,
  price = 850,
  offerPrice,
  myBooking=true,
}) => {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={1}
      sx={{
        position: "relative",
        backgroundColor: "gray.light",
        my: 5,
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={2} sx={{mt:0}}>
        <Grid item xs={3.5} sx={{ pt: "0 !important" }}>
        <ImageWithPrice price={price} src={Img} offerPrice={offerPrice} />
        </Grid>
        <Grid item xs={8.5} sx={{ p: 3 }}>
          <Stack
            direction="column"
            alignItems="start"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography variant="h3">{t("Gravity Code")}</Typography>
              {
                myBooking ? (
                  <IconButton>
                    <DeleteIcon sx={{color:"error.main"}}/>
                  </IconButton>
                ):(
                  
                  <ProductRating rating={4.5} readOnly />
                  )
              }
            </Stack>
            <Tags tags="Entertainment Trip, Historic Trip, Youth Journey" />

            <Typography variant="body1">
              {t(
                "Gravity Code is the Largest Adventure Park in Egypt that brings you joyfulness. Gravity Code is set to change the recreation landscape in Egypt"
              )}
            </Typography>
            <Button variant="contained" size="large">
              {t("More Details")}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDisplay;

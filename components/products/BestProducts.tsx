import { products } from '@/data/products';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Product from './Products';

interface Props {
  title: string;
  offers?: boolean;
}

const BestProducts: FunctionComponent<Props> = (props) => {
  const { offers, title } = props;

  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 11, mb: 3 }}>
      <Typography variant='h2' sx={{ textAlign: 'center', mb: 3 }}>
        {title}
      </Typography>
      <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}>
        {products.slice(0, 3).map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </Stack>
      <Grid container item xs={12} justifyContent='center' sx={{ mt: 4 }}>
        <Grid item xs={3}>
          <Button variant='contained' size='large' fullWidth>
            {t('See all')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BestProducts;

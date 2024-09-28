import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  TextField,
  Stack,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
  Button,
  Autocomplete,
} from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import AuthLayout from '@/components/AuthLayout';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';
import {countries} from "@/constants/countries";
interface State {
  email: string;
  password: string;
  showPassword: boolean;
  RememberMe: boolean;
}

interface Props {}

const Index: NextPage<Props> = () => {
  const { t } = useTranslation();

  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    RememberMe: false,
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <AuthLayout>
      <>
        <Head>
          <title> Sign Up </title>
        </Head>
        <Paper elevation={0}>
          <Container sx={{ py: 2 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
              Register
            </Typography>
            <Grid container direction="column" spacing={3}>
              <Grid item xs={12}>
                <label htmlFor="Fullname">
                  <Typography variant="subtitle1">{t('Full name')}</Typography>
                </label>
                <TextField
                  id="Fullname"
                  fullWidth
                  
                  variant="outlined"
                  placeholder={t('Enter your Full Name')}
                  sx={{ mt: 1 }}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="email">
                  <Typography variant="subtitle1">
                    {t('Email Address')}
                  </Typography>
                </label>
                <TextField
                  id="email"
                  fullWidth
                  variant="outlined"
                  type="email"
                  placeholder={t('Enter your email')}
                  sx={{ mt: 1 }}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="phoneNumber">
                  <Typography variant="subtitle1">
                    {t('Phone number')}
                  </Typography>
                </label>
                <TextField
                  id="phoneNumber"
                  fullWidth
                  type="number"
                  variant="outlined"
                  placeholder={t('Enter your phone Number')}
                  sx={{ mt: 1 }}
                />
              </Grid>
              <Grid item xs={12}>
              <label htmlFor="country">
                  <Typography variant="subtitle1">
                    {t('Nationality')}
                  </Typography>
                </label>

                <Autocomplete
                  id="country"
                  sx={{ width: '100%' }}
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Choose a country"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="Address">
                  <Typography variant="subtitle1">{t('Address')}</Typography>
                </label>
                <TextField
                  id="Address"
                  fullWidth
                  variant="outlined"
                  placeholder={t('Enter your Address')}
                  sx={{ mt: 1 }}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="password">
                  <Typography variant="subtitle1">
                    {t('Create your password')}
                  </Typography>
                </label>

                <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
                  <OutlinedInput
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    fullWidth
                    placeholder={t('Enter your password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ py: '13px' }}
                  fullWidth
                >
                  <Typography variant="button">{t('Sign Up')}</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="body1">
                    {' '}
                    {t('do you have an account?')}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: 'primary.main' }}
                  >
                    <Link href="/login">{t('Sign in')}</Link>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </>
    </AuthLayout>
  );
};

export default Index;

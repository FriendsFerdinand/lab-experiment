import type { NextPage } from 'next';
import {Container, Box, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Link, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GetQueries, getStaticQueryProps, withInitialQueries } from 'jotai-query-toolkit/nextjs';
import { appProviderAtomBuilder } from 'micro-stacks/react';
import { StacksMainnet, StacksMocknet } from 'micro-stacks/network';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useAuth } from 'micro-stacks/react';
import { useHandleMint } from '../hooks/use-mint';
import { installWalletDialogAtom } from '../store/connection';
import { useAtom } from 'jotai';


const Home: NextPage = () => {
  const { isSignedIn, handleSignIn, session } = useAuth();
  const handleMint = useHandleMint();
  const [open, setOpen] = useAtom(installWalletDialogAtom);


  return (
    <Container
      component="main"
      maxWidth="xs" 
      sx={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: "center",
      }}
    >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Mint your Guinea Pig
          </Typography>
          <Box component="form" noValidate sx={{ width: 300, mt: 1 }}>
            <Button
              onClick={
                isSignedIn
                ? () => handleMint()
                : () => {
                  try {
                    handleSignIn();
                  } catch (_e) {
                    console.log(_e);
                  }
                  !session && setOpen(true);
                }
              }
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Mint
            </Button>
          </Box>
        </Box>
      </Container>
  )
}

export default Home;


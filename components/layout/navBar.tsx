import { AppBar, Button, IconButton, SvgIcon, Toolbar, Typography } from '@mui/material';
import { useAuth } from 'micro-stacks/react';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Box } from '@mui/system';
import React from 'react';
import { installWalletDialogAtom } from '../../store/connection';
import { useAtom } from 'jotai';

export default function Navbar() {
    const { isSignedIn, handleSignIn, handleSignOut, isLoading, session } = useAuth();
    const [open, setOpen] = useAtom(installWalletDialogAtom);
    
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar color="primary" >
                <Toolbar>
                    <Button
                        href="#"
                        sx={{
                            backgroundColor: "rgba(91, 129, 154, 0.5)",
                            color: "white"
                        }}
                    >
                        <Typography 
                            variant="h6"
                            component="div"
                        >
                            MIA Beachfronts
                        </Typography>
                    </Button>
                    <Typography
                        component="div"
                        sx={{
                            flexGrow: 1,
                            // backgroundColor: "red"
                        }}
                    >
                    </Typography>
                    <Button
                        variant="contained"
                        endIcon={<AccountBalanceWalletIcon />}
                        onClick={
                            isSignedIn
                            ? () => handleSignOut()
                            : () => {
                                try {
                                    handleSignIn();
                                } catch (_e) {
                                    console.log(_e);
                                }

                                !session && setOpen(true);
                            }
                        }
                        
                        sx={{
                            backgroundColor: "rgba(91, 129, 154, 0.5)",
                            color: "white"
                        }}
                    >
                        {isLoading ? `Loading...` : isSignedIn ? `Sign out` : `Connect STX Wallet`}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
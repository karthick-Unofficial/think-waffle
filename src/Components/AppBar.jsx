import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const AppBarComponent = () => {
    const styles = {
        appBar: {
            backgroundColor: '#6c4d2f',
            boxShadow: '0 4px 2px -2px gray',
            marginBottom: 15
        },
        wrapper: {
            display: "flex",
            alignItems: "center",
            padding: 10
        },
        logo: {
            width: 200,
            height: 200
        },
        menuItem: {
            flex: 1,
            fontFamily: "Ephesis",
            fontSize: 24,
            cursor: "pointer",
            fontWeight: "bold"
        }
    };

    return (
        <AppBar position="static" style={styles.appBar}>
            <div style={styles.wrapper}>
                <Typography style={styles.menuItem}>Home</Typography>
                <Typography style={styles.menuItem}>About Us</Typography>
                <Typography style={styles.menuItem}>Menu</Typography>
                <div style={{ flex: 1 }}>
                    <img src={"/think-waffle/Assets/Images/logo.png"} alt="Logo" style={styles.logo} />
                    <Typography style={styles.menuItem}>Order Now</Typography>
                </div>
                <Typography style={styles.menuItem}>Order</Typography>
                <Typography style={styles.menuItem}>Contact Us</Typography>
                <Typography style={styles.menuItem}>Complaints</Typography>
            </div>
        </AppBar>
    );
};

export default AppBarComponent;
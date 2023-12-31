import React from 'react';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import Page from '@/components/Page';
import {
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppCurrentSubject,
    AppConversionRates
} from '@/components/_dashboard/app';

const DashboardApp = (): JSX.Element => {
    return (
        <Page title="Dashboard ">
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Dashboard</Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={8}>
                        <AppWebsiteVisits />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppCurrentVisits />
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppConversionRates />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppCurrentSubject />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
};

export default DashboardApp;

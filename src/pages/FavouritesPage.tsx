import {
    Typography,
    Container,
    Grid,
    Box,
    Card,
    CardContent,
} from "@mui/material";
import LeftCard from "./LeftCard";

function HomePage() {
    return (
        <Container maxWidth="lg">
            <Grid
                container
                justifyContent="space-around"
                spacing={4}
                alignContent="center"
                style={{ marginTop: 0, marginBottom: 30 }}
            >
                <LeftCard />

                <Grid item xs={12} sm={7} justifyContent="center" alignItems="center">
                    <Grid container spacing={2} textAlign="center">
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />
                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />
                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} mb={1}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;

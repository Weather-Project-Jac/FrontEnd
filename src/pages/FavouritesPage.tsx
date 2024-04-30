import {
    Typography,
    Container,
    Grid,
    Box,
    Card,
    CardContent,
} from "@mui/material";
import LeftCard from "../components/LeftCard";
import { display } from "@mui/system";

function HomePage() {
    return (
        <Container maxWidth="xl" style={{ display: 'flex' }}>
            <Grid
                container
                justifyContent="space-around"
                spacing={4}
                alignContent="center"
                style={{ marginTop: 0, marginBottom: 30 }}
            >
                <LeftCard />


                {/* 
                Fixing column to row 
                <Grid container style={{ display: "flex", justifyContent: "space-evenly", flexDirection: 'column' }}>
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((items) => (
                        <Grid item xs={4} style={{ textAlign: "center", paddingLeft: 0 }}>
                            <Typography variant="h6">{items}</Typography>
                            <Typography style={{
                                fontSize: 30,
                                fontWeight: 600
                            }}></Typography>
                        </Grid>
                    ))}
                </Grid> */}

                <Grid item xs={4} sm={7} justifyContent="space-evenly" >
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
            </Grid>
        </Container >
    );
}

export default HomePage;
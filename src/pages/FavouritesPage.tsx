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
import icons from "../assets/icons";
import { UserStore } from "../store/store";

function HomePage() {
    const favouriteCities = UserStore((state) => state.addFavouriteCities);
    const removeFavourite = UserStore((state) => state.removeFavouriteCities);
    console.log("Added? ", favouriteCities("Ciao"))
    console.log("Removed? ", removeFavourite("Ciao"))

    return (
        <Container maxWidth="xl" >
            <Grid
                container
                justifyContent="space-around"
                spacing={4}
                alignContent="center"
                style={{ marginTop: 0, marginBottom: 30 }}
            >
                <LeftCard />

                <Grid item xs={12} sm={7} style={{ paddingLeft: 0 }}>
                    <Grid container spacing={10} style={{ height: '90vh', paddingTop: 50, paddingBottom: 50, paddingLeft: 130 }} alignItems="center" display={'flex'} >
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((items) => (
                            <Grid item xs={12} sm={4} key={items}>
                                <Card style={{ color: 'white', backgroundColor: '#1D2837', borderRadius: '15px', boxShadow: '12px 10px 10px rgba(0,0,0, .5)' }}>
                                    <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'center' }}>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            Locality
                                        </Typography>
                                        <Box
                                            component='img'
                                            sx={{
                                                // display: 'block',
                                                width: '70%',
                                                margin: 'auto',
                                            }}
                                            src={icons.clear} />
                                        <Typography variant="body1" color="white" sx={{
                                            pl: 1,
                                            textAlign: 'center',
                                            fontSize: 30,
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 600
                                        }}>
                                            24°
                                        </Typography>
                                        <Typography variant="body1" color="white" sx={{
                                            textAlign: 'center',
                                            fontSize: 20,
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 300
                                        }}>
                                            Sunny
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        </Container >
    );
}

export default HomePage;
import {
    Typography,
    Container,
    Grid,
    Box,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import LeftCard from "../components/LeftCard";
import icons from "../assets/icons";
//import { UserStore } from "../store/store";

function HomePage() {
    /*     const favouriteCities = UserStore((state) => state.addFavouriteCities);
        const removeFavourite = UserStore((state) => state.removeFavouriteCities);
        console.log("Added? ", favouriteCities("Ciao"))
        console.log("Removed? ", removeFavourite("Ciao")) */

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth='xl' >
            <Grid
                container
                justifyContent="space-around"
                spacing={4}
                alignContent="center"
                style={{ marginTop: 0 }}
            >
                {/* <LeftCard /> */}

                <Grid item sm={11} style={{ paddingLeft: 0 }}>
                    <Grid container spacing={10} style={{ paddingTop: 50, paddingLeft: isSmallScreen ? 30 : 80 }} alignItems="center" display={'flex'} justifyContent={'center'} >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <Grid item xs={12} sm={3} key={item} alignItems={"center"}>
                                <Card style={{ color: 'white', backgroundColor: '#1D2837', borderRadius: '15px', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', cursor: 'pointer' }}>
                                    <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'center' }}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            textAlign: 'center',
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 600
                                        }}>
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
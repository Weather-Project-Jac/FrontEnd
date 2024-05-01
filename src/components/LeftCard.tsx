import {
    Typography,
    Grid,
    Box,
    Card,
    CardContent
} from "@mui/material";
import icons from '../assets/icons/index.ts';

function LeftCard() {
    return (
        <Grid item xs={12} sm={5} style={{ paddingLeft: 0 }}>
            <Card style={{ backgroundColor: '#1D2837', color: 'white', margin: '0 auto', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', height: '100%' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid container rowSpacing={2} display={"flex"} justifyContent={"space-between"} alignItems={"flex-end"} >
                        <Grid item marginLeft={2} marginTop={2}>
                            <Typography variant="h4" gutterBottom align="left">
                                Locality
                            </Typography>
                        </Grid>
                        <Grid item marginRight={2}>
                            <Typography variant="h6" gutterBottom align="right">
                                Time
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                component='img'
                                sx={{
                                    display: 'block',
                                    width: '55%',
                                    margin: 'auto',
                                }}
                                src={icons.thunderstorm} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"Inter, sans-serif"} fontWeight={300} fontSize={70} marginBottom={0}>
                                Clear
                            </Typography>
                            <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"Inter, sans-serif"} fontWeight={900} fontSize={60}>
                                24°
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign='center' >
                            <Grid container spacing={2}>
                                {["iconThermometer", "iconWind", "iconCloud", "iconHumidity"].map((item: string) => (
                                    <Grid item xs={6} md={6} display={"flex"} key={item} justifyContent={"center"} alignItems={"center"}>
                                        <Box
                                            component='img'
                                            src={icons[item]}
                                            sx={{
                                                maxWidth: 50,
                                                // marginLeft: "25%",
                                            }}
                                        />
                                        <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"Inter, sans-serif"} fontWeight={500} marginBottom={0} marginLeft="10%">
                                            30%
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default LeftCard;

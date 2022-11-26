import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Head from "next/head";

export default function dashboard() {
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <Head></Head>

      <main>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 400,
                }}
              >
                <Typography gutterBottom variant="h5" component="h2">
                  Dashboard Session
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        {/* </ThemeProvider> */}
      </main>
    </div>
  );
}

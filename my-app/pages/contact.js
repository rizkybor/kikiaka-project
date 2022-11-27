import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Page | Kikiaka</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          {/* <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 38,
            pb: '100vh',
          }}
        > */}


          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About Me.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          <br></br>
            <AudioPlayer
            src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
            // onPlay={e => console.log("onPlay")}
          />

          
            <Link href="/">
              <h2>Back to Home &rarr;</h2>
            </Link>
          </Container>
          
        </div>
        
      </main>

      <footer className={styles.footer}>
        <p> @2022 - Kikiaka Digital Project</p>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}

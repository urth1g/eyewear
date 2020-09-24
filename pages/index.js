import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid, Button } from '@material-ui/core';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cannon Eyewear</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <main style={{width:'100%'}}>
         <Grid container xs direction="row">
           <Grid item xs={12} style={{position:'relative'}}>
             <div className="bg">
               <div className="text_center heading fade-in">
                 <p><i class="fas fa-glasses"></i></p>
                 <h2 style={{marginBottom:'0px'}}>C A N N O N</h2>
                 <p style={{marginTop:'5px'}}>E Y E W E A R</p>
               </div>

               <nav className="nav fade-in">
                 <a href="#" className="navLink">HOME</a>
                 <a href="#" className="navLink">FILOSOFIA</a>
                 <a href="#" className="navLink">PROGETTO</a>
                 <a href="#" className="navLink">CONTATTI</a>
                 <a href="#" className="navLink">ITA</a>
                 <a href="#" className="navLink">FAMIGLIE</a>
               </nav>

               <div className="text_center">
                 <img src="/whitelogo.png" width="15%" className="logo fade-in delay" />
               </div>

               <div className="text_center" style={{marginTop:'6rem'}}>
                 <Button className="ctaBtn fade-in delay" size="large">Our Best Work</Button>
               </div>
             </div>
           </Grid>
         </Grid>

         <div className="bg2">
              <h1>VISION</h1>
              <p style={{width:'50%'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <Grid container>
          <Grid item xs>
            <div className="imgZ"></div>
          </Grid>
          <Grid item xs>
            <div className="imgZ"></div>
          </Grid>
          <Grid item xs>
            <div className="imgZ"></div>
          </Grid>
          <Grid item xs>
            <div className="imgZ"></div>
          </Grid>
          <Grid item xs>
            <div className="imgZ"></div>
          </Grid>
        </Grid>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

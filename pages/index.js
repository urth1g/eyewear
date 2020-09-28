import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid, Button } from '@material-ui/core';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blastech Eyewear</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
      </Head>

      <main style={{width:'100%'}}>
         <Grid container direction="row">
           <Grid item xs={12} style={{position:'relative'}}>
             <div className="bg">
               <div className="text_center heading fade-in">
                 <img src="/logo_white.png" width="15%" style={{marginBottom:'5rem', paddingTop:'1rem'}} />
               </div>

               <nav className="nav fade-in">
                 <a href="#" className="navLink">HOME</a>
                 <a href="#" className="navLink">OUR PHILOSOPHY</a>
                 <a href="#" className="navLink">PROJECT</a>
                 <a href="#" className="navLink">CONTACT</a>
                 <a href="#" className="navLink">FAMILY</a>
               </nav>

               <div className="text_center">
                 <img src="/white_monogram.png" width="15%" className="logo fade-in delay" />
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
        </Grid>
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
        </Grid>

        <Grid container className="bg3" direction="column" spacing={0}>
          <Grid container>
            <Grid container justify="center" item xs={12}>
              <h1> Our Goals </h1>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid container item xs justify="center" alignItems="center" spacing={1} className="grid-div-cnt" >
              <div className="inner">
                <div className="icon">
                  <i class="fas fa-icons"></i>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </Grid>
            <Grid container item xs justify="center" alignItems="center" spacing={1} className="grid-div-cnt">
              <div className="inner">
                <div className="icon"> 
                  <i class="fas fa-icons"></i>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </Grid>
            <Grid container item xs justify="center" alignItems="center" spacing={1} className="grid-div-cnt">
              <div className="inner">
                <div className="icon"> 
                  <i class="fas fa-icons"></i>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </Grid>
          </Grid>
        </Grid>
      </main>



      <footer>
        <Grid container>
          <Grid container item xs justify="flex-end">
            <div className="fwidth">
              <img src="/white_logo_vertical.png" width="50%" style={{marginBottom:'0.8rem', paddingTop:'1rem'}} />
              <div className="footer_text">
                <p>Via della Centa, 24 – Z.I.
                31040 SEGUSINO (TV) – Italia</p>
                <p>Email: support@blastech.it</p>
                <p>T +39 0423 97 99 07</p>
                <p>F +39 0423 97 99 08</p>
                <p>C.F. e P.I IT 02339470268</p>
                <p>Codice univoco G9YK3BM</p>
              </div>
            </div>
          </Grid>
          <Grid container item xs justify="flex-end">
            <div className="footer_text fwidth">
             <h4>Menu</h4>
             <nav className="nav">
               <a href="#" className="navLink">HOME</a>
               <a href="#" className="navLink">OUR PHILOSOPHY</a>
               <a href="#" className="navLink">PROJECT</a>
               <a href="#" className="navLink">CONTACT</a>
               <a href="#" className="navLink">FAMILY</a>
             </nav>
            </div>
          </Grid>
          <Grid container item xs justify="flex-end">
            <div className="footer_text fwidth">
             <h4>Social Links</h4>
             <nav className="nav">
               <a href="#" className="navLink"><i class="fab fa-instagram"></i></a>
               <a href="#" className="navLink"><i class="fab fa-facebook"></i></a>
             </nav>
            </div>            
          </Grid>
          <Grid container item xs justify="flex-end">
            <div className="footer_text fwidth">
             <h4>Legal</h4>
             <nav className="nav">
               <a href="#" className="navLink">Privacy Policy</a>
             </nav>
            </div>             
          </Grid>
        </Grid>
      </footer>
    </div>
  )
}

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SlideHome from '../components/SlideHome';
import Footerbar from '../components/Footerbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SlideHome />
              
        <div>
          <section className="fdb-block pt-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-5 text-center pb-md-5 ">
                  <h1>Witpakul Shop</h1>
                  <p className="lead">WitPaKul is an e-commerce website which sell various kind of figures. Wanna get some? Visit our website and go get yours!</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="fdb-block">
            <div className="container">
              <div className="row text-left">
                <div className="col-12 col-md-8 m-auto col-lg-4">
                  <div className="fdb-box fdb-touch">
                    <h2>NEW! Miku Snow 2021 Figure</h2>
                    <p>The virtual singing sensation is back for another run! ♪
                      This 1/8 scale figure of Hatsune Miku was first released in September, but due to it's overwhelming popularity, a re-release has already been announced for October! From VOCALOID2's popular "Character Vocal Series 01" comes a realistic PVC figure of the mascot character Hatsune Miku.
                      She's jumped out of the virtual world and into this cute figure, so be sure to take one home with you.</p>
                  </div>
                </div>
                <div className="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                  <div className="fdb-box fdb-touch">
                    <h2>Comiket @Tokyo 2021</h2>
                    <p>You can buy PRISMA Project goods and FA in this event. Don't forget to come & get yours! Comiket is a grassroots market focused on the sale of doujin (self-published) works, 
                      Comiket is a not-for-profit event administered by the volunteer-run Comic Market Preparatory Committee (ComiketPC). Inaugurated on 21 December 1975, with an estimated 700 attendees, 
                      the convention has since grown to become the largest fan convention in the world, with an estimated attendance of over half a million.</p>
                  </div>
                </div>
                <div className="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                  <div className="fdb-box fdb-touch ">
                    <h2>SAO the movie!</h2>
                    <p>Sword Art Online Progressive: Aria of a Starless Night is a 2021 Japanese animated science fiction action adventure film based on the Sword Art Online: Progressive light novels written by Reki Kawahara 
                      and illustrated by abec, which serve as an expanded retelling of Sword Art Online's Aincrad storyline. The film is produced by A-1 Pictures and directed by Ayako Kōno, while featuring character designs by Kento Toya and music by Yuki Kajiura. 
                      The film premiered in Japan on October 30, 2021.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footerbar />
      </div>
    );
  }
}

export default Home;

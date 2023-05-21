import React from "react";
import contactVideo from "../../videos/CraveNoshContactVideo.mov";
import "./About.css";
function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-11 flex-column flex-lg-row d-flex justify-content-center justify-content-lg-evenly align-items-md-center">
            <div className="col-12 col-md-9 col-lg-4 videoDiv d-flex justify-content-center">
              <video className="AboutVideo" autoPlay muted>
                <source src={contactVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-12 mb-5 mb-lg-0 col-lg-6 d-flex justify-content-center aboutTextDiv">
              <div className="col-10 col-lg-10 d-flex justify-content-center flex-column">
                <h5>OM</h5>
                <h1>CRAVE NOSH</h1>
                <p>
                  Verb: To <i>crave</i> something is to have a great desire for
                  it, as one might <i>crave a delish meal (nosh).</i>
                </p>
                <hr className="hrAboutTop"></hr>
                <p>
                  Mitt namn är Elizabeth och jag driver bloggen CRAVE NOSH.
                  Matlagning har varit en stor del av mitt liv sedan barsben och
                  idag är intresset för matlagning större än någonsin. Tack vare
                  mitt andra stora intresse, vilket är restaurangbesök, har jag
                  kunnat kamma hem matinspirationer från olika kulturer både
                  inrikes och utrikes.
                </p>
                <p>
                  Jag har min underbara sambo att tacka för att han skapat
                  bloggen och att jag vågat ta mitt matlagningsintresse till en
                  ny nivå. Genom CRAVE NOSH kan jag samla alla mina recept i en
                  plattform och förhoppningsvis kan jag inspirera andra till att
                  testa nya recept och våga gå utanför sin comfortzone.
                </p>
                <p>
                  Att få njuta av god mat i gott sällskap är det bästa sätt att
                  sätta guldkant på tillvaron.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrFooter mt-5"></hr>
    </div>
  );
}

export default About;

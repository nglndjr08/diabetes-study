import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import aboutImage from './assets/image.png'
import './App.css'

function App() {
  return (
    <div className="page-wrapper">

      <h1 className="page-title">
        Help Improve Diabetes Care: Explore a Potential New Treatment!
      </h1>

      <div className="container">

        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <h3>Contents</h3>

          <ul className="contents-list">
            <li><a href="#about">About the Study</a></li>
            <li><a href="#why">Why Participate?</a></li>
            <li><a href="#rights">Your Rights</a></li>
            <li><a href="#who">Who Can Participate?</a></li>
            <li><a href="#details">More Study Details</a></li>
            <li><a href="#research">About the Research Centre</a></li>
            <li><a href="#location">Study Location</a></li>
          </ul>

          <div className="next-steps">
            <h3>Next Steps</h3>
            <ol>
              <li>Complete the study questionnaire</li>
              <li>Understand if you're eligible to participate</li>
            </ol>

            <a
              href="https://forms.gle/mtZqVdhTbrcJG4TV9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Click Here</button>
            </a>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="main-content">

          {/* ABOUT SECTION */}
 <section id="about">
  <h3>About the Study</h3>

  <img
    src={aboutImage}
    alt="Older man enjoying fresh air near the ocean"
    className="about-image"
  />

  <p>
    Struggling with type 2 diabetes? Join this research study to explore a new
    potential treatment that aims to lower blood sugar and body weight. With
    type 2 diabetes significantly increasing the risk of cardiovascular disease,
    finding effective treatments is crucial. This study will compare different
    doses of a new treatment to see how well they help manage blood sugar
    and reduce body weight.
  </p>

  <p>
    Participants will play a vital role in potentially transforming diabetes care
    while receiving close health monitoring and support. If you have type 2
    diabetes, your involvement could help pave the way for better treatments
    and improved health outcomes. Join researchers in making a difference!
  </p>
</section>

          <section id="who">
  <h3>Who Can Participate?</h3>

  <ul className="who-list">
    <li>
      People aged 18–75 who are diagnosed with type 2 diabetes mellitus
      for at least greater than 180 days
    </li>
    <li>
      Must have been on a stable daily dose of Metformin with or without
      SGLT2 inhibitors such as Jardiance, Jardiamet, Glyxambi,
      Forxiga, Qtern and Xigduo XR
    </li>
    <li>Must have HbA1c of 7.5% – 10%</li>
    <li>Must not have been diagnosed with diabetic retinopathy or maculopathy</li>
  </ul>
</section>

          {/* RESEARCH SECTION */}
          <section id="research">
            <h3>About the Research Centre</h3>

            <div className="research-card red"></div>

            <p className="research-title">Macquarie University</p>
            <p>Macquarie University is a leading public research university renowned for its commitment to academic excellence and innovative research. Offering a wide range of programs across disciplines such as business, education, law, science, and the arts, the university is dedicated to fostering knowledge and embracing different views.
</p>

            <div className="research-card blue"></div>

            <p className="research-title">Box Hill Hospital</p>
            <p>Box Hill Hospital in Melbourne is one of the seven hospitals that are governed within the Eastern Health network, which provides health care services across the Eastern metropolitan area of Victoria.
</p>

            <p className="approval-text">
              This study has been reviewed and approved by the HREC for the sites indicated above.
            </p>
          </section>

{/* LOCATION */}
<section id="location">
  <h3>Study Location</h3>

  <iframe
    title="Study Locations Map"
    src="https://www.google.com/maps/d/embed?mid=1yMhEKfpGzi1ZlW2SaAxB2UzYbCJn-A4&ehbc=2E312F"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>
</section>

        </main>
      </div>
    </div>
  );
}

export default App;
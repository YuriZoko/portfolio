import React, {Fragment} from 'react';
import About from '../components/about/about';
import CommonHead from '../components/commonHead';
import ContactArea from '../components/ContactArea';
import ExprienceSec from '../components/Exprience/Exprience';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/Navbar/Navbar';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import FormationSec from '../components/formation/Formation';

export default function Home() {
  return (
    <div id='scrool'>
      <CommonHead/>
      <Fragment>
            <div className="br-app">
                <Navbar/>
                <Hero/>
                <About/>
                <ServiceSection/>
                <ExprienceSec/>
                <ProjectSection/>
                <FormationSec/>
                <ContactArea/>
                <Footer/>
                <Scrollbar/>
            </div>
        </Fragment>
    </div>
  )
}

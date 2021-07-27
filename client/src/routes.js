import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import GoogleFontLoader from 'react-google-font-loader';
import Particles from 'react-particles-js';

import Header from './Components/navigation/header';
import Footer from './Components/footer/footer'
import MainLayout from './hoc/mainLayout'
import Home from './Components/HomePage/Home'
import About from './Components/About/about'
import Services from './Components/Services/services'
import Projects from './Components/Projects/projects'
import Contact from './Components/Contact/contact'

function Routes() {
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setWindowsWidth(window.innerWidth)
    })
    return (
        <>
            <Particles
                params={{
                    particles:{
                        number:{
                            value:20,
                            density: {
                                enable:true,
                                value_area: 900
                            }
                        },
                        shape:{
                            type:"circle",
                            stroke:{
                                width:6
                            }
                        }

                    }
                }}
            />
            <BrowserRouter>
                <Header windowsWidth={windowsWidth} />
                <MainLayout>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact">
                            <Contact windowsWidth={windowsWidth}/>
                        </Route>
                        <Route path="/" component={Home} />
                    </Switch>
                </MainLayout>
                <Footer />
            </BrowserRouter>
            <GoogleFontLoader
                fonts={[
                    { font: 'Roboto', weights: [100, 300, 400, 900] },
                    { font: 'Fredoka One' }
                ]}
            />
        </>

    );
}

export default Routes;
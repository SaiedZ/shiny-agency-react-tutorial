import React from 'react'

import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Profile from './pages/Profile'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import { ThemeProvider, SurveyProvider } from './utils/context'

import GlobalStyle from './utils/style/GlobalStyle'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/survey/:questionNumber"
                            element={<Survey />}
                        ></Route>
                        <Route path="/results" element={<Results />}></Route>
                        <Route
                            path="/freelances"
                            element={<Freelances />}
                        ></Route>
                        <Route
                            path="/profile/:idParam"
                            element={<Profile />}
                            render={(props) => <Profile {...props} />}
                        />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)

import React, { useEffect } from 'react'
import Features from "../components/Features"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import { useDispatch, useSelector } from 'react-redux'
import { cleanStateAction } from '../redux/actions/userAuth'
import { useHistory } from 'react-router-dom'


function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.authReducer)

    useEffect(() => {
        if(currentUser.email && !currentUser.isLogout)
        history.goBack();
        dispatch(cleanStateAction());
    }, [currentUser.email,currentUser.isLogout,dispatch,history])
    return (
        <div className="">
            <Header />
            <Hero />
            <Features />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home

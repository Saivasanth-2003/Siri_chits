

import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import History from './pages/History/History';
const Signin = lazy(()=>import('./Components/Registration page/Signin/Signin'));
const AppScreen = lazy(()=> import('./Components/AppScreen/AppScreen'));

const ScreenOne = lazy(() => import('./Components/Onboarding/ScreenOne'));
const ScreenTwo = lazy(() => import('./Components/Onboarding/ScreenTwo'));
const ScreenThree = lazy(() => import('./Components/Onboarding/ScreenThree'));
const FeatureScreen = lazy(() => import('./Components/FeaturesScreen/FeatureScreen'));
const Security = lazy(() => import('./Components/FeaturesScreen/Security'));
const Bidding = lazy(() => import('./Components/FeaturesScreen/Bidding'));
const Notification = lazy(() => import('./Components/FeaturesScreen/Notification'));
const Tracking = lazy(() => import('./Components/FeaturesScreen/Tracking'));
const Analysis = lazy(() => import('./Components/FeaturesScreen/Analysis'));
const Signup = lazy(() => import('./Components/Registration page/Signup/Signup'));

function App() {
  return (
    <Router >
      <Suspense fallback={<div style={{display:"flex",alignItems:"center", justifyContent:"center",height:"100vh"}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ScreenOne />} />
          <Route path="/screen2" element={<ScreenTwo />} />
          <Route path="/screen3" element={<ScreenThree />} />
          <Route path="/feature" element={<FeatureScreen />}>
            <Route path="security" element={<Security />} />
            <Route path="bidding" element={<Bidding />} />
            <Route path="notification" element={<Notification />} />
            <Route path="tracking" element={<Tracking />} />
            <Route path="analysis" element={<Analysis />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/appscreen" element={<AppScreen/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="profile" element={<Profile/>}/>
              <Route path="history" element={<History/>}/>
          </Route>
        </Routes>
      </Suspense>
    </Router>
    
  );
}

export default App;

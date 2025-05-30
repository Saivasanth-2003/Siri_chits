// import React, { lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ScreenOne = lazy(()=> import('./Components/Onboarding/ScreenOne'));
// import ScreenTwo from './Components/Onboarding/ScreenTwo';
// import ScreenThree from './Components/Onboarding/ScreenThree';
// import Security from './Components/FeaturesScreen/Security';
// import Bidding from './Components/FeaturesScreen/Bidding';
// import Notification from './Components/FeaturesScreen/Notification';
// import Analysis from './Components/FeaturesScreen/Analysis';
// import Tracking from './Components/FeaturesScreen/Tracking';
// import Signup from './Components/Registration page/Signup/Signup';
// import FeatureScreen from './Components/FeaturesScreen/FeatureScreen';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ScreenOne />} />
//          <Route path="/screen2" element={<ScreenTwo />} /> 
//         <Route path="/screen3" element={<ScreenThree />} />
//         <Route path="/feature" element={<FeatureScreen/>}>
//           <Route path="security" element={<Security/>}/>
//           <Route path="bidding" element={<Bidding/>}/>
//           <Route path="notification" element={<Notification/>}/>
//           <Route path="tracking" element={<Tracking/>}/>
//           <Route path="analysis" element={<Analysis/>}/>
//           </Route>
//         <Route path="/signup" element={<Signup/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Components/Registration page/Signin/Signin';

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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

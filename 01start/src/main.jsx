import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Workshops from './pages/Workshops.jsx';
import Contact from './pages/Contact.jsx';
import RapidSkill from './pages/courses/RapidSkill.jsx';
import CoreSkill from './pages/courses/CoreSkill.jsx';
import AiRoboLab from './pages/services/AiRoboLab.jsx';
import Products from './pages/Products.jsx';
import ApplyMentor from './pages/ApplyMentor.jsx';
import Register from './pages/Register.jsx';
import SignIn from './pages/Signin.jsx';
import Ourteam from './pages/Ourteam.jsx';
import About from './pages/About.jsx';
import PrivacyPolicy from './pages/Privacypolicy.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import InnovationLab from './pages/InnovationLab.jsx';
import PmShriYojna from './pages/services/PmShriYojna.jsx';
import CompositeSkillLab from './pages/services/CompositeSkillLab.jsx';
import AerospaceLab from './pages/services/AerospaceLab.jsx';
import AtalTinkeringLab from './pages/services/AtalTinkeringLab.jsx';
import ComingSoon from './pages/Comingsoon.jsx';
import StudentRegisteration from './pages/StudentRegisteration.jsx';
import AiCurriculum from './pages/AiCurriculum.jsx';
import Teachertraining from './pages/Teachertraining.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/workshops',
    element: <Workshops />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/courses/rapidskill',
    element: <RapidSkill />,
  },
  {
    path: '/courses/coreskill',
    element: <CoreSkill />,
  },
  {
    path: '/services/ai-robo-lab',
    element: <AiRoboLab />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/apply-mentor',
    element: <ApplyMentor />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/team',
    element: <Ourteam />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  
  {
    path: '/innovation-lab',
    element: <InnovationLab />,
  },
  {
    path: '/services/pm-shri-yojna',
    element: <PmShriYojna />,
  },
  {
    path: '/services/composite-skill-lab',
    element: <CompositeSkillLab />,
  },
  {
    path: '/services/aerospace-lab',
    element: <AerospaceLab />,
  },
  {
    path: '/services/atal-tinkering-lab',
    element: <AtalTinkeringLab />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/services/ai-curriculum',
    element: <AiCurriculum />,
  },
  {
    path: '/services/teacher-training',
    element: <Teachertraining />,
  },
  {
    path: '/coming-soon',
    element: <ComingSoon />,
  },
  {
    path: '/student-registeration',
    element: <StudentRegisteration />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

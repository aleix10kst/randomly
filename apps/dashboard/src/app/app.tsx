import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/layout';
import { PROFILE_ROUTE, USERS_ROUTE } from '../constants/routes.constants';
import Home from '../pages/home/home';
import NotFound from '../pages/not-found/not-found';
import Profile from '../pages/profile/profile';
import SignIn from '../pages/sign-in/sign-in';
import Users from '../pages/users/users';

export function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={USERS_ROUTE} element={<Users />} />
        <Route path={PROFILE_ROUTE} element={<Profile />} />
      </Route>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layout/Loader';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from './constants/config';
import { useDispatch, useSelector } from 'react-redux';
import { userExists, userNotExists } from './redux/reducers/auth';
import { Toaster } from 'react-hot-toast';
import { SocketProvider } from './socket';

const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const UseManagement = lazy(() => import('./pages/admin/UseManagement'));
const MessageManagement = lazy(() => import('./pages/admin/MessageManagement'));
const ChatManagement = lazy(() => import('./pages/admin//ChatManagement'));


const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFoundd = lazy(() => import("./pages/NotFoundd"));



const App = () => {

  const { user, loader } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/me`, { withCredentials: true })
      .then(({ data }) => dispatch(userExists(data.user)))
      .catch((err) => dispatch(userNotExists()));
  }, [dispatch]);


  return loader ? <LayoutLoader /> : (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>

          <Route element={<SocketProvider><ProtectRoute user={user} /></SocketProvider>}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>}
          />

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<UseManagement />} />
          <Route path="/admin/chats" element={<ChatManagement />} />
          <Route path="/admin/messages" element={<MessageManagement />} />

          <Route path="*" element={<NotFoundd />} />

        </Routes>
      </Suspense>

      <Toaster position="bottom-center" />
    </BrowserRouter>
  )
}

export default App;
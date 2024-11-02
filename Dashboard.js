import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Container, Button } from '@mui/material';
import { Home as HomeIcon, BookOpen, UserCheck, Users, Calendar } from 'lucide-react';
import Home from './Home';
import Courses from './Courses';
import Attendance from './Attendance';
import Faculty from './Faculty';
import TimeTable from './TimeTable';

export default function Dashboard({ userData, onLogout }) {
  const { username = 'Guest', userType = 'User' } = userData || {}; // Provide default values

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KLERP
          </Typography>
          <Button
            component={Link}
            to="/dashboard"
            color="inherit"
            startIcon={<HomeIcon />}
            sx={{ mr: 2 }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/dashboard/courses"
            color="inherit"
            startIcon={<BookOpen />}
            sx={{ mr: 2 }}
          >
            Courses
          </Button>
          <Button
            component={Link}
            to="/dashboard/attendance"
            color="inherit"
            startIcon={<UserCheck />}
            sx={{ mr: 2 }}
          >
            Attendance
          </Button>
          <Button
            component={Link}
            to="/dashboard/faculty"
            color="inherit"
            startIcon={<Users />}
            sx={{ mr: 2 }}
          >
            Faculty
          </Button>
          <Button
            component={Link}
            to="/dashboard/timetable"
            color="inherit"
            startIcon={<Calendar />}
            sx={{ mr: 2 }}
          >
           
          
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home username={username} userType={userType} />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/timetable" element={<TimeTable />} />
        </Routes>
      </Container>
    </Box>
  );
}
import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

export default function Faculty() {
  const facultyData = [
    { courseCode: '23CS06EF', courseName: 'MERN STACK WEB DEVELOPMENT', facultyName: 'Murali Mohan' },
    { courseCode: '23CS2103A', courseName: 'ADVANCED OBJECT ORIENTED PROGRAMMING', facultyName: 'Marry' },
    { courseCode: '23SDCS11E', courseName: 'LINUX ADMINISTRATION & AUTOMATION', facultyName: 'Prasad' },
    { courseCode: '23CS2104R', courseName: 'OPERATING SYSTEMS', facultyName: 'Nama Shivaya' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Faculty Page
      </Typography>
      <Typography variant="body1">
        This is the faculty page where faculty-related information will be displayed.
      </Typography>
      <Grid container spacing={2} mt={2}>
        {facultyData.map((faculty, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">{faculty.courseCode} - {faculty.courseName}</Typography>
                <Typography variant="body1">Faculty Name: {faculty.facultyName}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
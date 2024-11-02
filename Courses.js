import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const courses = [
  { id: '23CS06EF', name: 'MERN STACK WEB DEVELOPMENT', credits: 3 },
  { id: '23CS2103A', name: 'ADVANCED OBJECT ORIENTED PROGRAMMING', credits: 4 },
  { id: '23SDCS11E', name: 'LINUX ADMINISTRATION & AUTOMATION', credits: 3 },
  { id: '23CS2104R', name: 'OPERATING SYSTEMS', credits: 4 },
];

export default function Courses() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Registered Courses
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {course.id}
                </Typography>
                <Typography variant="body1" component="div">
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Credits: {course.credits}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
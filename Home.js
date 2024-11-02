import { Typography, Paper, Box } from '@mui/material';

export default function Home({ username, userType }) {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome back {username}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Logged in as {userType}
      </Typography>
    </Paper>
  );
}
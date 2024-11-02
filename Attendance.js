import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const attendance = [
  { courseId: '23CS06EF', courseName: 'MERN STACK WEB DEVELOPMENT', attendance: '85%' },
  { courseId: '23CS2103A', courseName: 'ADVANCED OBJECT ORIENTED PROGRAMMING', attendance: '92%' },
  { courseId: '23SDCS11E', courseName: 'LINUX ADMINISTRATION & AUTOMATION', attendance: '88%' },
  { courseId: '23CS2104R', courseName: 'OPERATING SYSTEMS', attendance: '90%' },
];

export default function Attendance() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Attendance Record
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course ID</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendance.map((record) => (
              <TableRow key={record.courseId}>
                <TableCell>{record.courseId}</TableCell>
                <TableCell>{record.courseName}</TableCell>
                <TableCell>{record.attendance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
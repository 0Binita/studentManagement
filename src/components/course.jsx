import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const CourseTable = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://172.25.0.105:8181/api/course/fetchAllCourses')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setCourses(data);
        } else {
          console.error('No data found in response');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEdit = (courseId) => {
    // Implement your edit logic here
    console.log(`Edit course with ID: ${courseId}`);
  };

  const handleDelete = (courseId) => {
    // Implement your delete logic here
    console.log(`Delete course with ID: ${courseId}`);

    // Example: Remove the course from the state after deletion
    setCourses(courses.filter(course => course.courseId !== courseId));

    // Example: Call API to delete the course from the backend
    fetch(`http://172.25.0.105:8181/api/course/deleteCourse/${courseId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.ok) {
        console.log(`Course with ID: ${courseId} deleted successfully.`);
      } else {
        console.error('Failed to delete course');
      }
    })
    .catch((error) => {
      console.error('Error deleting course:', error);
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Fee</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.courseId}>
              <TableCell>{course.courseName}</TableCell>
              <TableCell>{course.courseDescription}</TableCell>
              <TableCell>{course.fee}</TableCell>
              <TableCell>
                <img 
                  src={`http://172.25.0.105:8181/api/course/${course.courseImage}`} 
                  alt={course.courseName} 
                  style={{ width: '100px', height: 'auto' }} 
                />
              </TableCell>
              <TableCell>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ width: '60px', height: '30px', marginRight: '10px' }} 
                  onClick={() => handleEdit(course.courseId)}
                >
                  Edit
                </Button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  sx={{ width: '60px', height: '30px' }} 
                  onClick={() => handleDelete(course.courseId)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseTable;

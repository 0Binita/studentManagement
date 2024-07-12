import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function MediaCard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://172.16.100.112:8181/api/course/fetchAllCourses')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.body) {
          setCourses(data.body);
        } else {
          console.error('No data found in response');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 345 }}>
        {courses.map((course) => (
          <div key={course.courseId}>
            <CardMedia
              component="img"
              height="140"
              image={course.courseImage} // Removed quotes around {course.courseImage}
              alt={course.courseName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.courseName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.courseDescription}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fee: {course.fee}
              </Typography>
            </CardContent>
          </div>
        ))}
      </Card>
    </div>
  );
}

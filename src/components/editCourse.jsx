import React, { useState } from 'react';

const EditCourse = () => {
  const [courseData, setCourseData] = useState({
    courseId: '',
    courseName: '',
    courseDescription: '',
    fee: '',
    courseImage: null
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCourseData({
      ...courseData,
      courseImage: file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('courseId', courseData.courseId);
      formData.append('courseName', courseData.courseName);
      formData.append('courseDescription', courseData.courseDescription);
      formData.append('fee', courseData.fee);
      formData.append('courseImage', courseData.courseImage);

      const response = await fetch('http://172.25.0.105:8181/api/course/addCourse', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to add course');
      }

      // Optionally handle success, e.g., show a success message or redirect
      setSubmitStatus('success');
      
      // Reset form after submission
      setCourseData({
        courseId: '',
        courseName: '',
        courseDescription: '',
        fee: '',
        courseImage: null
      });

    } catch (error) {
      console.error('Error adding course:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Course Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Course ID:</label>
          <input
            type="text"
            id="courseId"
            name="courseId"
            value={courseData.courseId}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label  className="block font-medium">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={courseData.courseName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label  className="block font-medium">Description:</label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            value={courseData.courseDescription}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label  className="block font-medium">Fee:</label>
          <input
            type="text"
            id="fee"
            name="fee"
            value={courseData.fee}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label  className="block font-medium">Select Image:</label>
          <input
            type="file"
            id="courseImage"
            name="courseImage"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
        </div>
      </form>
      {submitStatus === 'success' && (
        <p className="text-green-500 text-xs italic mt-2">Form submitted successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 text-xs italic mt-2">Error submitting form. Please try again later.</p>
      )}
    </div>
  );
};

export default EditCourse;

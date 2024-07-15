import React, { useState } from 'react';

const Form = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = {
            fullName: fullName,
            email: email,
            address: address,
            dateOfBirth: dateOfBirth,
            password: password
        };

        fetch('http://172.16.100.112:8181/api/student/addStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        //Handling response
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            setSubmitting(false);
            setSubmitStatus('success');


            setFullName("");
            setEmail("");
            setAddress("");
            setDateOfBirth("");
            setPassword("");
        })
        .catch(error => {
            console.error('Error:', error);
            setSubmitting(false);
            setSubmitStatus('error');
        });
    };

    return (
        <div className='bg-sky-200 min-h-screen flex items-center justify-center'>
            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md'
                onSubmit={handleSubmit}>
                <h1 className='font-bold text-3xl mb-6 text-center'>Form</h1>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Full Name</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='fullName'
                        name='fullName'
                        type='text'
                        placeholder='Full Name'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Address</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='address'
                        name='address'
                        type='text'
                        placeholder='Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Date of Birth</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='dateOfBirth'
                        name='dateOfBirth'
                        type='date'
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type='submit'
                        disabled={submitting}
                    >
                        {submitting ? 'Submitting...' : 'Sign Up'}
                    </button>
                </div>
                {submitStatus === 'success' && (
                    <p className='text-green-500 text-xs italic mt-2'>Form submitted successfully!</p>
                )}
                {submitStatus === 'error' && (
                    <p className='text-red-500 text-xs italic mt-2'>Error submitting form. Please try again later.</p>
                )}
            </form>
        </div>
    );
};

export default Form;

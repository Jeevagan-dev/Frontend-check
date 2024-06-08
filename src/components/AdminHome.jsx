import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminHome() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  function openUpload() {
    setIsUploadOpen(true);
    toast.success('Opening upload');
  }

  function closeUpload() {
    setIsUploadOpen(false);
    toast.error("upload closed");
  }

  function handleFileSubmit(event) {
    // Handle file submission logic here
    event.preventDefault();
    // You can access the file using event.target[0].files[0]
  }

  return (
    <div>
      <h2>Welcome Admin,</h2>
      {!isUploadOpen && (
        <button onClick={openUpload}>Upload file</button>

      )}
       <ToastContainer />
      {isUploadOpen && (
        <div>
          <form onSubmit={handleFileSubmit}>
            <label htmlFor="file">Select File:</label>
            <input type="file" id="file" name="file" />
            <button type="submit">Submit</button>
            <button type="button" onClick={closeUpload}>Close Upload</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminHome;

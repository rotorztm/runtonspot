import React from 'react';
import Dropzone from "react-dropzone-uploader";
import 'react-dropzone-uploader/dist/styles.css'

function Upload({ fetchUploads }) {
  const getUploadParams = ({ file }) => {
    const body = new FormData()
    body.append('image', file)
    return {
      url: 'http://localhost:4000/api/post/create',
      body    };
  }

  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => {
      console.log(f);
      f.remove();
    }
    )
    
    fetchUploads();
  }

  return (
    <div>
      <Dropzone
        getUploadParams={getUploadParams}
        onSubmit={handleSubmit}
        accept="image/*"
        maxFiles={10}
        multiple={true}
        styles={{
          dropzone: { minHeight: 200, maxHeight: 250 }
        }}
      />
    </div>
  );
}

export default Upload;
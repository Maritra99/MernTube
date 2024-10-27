import React, { useState } from "react";
import { UserIcon } from "../Static/IconList";

const ImageUploadContainer = ({ regFormData, setRegFormData }) => {
  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRegFormData({
      ...regFormData,
      image: file,
    });
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  return (
    <div className="flex justify-content-center align-items-center">
      <label
        className="flex justify-content-center align-items-center relative border-circle overflow-hidden cursor-pointer border-2 border-500 border-dashed"
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        {preview ? (
          <img
            src={preview}
            alt="Uploaded"
            className="w-full h-full object-cover"
          />
        ) : (
          <UserIcon className="text-500" />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ImageUploadContainer;

import React from 'react';

const FilePicker = ({
  label,
  accept,
  onFileLoad
}) => {
  const handleInputChange = (event) => {
    const { target: { files } } = event;
    if (!files || !files[0]) {
      return;
    }
    const [file] = files;

    const reader = new FileReader();
    const asString = !!reader.readAsBinaryString;

    reader.onload = (loadEvent) => {
      onFileLoad?.(loadEvent.target.result, asString);
    };

    if (asString) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="form-group">
      {
        label &&
          <label htmlFor="file">
            {label}
          </label>
      }
      <input
        type="file"
        className="form-control"
        id="file"
        accept={accept}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilePicker;

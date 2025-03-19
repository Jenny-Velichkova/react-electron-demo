import React, { useState } from 'react';

function FileReader() {
  const [filePath, setFilePath] = useState(null);       // Stores the selected file path
  const [fileContent, setFileContent] = useState('');   // Stores the content of the selected file

  const handleClick = async () => {
    // Call the Electron API exposed via contextBridge
    const result = await window.electronAPI.openFileDialog();

    if (!result.canceled) {
      setFilePath(result.filePath);
      setFileContent(result.content);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Electron File Reader Demo</h2>
      <button onClick={handleClick}>Select File</button>

      {filePath && (
        <div style={{ marginTop: '20px' }}>
          <strong>Selected file:</strong>
          <p>{filePath}</p>
          <strong>File content:</strong>
          <pre style={{ backgroundColor: '#f1f1f1', padding: '10px' }}>
            {fileContent}
          </pre>
        </div>
      )}
    </div>
  );
}

export default FileReader;

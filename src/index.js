import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";

import "antd/dist/antd.css";
import { Button } from "antd";
import { Modal } from "antd";

function BigData() {
  const [data] = useState(new Uint8Array(1024 * 1024 * 300));
  const inputref = useRef(null);

  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <div>
      <h1>BigData length: {data.length}</h1>
      <input ref={inputref}></input>
    </div>
  );
}

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>

      {isModalOpen && (
        <Modal
          title="Modal"
          open={true}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
        >
          <BigData></BigData>
        </Modal>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"))

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render();

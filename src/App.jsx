import React, { useState } from "react";
import "./App.css";

const BucketTransfer = () => {
  const [bucket1, setBucket1] = useState(["Item 1", "Item 2", "Item 3", "Item 5"]);
  const [bucket2, setBucket2] = useState(["Item 4", "Item 6"]);
  const [selectedBucket1, setSelectedBucket1] = useState([]);
  const [selectedBucket2, setSelectedBucket2] = useState([]);

  const handleSelect = (item, bucket, setSelected) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const moveSelected = (fromBucket, toBucket, setFrom, setTo, selectedItems, setSelected) => {
    setTo([...toBucket, ...selectedItems]);
    setFrom(fromBucket.filter((item) => !selectedItems.includes(item)));
    setSelected([]);
  };

  const moveAll = (fromBucket, toBucket, setFrom, setTo) => {
    setTo([...toBucket, ...fromBucket]);
    setFrom([]);
  };

  return (
    <div className="bucket-transfer-container">
      <div className="bucket">
        <h3>Bucket 1</h3>
        <ul>
          {bucket1.map((item) => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedBucket1.includes(item)}
                  onChange={() => handleSelect(item, bucket1, setSelectedBucket1)}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="button-container">
        <button
          onClick={() =>
            moveSelected(bucket1, bucket2, setBucket1, setBucket2, selectedBucket1, setSelectedBucket1)
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            moveSelected(bucket2, bucket1, setBucket2, setBucket1, selectedBucket2, setSelectedBucket2)
          }
        >
          Remove
        </button>
        <button onClick={() => moveAll(bucket1, bucket2, setBucket1, setBucket2)}>Add All</button>
        <button onClick={() => moveAll(bucket2, bucket1, setBucket2, setBucket1)}>Remove All</button>
      </div>

      <div className="bucket">
        <h3>Bucket 2</h3>
        <ul>
          {bucket2.map((item) => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedBucket2.includes(item)}
                  onChange={() => handleSelect(item, bucket2, setSelectedBucket2)}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BucketTransfer;

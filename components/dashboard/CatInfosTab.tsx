import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { deleteCatById, updateCatById } from '../../common/actions/dashboard.actions';
import UpdateCatInfosModal from './UpdateCatInfosModal';

const CatInfosTab = ({ cat }) => {
  const deleteCat = () => deleteCatById(cat.id);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(cat.name);
  const [age, setAge] = useState(cat.age);
  const [breed, setBreed] = useState(cat.breed);
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      try {
        updateCatById(cat.id, name, age, breed);
      } catch (error) {
        console.log(error);
      }
      setName(undefined);
      setAge(null);
      setBreed(undefined);
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  useEffect(() => {}, [visible]);
  return (
    <div className="mb-2">
      <div>
        <p>Id: {cat.id}</p>
        <h3>{cat.name}</h3>
        <p>Age: {cat.age}</p>
        <p>Breed: {cat.breed}</p>
      </div>
      <div>
        <Button style={{ marginRight: '1rem' }} onClick={() => setVisible(true)}>
          Edit
        </Button>
        <Button type="primary" onClick={() => deleteCat()}>
          Delete
        </Button>
      </div>
      <UpdateCatInfosModal
        visible={visible}
        confirmLoading={confirmLoading}
        handleOk={handleOk}
        handleCancel={handleCancel}
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        breed={breed}
        setBreed={setBreed}
      />
    </div>
  );
};

export default CatInfosTab;

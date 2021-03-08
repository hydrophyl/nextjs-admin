import React, { useEffect, useState } from 'react';
import { getCats, addNewCat } from '../../common/actions/dashboard.actions';
import CatInfosTab from '../../components/dashboard/CatInfosTab';
import Link from 'next/link';
import { Button } from 'antd';
import UpdateCatInfosModal from './UpdateCatInfosModal';

const DashBoard = () => {
  const [cats, setCats] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [breed, setBreed] = useState();
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      try {
        addNewCat(name, age, breed);
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
  const fetchData = async () => {
    try {
      const fetchedCats = await getCats();
      setCats(fetchedCats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cats, visible]);

  return (
    <div className="ml-3">
      <h2>Table of Cats</h2>
      {Object.values(cats).map((cat) => (
        <CatInfosTab cat={cat} key={cat.id} />
      ))}
      <Button onClick={() => setVisible(true)}>Add New Cat</Button>

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

export default DashBoard;

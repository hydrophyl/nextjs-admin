import React from 'react';
import { Modal, Input } from 'antd';

const UpdateCatInfosModal = ({
  visible,
  handleOk,
  confirmLoading,
  handleCancel,
  name,
  setName,
  age,
  setAge,
  breed,
  setBreed
}) => {
  return (
    <Modal
      title="Title"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Input
        size="large"
        defaultValue={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <Input
        size="large"
        defaultValue={age}
        name="age"
        onChange={(e) => setAge(e.target.value)}
        typeof="number"
        required
      />
      <Input
        size="large"
        defaultValue={breed}
        name="breed"
        onChange={(e) => setBreed(e.target.value)}
      />
    </Modal>
  );
};

export default UpdateCatInfosModal;

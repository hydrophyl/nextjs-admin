import React, { useState } from 'react';
import { Input } from 'antd';
import { findCatById } from '../../common/actions/dashboard.actions';
import CatInfosTab from '../../components/dashboard/CatInfosTab';

const { Search } = Input;
const SearchPage = () => {
  const [cat, setCat] = useState({});
  const onSearch = async (e) => {
    try {
      const res = await findCatById(e);
      setCat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Search placeholder="input search text" onSearch={(e) => onSearch(e)} enterButton />
      <CatInfosTab cat={cat} />
    </div>
  );
};

export default SearchPage;

import React from 'react';
import Input1 from './UI/input/Input1';
import Select1 from './UI/select/Select1';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <Input1 
          onChange={e => setFilter({...filter, query: e.target.value})}
          value={filter.query}
          placeholder=' Поиск...'
        />
        <Select1
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          value={filter.sort}
          defaultOption='Сортировка по:'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
    );
};

export default PostFilter;
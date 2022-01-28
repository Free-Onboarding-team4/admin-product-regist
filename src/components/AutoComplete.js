import filter from 'data/filter';
import { useState } from 'react';
import styled from 'styled-components';

export const AutoComplete = () => {
  const data = filter.filters;
  const [filteredItem, setFilteredItem] = useState([]);

  const autoComplete = e => {
    const currentValue = e.target.value;
    const filtered = data.filter(item => item.includes(currentValue));
    setFilteredItem(filtered);
  };

  const onSearch = () => {
    setFilteredItem([]);
  };

  return (
    <Container>
      <Filter>
        <p>필터 태그</p>
        <Search
          type="text"
          placeholder="필터태그를 검색해주세요."
          onChange={e => autoComplete(e)}
        />
        <button type="button" onClick={onSearch}>
          검색
        </button>
      </Filter>

      <ul>
        {filteredItem.map(item => (
          <li className="item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Search = styled.input`
  width: 500px;
  height: 50px;
  background-color: #fff;
`;

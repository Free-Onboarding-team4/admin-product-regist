import { STYLE } from 'constants';
import { COLOR } from 'constants';
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
        <InputBlock
          type="text"
          placeholder="필터태그를 검색해주세요."
          onChange={e => autoComplete(e)}
        />
        <SearchBtn type="button" onClick={onSearch}>
          검색
        </SearchBtn>
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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 5px;
  border: 1px solid ${COLOR.MAIN};
  border-radius: 5px;
  padding: 10px 15px;
`;
const InputBlock = styled.input`
  width: 100%;
  border: ${STYLE.BORDER};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
`;

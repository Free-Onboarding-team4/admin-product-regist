import { useState, useCallback } from 'react';
import { validation } from 'utils/validation';

export const useForm = requiredList => {
  const [required, setRequired] = useState(requiredList);

  const addRequired = useCallback(
    (name, value) => {
      setRequired(prev => ({
        ...prev,
        [name]: value,
      }));
    },
    [setRequired]
  );

  const handleClick = () => {
    const inVaild = validation(required);
    if (!inVaild.length) {
      submitForm();
    } else {
      alert(
        `필수 값을 모두 입력하세요 ❗❗
👉 ${inVaild.join(', ')}을(를) 추가해주세요!`
      );
    }
  };

  const submitForm = () => {
    alert('상품이 등록 되었습니다 🎉🎉');
  };

  return { addRequired, handleClick };
};

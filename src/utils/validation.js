export const validation = required => {
  const inVaild = Object.keys(required).filter(
    key => !required[key] || required[key].length === 0
  );

  const inVaildList = inVaild.map(el => {
    switch (el) {
      case 'category':
        return '카테고리';
      case 'productName':
        return '상품명';
      case 'description':
        return '상품 구성 소개 정보';
      case 'stock':
        return '상품 총 재고';
      case 'option':
        return '상품 옵션';
      default:
        throw new Error('Unknown option type');
    }
  });

  return inVaildList;
};

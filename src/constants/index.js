export const COLOR = {
  MAIN: '#352F6E',
  MAIN_LIGHT: '#AFA8E6',
  TAG: '#E8F7D4',
  BG: '#E3E3E3',
  BG_LIGHT: '#EFEFEF',
  RED: '#DD3534',
};

export const STYLE = {
  BORDER: '1px solid #DDD',
  BORDER_BTN: `2px solid ${COLOR.MAIN}`,
  NAV_WIDTH: '14vw',
  PADDING: '20px',
};

export const MENU = [
  '기본 설정',
  '회원',
  '진열',
  '상품',
  '주문',
  '배송',
  '프로모션',
  '혜택',
  '고객 센터 관리',
  '알림',
];

export const SUB_MENU = [
  {
    id: 0,
    menus: ['기초 설정', '고급 설정'],
  },
  {
    id: 1,
    menus: ['회원 리스트', '회원 관리', '회원 등록'],
  },
  {
    id: 2,
    menus: ['진열 리스트', '진열 관리', '진열상품 등록'],
  },
  {
    id: 3,
    menus: ['상품 리스트', '상품 재고 관리', '상품 등록'],
  },
  {
    id: 4,
    menus: ['주문 리스트', '주문 관리', '주문 등록'],
  },
  {
    id: 5,
    menus: ['배송 리스트', '배송 관리', '배송 등록'],
  },
  {
    id: 6,
    menus: ['프로모션 리스트', '프로모션 등록'],
  },
  {
    id: 7,
    menus: ['혜택 리스트', '혜택 등록'],
  },
  {
    id: 8,
    menus: ['문의사항 관리', '요청 관리'],
  },
  {
    id: 9,
    menus: ['메시지 관리', '오류 관리', '공지 등록'],
  },
];

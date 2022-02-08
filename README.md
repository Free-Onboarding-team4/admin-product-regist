# 어드민 상품등록 페이지

## 프로젝트 소개

> 소고기 판매 플랫폼의 관리자 페이지를 가정하여 상품 등록 페이지를 구현했습니다.

## member

<table>
  <tr>
        </td>
      <td align="center">
      <a href="https://github.com/LEEHYUNHO2001"
        ><img
          src="https://avatars.githubusercontent.com/LEEHYUNHO2001"
          width="100px;"
          alt=""
        /><br /><sub><b>이현호</b></sub></a>
    <br />
    </td>
    <td align="center">
      <a href="https://github.com/hoonjoo-park"
        ><img
          src="https://avatars.githubusercontent.com/hoonjoo-park"
          width="100px;"
          alt=""
        /><br /><sub><b>박훈주</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/Yoon-CH"
        ><img
          src="https://avatars.githubusercontent.com/Yoon-CH"
          width="100px;"
          alt=""
        /><br /><sub><b>윤창현</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/devjoylee"
        ><img
          src="https://avatars.githubusercontent.com/devjoylee"
          width="100px;"
          alt=""
        /><br /><sub><b>이주영</b></sub></a
      ><br />
  </tr>
</table>

| 이름   | 담당                                        |
| ------ | ------------------------------------------- |
| 박훈주 | 상품 옵션 섹션, 사이드 메뉴바               |
| 이현호 | 상품 정보 고시, 필터 태그(자동 완성)        |
| 이주영 | 공통 UI 제작, 상품 기본 정보, 이미지 업로드 |
| 윤창현 | 상품 기간, 카테고리, 배송 및 기타 설정      |

<br/>

## 배포 주소

https://wanted-admin-product.netlify.app/

<br/>

## 프로젝트 사진

![프로젝트 미리보기](https://user-images.githubusercontent.com/67448481/151669344-cfa9df9b-465b-4635-8782-0edc7a896f98.png)



<br/>

## 사용 기술 및 스택

| ⚙️  Stack                     |
| ----------------------------- |
| React Hooks                   |
| styled-components             |
| MUI DatePicker                |
| React-icons                   |
| UUID                          |
| Deploy : Netilfy              |
| Other : Git / GitHub          |
| Build Tool (Create React App) |
| Code Quality Tool (Prettier)  |

<br/>

## CRA 구조

```markdown
├─components
│ ├─BasicInformation
│ │  
│ ├─ImageSection
│ │  
│ ├─Layouts
│ │  
│ ├─Library
│ │  
│ ├─Period
│ │  
│ ├─ProductInformation
│ │  
│ ├─ProductOption
│ │  
│ └─Setting
│  
├─constants
├─data
├─pages
├─styles
└─utils
```

<br/>

## 커밋 컨벤션

깃모지를 사용하여 직관성을 높이고, 기능이나 UI 설계에 따른 메세지를 커밋 메세지에 담는것을 컨벤션으로 결정했습니다. 깃모지로 인해 상대방이 어떤 작업을 수행했는지 한 눈에 확인할 수 있고, 메세지를 보며 조금 더 상세한 상황을 파악할 수 있습니다.

| 깃모지 | 사용 예시               |
| ------ | ----------------------- |
| 🎉     | init                    |
| 🚚     | 디렉토리 또는 파일 이동 |
| ✨     | 기능 구현               |
| 💄     | CSS 스타일링            |
| ♻️     | 리팩토링                |
| 📝     | Readme 수정             |
| ➕     | 모듈 추가               |
| 🐛     | 버그 해결               |
| 🚑️    | 치명적인 오류 해결      |

<br/>

## 과제 후기

### **이현호** 😎

요구사항을 꼼꼼하게 읽는것이 중요하다는 것을 일깨워준 프로젝트 입니다. 기능을 구현하더라도 요구사항의 의도와 다르다면 처음부터 다시 구현해야 하기 때문입니다. 불가능해 보이던 기능도 끊임없이 도전하여 성공적으로 구현할 수 있었습니다. 그 후 리팩토링을 진행하며 자주 사용하는 기능은 utils 디렉터리에 넣어 팀원과 함께 사용했습니다.

### 윤창현 ✨

팀을 이루어 진행하는 프로젝트 이기에 팀원들과의 충분한 소통을 통해 4명이지만 통일된 코드와 구조를 완성할 수 있었고, 개발자로서 로직을 구현하는 방법에 대한 깊은 생각과 깃헙을 통한 협업의 중요성을 다시 한 번 느낄 수 있었던 좋은 시간 이었습니다.

### **박훈주** 🧛‍♂️

이번 프로젝트에서는 여러 컴포넌트들을 분리하여 각자 맡은 섹션을 작업했습니다. 이러한 과정을 통해 협업을 잘하는, 그리고 “**같이 일하기 좋은**” 개발자로 성장하는데 발판이 되어준 것 같습니다. **merge conflict 해결**과 **git rebase**에 대한 이해도를 한 층 더 높일 수 있는 기회였다고 생각합니다. 팀원분들 고생 너무 많으셨습니다 🙂

### **이주영 👧🏻**

이번 프로젝트는 팀원이 함께 의견을 조율하여 작업 분량을 나누고 각자 맡은 과제를 수행하는 방식으로 진행했습니다. 서로 다른 역할을 맡았지만 비슷한 구조나 공통 상수가 생기면 그때그때 팀원들과 공유하며 작업을 함께 했습니다. 내가 작업하는 부분이 다른 팀원들에게 필요하지 않을까 생각하려고 노력하였고 진정한 협업이란 이런거구나 느낄 수 있었습니다.

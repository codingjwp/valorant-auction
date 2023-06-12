# VALORANT AUCTION

## 만들게 된 이유.
개인 방송을 보는 중 경매를 하는 걸 보고 나도 한번 만들어 보고 싶다고 생각해서 한번 해보았습니다.

### 실행 방법
```code
yarn
yarn dev
```

### 사용한 라이브러리
1. react + vite
2. react-router-dom
3. vite-plugin-svgr
4. styled-components
5. recoil(사용 예정)

## 할일 목록
:white_large_square: Component 만들기 [(styled-components 사용)](https://styled-components.com/)   
 - :ballot_box_with_check: Button Components 만들기 [(Button.tsx, Button.styles.tsx)]("clients/src/components/Buttons")   
 - :ballot_box_with_check: InputField Components 만들기 [(InputField.tsx, InputField.styles.tsx)]("clients/src/components/InputFields")   
 - :ballot_box_with_check: Modal Components [(Modal.tsx, Modal.styles.tsx)]("clients/src/components/Modals")   
 - :ballot_box_with_check: Select Components [(Select.tsx, Select.styles.tsx)]("clients/src/components/Selects")   
 - :ballot_box_with_check: ToolTip Components [(ToolTip.tsx, ToolTip.styles.tsx)]("clients/src/components/ToolTips")   
 - :ballot_box_with_check: DropDown Components [(DropDown.tsx, DropDown.styles.tsx)]("clients/src/components/DropDowns")   
 - :ballot_box_with_check: Avatars Components [(Avatar.tsx, Avatar.styles.tsx)]("clients/src/components/Avatars")   

<br>

:white_large_square: Page 만들기
- :ballot_box_with_check: Routers Page 만들기   
- :ballot_box_with_check: Home Page 만들기   
  1. :ballot_box_with_check: RoomModal 만들기   
- :white_large_square: AuctionSetting Page 만들기   
  1. :ballot_box_with_check: MediaModal 만들기 (오디오, 비디오 설정 추가)
  2. :white_large_square: 감독 등록 모달 만들기
  3. :white_large_square: 선수 등록 모달 만들기
  4. :white_large_square: 등록된 내용 모두 초기화 만들기.
# youtube clone coding

## 주요 기능

- 비디오 리스트 출력
- 비디오 키워드 검색
- 비디오 상세 페이지

## 개발 진척도

- [x] 개발 설계
- [ ] 화면 디자인 적용
- [ ] 컴포넌트 구분
- [ ] react-router로 라우터 처리
- [ ] react-query로 네트워크 통신시에 비동기 처리
- [ ] 기능 구현
  - [x] 인기 비디오 조회
  - [ ] 검색
  - [ ] 인기 비디오 클릭 시 상세 페이지로 이동
- [ ] 테스트
- [ ] github 배포

## 컴포넌트 및 기능 구현

- **App.jsx**

  - mount: 네트워크 통신 비디오 리스트조회
  - 사용하는 api: GET https://www.googleapis.com/youtube/v3/videos
  - **Header.jsx**

    - logo
      클릭시 빈값으로 유튜브 영상 조회
    - input
      버튼 클릭 또는 엔터 이벤트 발생 시 해당 키워드로 영상 조회

    네트워크 통신을 통해 영상을 조회할 때마다 content 리렌더링

  - **Content.jsx**
    - **VideoList.jsx**
      - **VideoItem.jsx**
        클릭시 상세페이지로 이동
    - **VideoDetail.jsx**
      - **VideoDescription.jsx**
      - **VideoItem.jsx**
        클릭시 상세 페이지로 이동

## 참고

wireframe: [figma](https://www.figma.com/file/ocaeZiz2ugxRPfsGnZhvVw/Youtube---clone-coding?node-id=0%3A1&t=PBTOoFuFb06EBv92-0)

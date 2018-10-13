# Drama MemoApp
react + redux + redux-saga의 skill stack으로 작성하였습니다.

# Starting an App
Server-Side 앱은 현 프로젝트 내에 포함하지 않았으므로
[github.com/dramancompany/memoapp-api](https://github.com/dramancompany/memoapp-api) 프로젝트를 클론하여
구동 후

```bash
yarn && yarn start
```


# 기본 기획에서 변경/추가 사항
- label 최대 길이 8글자로 제한
- label 생성 버튼은 라벨이 길어졌을 때 누르기 힘들어지므로 위치를 하단에서 상단으로 수정
- 이름 변경은 각 메모 카드에서 변경하도록 수정
- 라벨의 메모목록 뷰에서 memo 추가 버튼을 통해 메모 생성
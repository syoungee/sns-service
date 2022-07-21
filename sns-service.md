Users

- email: 이메일
- password: 비밀번호
- user_name: 사용자 이름

Tokens

- JWT token

Posts

- post_id: PK, not null
- title: 제목 varchar(50) not null
- contens: 내용 text not null
- hashtag: 해시태그 text/json
- `ex) { “hashtags”: “#맛집,#서울,#브런치 카페,#주말”, …} `
- author: 작성자(user_name FK) varchar(10) not null
- created_at: 작성일 datetime not null
- likes: 좋아요 갯수 int default 0
- 조회수 int default 0

CRUD

- create

  - 게시글 생성(제목, 내용, 해시태그 등 입력)

- read

  - 모든 사용자는 모든 게시물에 보기 권한 있음
  - 게시글 목록(제목, 작성자, 해시태그, 작성일, 좋아요 수, 조회수 포함)

  - `아래 4기능은 각각 동작 할 뿐만 아니라, 동시에 적용`
    - Ordering(정렬)
      - 사용자는 게시글 목록을 원하는 값으로 정렬할 수 있습니다.
        - default: 작성일, 좋아요 수, 조회 수 중 선택 1
        - 오름차순, 내림차순 선택 가능
        - `쿼리 파라미터로 구현 ex) ?search=..&orderBy=.. `
    - Serching
      - 사용자는 입력한 키워드로 해당 키워드를 포함한 게시물을 조회 가능
      - `some-url?search=후기 >> “후기" 가 제목에 포함된 게시글 목록`
      - `[ex. 후기 검색 시 > 00 방문후기 입니다. (검색 됨)]`
    - Filtering
      - 사용자는 지정한 키워드로 해당 키워드를 포함한 게시물을 필터링할 수 있음
        - `예시 1) some-url?hastags=서울 >> “서울" 해시태그를 가진 게시글 목록. 예시 2) some-url?hastags=서울,맛집 >> “서울" 과 “맛집” 해시태그를 모두 가진 게시글 목록. `
        - `[ex. “서울” 검색 시 > #서울(검색됨) / #서울맛집 (검색안됨) / #서울,#맛집(검색됨)] [ex. “서울,맛집” 검색 시 > #서울(검색안됨) / #서울맛집 (검색안됨) / #서울,#맛집(검색됨)]`
    - Pagination
      - 사용자는 1페이지 당 게시글 수를 조정할 수 있음 (default: 10)

- update

  - 작성자 유무 확인 후 수정
  - 게시글 좋아요 활성 시 게시글 좋아요 증가
  - 게시글 좋아요 비활성 시 게실글 좋아요 감소
  - 게시글 상세보기 시 조회수 1 증가(횟수 제한 없음)

- delete (soft delete)
  - 작성자 유무 확인 후 삭제
  - 삭제된 게시글 다시 복구 가능

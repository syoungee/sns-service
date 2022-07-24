<div align="center">

# sns-service

SNS(Social Networking Service) 서버 구현 💌

<b>✏️ ERD table</b>
![image](https://user-images.githubusercontent.com/22606199/180637148-a90bbd2a-475d-4457-aec7-575bbadea1aa.png)

<b> 🍉 RestAPI</b>

|                          | METHOD | URL                |
| ------------------------ | ------ | ------------------ |
| 유저 생성                | POST   | /user              |
| 로그인(token 발급)       | GET    | /user/login        |
| 로그인                   | POST   | /user/login        |
| 게시글 작성              | POST   | /post              |
| 게시글 삭제(soft delete) | POST   | /post/delete/id=?  |
| 게시글 복구(restore)     | POST   | /post/restore/id=? |
| 검색                     | get    | /post/search=?     |
| 정렬                     | POST   | /post/order=?      |
| 페이지네이션             | GET    | /post/page=?       |

</div>

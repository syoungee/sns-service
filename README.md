<div align="center">

# SNS(Social Networking Service) <br/> 서버 구현 💌

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=Redis&logoColor=white"/>
</p>

## 📒 Project

  <h4> ⏳  개발 기간  </h4> 
  2022/07/18  ~ 2022/07/25
<br/>

## ✍🏻 프로젝트 설명

## 🧚🏻 구현 기능

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

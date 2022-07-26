<div align="center">

# SNS(Social Networking Service) <br/> 서버 구현 💌

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=Redis&logoColor=white"/>
</p>

</div>

## 📒 Project

개인으로 진행한 프로젝트입니다😎 </br>
[프로젝트 명세](https://misty-lungfish-f16.notion.site/SNS-server-9d3387a620b74aeabb8edeea0e6ef88f)

  <h4> ⏳  개발 기간  </h4> 
  2022/07/18  ~ 2022/07/26
<br/>

## ✍🏻 프로젝트 설명

```
- 본 서비스는 SNS(Social Networking Service) 입니다.
- 사용자는 본 서비스에 접속하여, 게시물을 업로드 하거나 다른 사람의 게시물을 확인하고, 좋아요를 누를 수 있습니다.
```

### ⭐ 필수 구현사항

```
i. JWT를 이용한 로그인 & 인증
ii. REST API 구현(게시글 CRUD)
iii. 코딩 컨벤션
iv. 비즈니스 로직 구조
v. 데이터베이스 모델링
```

### 🌙 추가 구현사항

```
- Docker(mysql8) 활용
```

<b>✏️ ERD table</b>
![image](https://user-images.githubusercontent.com/22606199/180918915-2d53a1db-6df2-43d0-9913-c45afebb8440.png)

<details>
<summary>Database structures(click!)</summary>

```sql
Table "user" {
  "user_id" integer [pk, increment]
  "email" varchar(45)
  "password" varchar(45) [not null]
  "user_name" varchar(10) [not null]

  Indexes {
    email [unique]
  }
}

Table "posting" {
  "post_id" integer [pk, increment]
  "user_id" integer [not null]
  "article" text [not null]
  "main_text" text [not null]
  "created_at" datetime [default: `now()`]
  "updated_at" datetime
  "likes" integer [default: 0]
  "watch" integer [default: 0]
  "deleted" boolean [default: false]
}

Table "likes" {
  "post_id" integer [not null]
  "user_id" integer [not null]
}

Table "hashtags" {
  "tag_id" integer [pk, increment]
  "post_id" integer [not null]
  "tag_name" varchar(10) [not null]
}

Ref "posting_fk":"user"."user_id" < "posting"."user_id" [update: cascade]
Ref "likes_fk1":"posting"."post_id" < "likes"."post_id" [update: cascade]
Ref "likes_fk2":"user"."user_id" < "likes"."user_id" [update: cascade]
Ref "hashtags_fk":"posting"."post_id" < "hashtags"."post_id" [update: cascade]
```

</details>
</br>

<b> 🍉 RestAPI</b>

|                          | METHOD | URL            |
| ------------------------ | ------ | -------------- |
| 유저 생성                | POST   | /user          |
| 로그인(token 발급)       | GET    | /user/login    |
| 로그인                   | POST   | /user/login    |
| 게시글 작성              | POST   | /post          |
| 게시글 삭제(soft delete) | POST   | /post/delete   |
| 게시글 복구(restore)     | POST   | /post/restore  |
| 검색                     | GET    | /post/search=? |
| 정렬                     | POST   | /post/order=?  |
| 페이지네이션             | GET    | /post/page=?   |

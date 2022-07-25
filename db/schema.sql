create database sns-service-db DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
use sns-service-db;
create table user(
  user_id integer auto_increment,
  email varchar(45),
  password varchar(45) not null,
  user_name varchar(10) not null,
  primary key(user_id),
  unique key(email)
);

create table posting (
  post_id integer auto_increment,
  user_id integer not null,
  article text not null,
  main_text text not null,
  created_at datetime default now(), 
  updated_at datetime, 
  likes integer default 0,
  watch integer default 0,
  deleted boolean default false,
  primary key(post_id),	
  constraint posting_fk FOREIGN KEY (user_id)
  REFERENCES user(user_id) ON UPDATE CASCADE 
);

create table likes (
  post_id integer not null,
  user_id integer not null,
  constraint likes_fk1 FOREIGN KEY(post_id)
  REFERENCES posting(post_id) ON UPDATE CASCADE,
  constraint likes_fk2 FOREIGN KEY(user_id)
  REFERENCES user(user_id) ON UPDATE CASCADE 
);

create table hashtags (
  tag_id integer auto_increment,
  post_id integer not null,
  tag_name varchar(10) not null,
  primary key(tag_id),
  CONSTRAINT hashtags_fk FOREIGN KEY(post_id)
  REFERENCES posting(post_id) ON UPDATE CASCADE
);
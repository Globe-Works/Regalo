--SQL Code to create tables
CREATE TABLE users (
    _id  SERIAL  NOT NULL,
    first_name varchar,
    last_name varchar,
    email varchar   NOT NULL,
    git_hub_oauth varchar   NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY (
        _id
     )
);
CREATE TABLE recipients (
    _id SERIAL NOT NULL,
    user_id int NOT NULL,
    full_name varchar UNIQUE,
    address varchar,
    city varchar,
    state varchar,
    country varchar,
    zip_code varchar,
    notes varchar,
    CONSTRAINT pk_recipients PRIMARY KEY(
      _id
    )
);

CREATE TABLE gifts_for_recipients (
  _id SERIAL NOT NULL,
  gift_id int NOT NULL,
  recipient_id int NOT NULL,
  CONSTRAINT pk_gifts_for_recipients PRIMARY KEY (
    _id
  )
);
CREATE TABLE gifts (
    _id  SERIAL NOT NULL,
    title varchar NOT NULL,
    price money,
    description varchar,
    url varchar,
    user_id int NOT NULL,
    notes varchar,
    img_url varchar,
    CONSTRAINT pk_gifts PRIMARY KEY (
        _id
     )
);
--ALTER TABLES for JOINS
ALTER TABLE recipients
ADD CONSTRAINT "fk_recipients_user_id" FOREIGN KEY (user_id) REFERENCES users(_id);

ALTER TABLE gifts_for_recipients
ADD CONSTRAINT "fk_gifts_for_recipients_gift_id" FOREIGN KEY (gift_id) REFERENCES gifts(_id);

ALTER TABLE gifts_for_recipients
ADD CONSTRAINT "fk_gifts_for_recipients_recipient_id" FOREIGN KEY (recipient_id) REFERENCES recipients(_id);

--Inserting Dummy Data for checking setup
INSERT INTO users (first_name, last_name, email, git_hub_oauth) VALUES ('Matt', 'Garza', 'mattg614@gmail.com', 'klsde9cxxl');
INSERT INTO users (first_name, last_name, email, git_hub_oauth) VALUES ('Dipen', 'Nagpal', 'dipennagpal@gmail.com', 'sadjklwer9');
INSERT INTO users (first_name, last_name, email, git_hub_oauth) VALUES ('Craig', 'Boswell', 'ccboswell120@gmail.com', 'asfdsawexc');
INSERT INTO users (first_name, last_name, email, git_hub_oauth) VALUES ('Lilah', 'August', 'lilahraeaugust@gmail.com', 'sadfasdf');
INSERT INTO users (first_name, last_name, email, git_hub_oauth) VALUES ('Jeremy', 'Vogel', 'eremy.vogel44@gmail.com', 'asfasdfwexcv');

INSERT INTO recipients (user_id, full_name) VALUES (1, 'Dipen Nagpal');
INSERT INTO recipients (user_id, full_name) VALUES (1, 'Craig Boswell');
INSERT INTO recipients (user_id, full_name) VALUES (1, 'Lilah August');
INSERT INTO recipients (user_id, full_name) VALUES (1, 'Jeremy Vogel');

INSERT INTO gifts (title, user_id) VALUES ('Xbox', 1);
INSERT INTO gifts (title, user_id) VALUES ('PS5', 1);
INSERT INTO gifts (title, user_id) VALUES ('Switch', 1);
INSERT INTO gifts (title, user_id) VALUES ('Switch', 2);

INSERT INTO gifts_for_recipients (gift_id, recipient_id) Values (1,2);
INSERT INTO gifts_for_recipients (gift_id, recipient_id) Values (2,3);
INSERT INTO gifts_for_recipients (gift_id, recipient_id) Values (2,2);
-- GET RECIPIENTS BASED ON USER_id
SELECT u.first_name AS "USER FIRST NAME", r.*
FROM recipients r LEFT OUTER JOIN users u
ON u._id = r.user_id
WHERE u._id = 1;

-- GET ALL GIFTS from user 1 that have recipients and show recipients
SELECT *
FROM
gifts_for_recipients gj
INNER JOIN gifts g ON  g._id = gj.gift_id
INNER JOIN recipients r ON r._id = gj.recipient_id
WHERE g.user_id = 1;
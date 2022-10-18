CREATE TABLE "USERS" (
    "_id"  SERIAL  NOT NULL,
    "FirstName" varchar   NOT NULL,
    "LastName" varchar   NOT NULL,
    "Email" varchar   NOT NULL,
    "GitHubOAUTH" varchar   NOT NULL,
    CONSTRAINT "pk_USERS" PRIMARY KEY (
        "_id"
     )
);
CREATE TABLE "RECIPIENTS" (
    "_id" SERIAL NOT NULL,
    "AssociatedUser" int NOT NULL,
    "FirstName" varchar NOT NULL,
    "LastName" varchar NOT NULL,
    "Address" varchar,
    "City" varchar,
    "State" varchar,
    "Country" varchar,
    "zip_code" varchar,
    CONSTRAINT "pk_RECIPIENTS" PRIMARY KEY(
      "_id"
    )
);
CREATE TABLE "GIFTS_JOINER" (
  "_id" SERIAL NOT NULL,
  "Gift_id" int NOT NULL,
  "Recipient_id" int NOT NULL,
  CONSTRAINT "pk_GIFTS_JOINER" PRIMARY KEY (
    "_id"
  )
);

CREATE TABLE "GIFTS" (
    "_id"  SERIAL NOT NULL,
    "Gift_Title" varchar NOT NULL,
    "Gift_Price" money,
    "Gift_Description" varchar,
    "Gift_URL" varchar,
    "User_ID" int NOT NULL,
    CONSTRAINT "pk_Gifts" PRIMARY KEY (
        "_id"
     )
);
--ALTER TABLES for JOINS
ALTER TABLE "RECIPIENTS"
ADD CONSTRAINT "fk_RECIPIENTS_AssociatedUser" FOREIGN KEY ("AssociatedUser") REFERENCES "USERS"(_id);

ALTER TABLE "GIFTS_JOINER"
ADD CONSTRAINT "fk_GIFTS_JOINER_Gift_id" FOREIGN KEY ("Gift_id") REFERENCES "GIFTS"(_id);

ALTER TABLE "GIFTS_JOINER"
ADD CONSTRAINT "fk_GIFTS_JOINER_Recipient_id" FOREIGN KEY ("Recipient_id") REFERENCES "RECIPIENTS"(_id);
--Inserting Dummy Data for checking setup
INSERT INTO "USERS" (_id, "FirstName", "LastName", "Email", "GitHubOAUTH") VALUES (1, 'Matt', 'Garza', 'mattg614@gmail.com', 'klsde9cxxl');

INSERT INTO "USERS" (_id, "FirstName", "LastName", "Email", "GitHubOAUTH") VALUES (2, 'Dipen', 'Nagpal', 'dipennagpal@gmail.com', 'sadjklwer9');

INSERT INTO "USERS" (_id, "FirstName", "LastName", "Email", "GitHubOAUTH") VALUES (3, 'Craig', 'Boswell', 'ccboswell120@gmail.com', 'asfdsawexc');

INSERT INTO "USERS" (_id, "FirstName", "LastName", "Email", "GitHubOAUTH") VALUES (4, 'Lilah', 'August', 'lilahraeaugust@gmail.com', 'sadfasdf');

INSERT INTO "USERS" (_id, "FirstName", "LastName", "Email", "GitHubOAUTH") VALUES (5, 'Jeremy', 'Vogel', 'eremy.vogel44@gmail.com', 'asfasdfwexcv');

INSERT INTO "RECIPIENTS" (_id, "AssociatedUser", "FirstName", "LastName") VALUES (1, 1, 'Dipen', 'Nagpal');

INSERT INTO "RECIPIENTS" (_id, "AssociatedUser", "FirstName", "LastName") VALUES (2, 1, 'Craig', 'Boswell');

INSERT INTO "RECIPIENTS" (_id, "AssociatedUser", "FirstName", "LastName") VALUES (3, 1, 'Lilah', 'August');

INSERT INTO "RECIPIENTS" (_id, "AssociatedUser", "FirstName", "LastName") VALUES (4, 1, 'Jeremy', 'Vogel');

INSERT INTO "GIFTS" (_id, "Gift_Title", "User_ID") VALUES (1, 'Xbox', 1);
INSERT INTO "GIFTS" (_id, "Gift_Title", "User_ID") VALUES (2, 'PS5', 1);
INSERT INTO "GIFTS_JOINER" (_id, "Gift_id", "Recipient_id") Values (1,1,2);
INSERT INTO "GIFTS_JOINER" (_id, "Gift_id", "Recipient_id") Values (2,2,3);
INSERT INTO "GIFTS" (_id, "Gift_Title", "User_ID") VALUES (3, 'Switch', 1);
INSERT INTO "GIFTS" (_id, "Gift_Title", "User_ID") VALUES (4, 'Switch', 2);



-- GET RECIPIENTS BASED ON USER_id
-- SELECT u."FirstName" AS "USER FIRST NAME", r.*
-- FROM "RECIPIENTS" r LEFT OUTER JOIN "USERS" u
-- ON u._id = r."AssociatedUser"
-- WHERE u._id = 1;

-- GET ALL GIFTS from user 1 that have recipients and show recipients
-- SELECT *
-- FROM
-- "GIFTS_JOINER" gj
-- INNER JOIN "GIFTS" ON  "GIFTS"._id = gj."Gift_id"
-- INNER JOIN "RECIPIENTS" ON "RECIPIENTS"._id = gj."Recipient_id"
-- WHERE "GIFTS"."User_ID" = 1;
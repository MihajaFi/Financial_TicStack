

insert into "user" (user_name, user_first_name, gender, birth_date, occupation, "address", contact,facebook,email) values ('Mihajatina', 'Fifaliana', 'M', '2022-11-10','President', '67 ha', '038 XX XXX XX','https://web.facebook.com/fifaliana.rambeloson.9','hei.mihajatiana@gmail.com');
insert into "user" (user_name, user_first_name, gender, birth_date, occupation, "address", contact,facebook,email) values ('Randrianarisoa','Tiana Finaritra','M','2002-12-02','Coordinateur','Sab/Nam','034 13 106 21','https://web.facebook.com/mahery.stan','hei.finaritra.3@gmail.com');
insert into "user" (user_name, user_first_name, gender, birth_date, occupation, "address", contact,facebook,email) values ('Voarimampionona','Zo','M','2005-01-05','Tresorier','Andavamamba','034 XX XXX XX','https://web.facebook.com/zo.kely.961','hei.zoarisoa@gmail.com');
insert into "user" (user_name, user_first_name, gender, birth_date, occupation, "address", contact,facebook,email) values ('Fitahiana','Tsiaro','M','2004-04-04','Responsale des activite','67 ha','032 XX XXX XX','https://web.facebook.com/tsiaroniaina.fitahiana','hei.tsiaro.2@gmail.com');
insert into "user" (user_name, user_first_name, gender, birth_date, occupation, "address", contact,facebook,email) values ('Zatovonirina','Rado','M','2004-06-02','Secretaire','67 ha','034 XX XXX XX','https://web.facebook.com/radonomenjanahary.zatovonirinaranjana','hei.rado.3@gmail');
insert into "user" (user_name, user_first_name, gender, birth_date, occupation, "address", contact,facebook,email) values ('Mangalahy','Fenohasina','M','2003-06-02','Responsable des etudes','67 ha','034 XX XXX XX','https://web.facebook.com/profile.php?id=100087596260434','hei.fenohasiona@gmail.com');


insert into group_account (id_account,total_money) values (555,22225424);
update group_account set total_money =2025000.00 where id_account = 555;

insert into pay ("value", id_user,week) 
values 
(3417.4,1,CURRENT_DATE),
(3417.4,2,CURRENT_DATE),
(3417.4,3,CURRENT_DATE),
(3417.4,4,CURRENT_DATE),
(3417.4,5,CURRENT_DATE),
(3417.4,6,CURRENT_DATE),
(3417.4,4,CURRENT_DATE),
(3417.4,2,CURRENT_DATE),
(3417.4,6,CURRENT_DATE),
(3417.4,2,CURRENT_DATE),
(3417.4,1,CURRENT_DATE);
insert into withdrawal ("value", id_user) 
values 
(3417.4,1),
(3417.4,2),
(3417.4,3),
(3417.4,4),
(3417.4,5),
(3417.4,6),
(3417.4,4),
(3417.4,2),
(3417.4,6),
(3417.4,2),
(3417.4,1);


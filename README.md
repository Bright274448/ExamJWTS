# ExamJWTS

#จงยกตัวอย่างการใช้งาน JWT (Json Web Token) พร้อม Demo

#Clone โปรเจ็กต์:https://github.com/Bright274448/ExamJWT.git

#cd เข้าไปยัง directorty ที่ทำการ clone

#ทำการพิมพ์คำสั่ง npm install

#ทำการ run ด้วยคำสั่ง node server.js

#ตัวอย่างการ Demo โดยใช้ Postman

#ส่ง method post ไปที่ http://localhost:3002/api/login เพื่อรับ token

![image](https://github.com/Bright274448/ExamJWTS/assets/76517020/686ea32e-61f8-430e-bf4f-599b0f466594)


#เมื่อส่ง method get ไปยัง http://localhost:3002/api/private แบบไม่แนบ token จะไม่สามารถเข้าถึง API ได้

![image](https://github.com/Bright274448/ExamJWTS/assets/76517020/8b07a1a4-b402-4273-87cd-d7f56274a59a)


#แล้วลอง แนบ token แล้วส่ง method get ไปยัง http://localhost:3002/api/private

![image](https://github.com/Bright274448/ExamJWTS/assets/76517020/bafa6044-c506-4c0d-bfa6-5b52c3acc74b)


#สามารถเข้าถึง private API ได้

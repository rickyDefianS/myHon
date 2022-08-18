# **my:hon PROJECT**

- **Server** : https://myhon-service-app.herokuapp.com/
- **Client** : https://myhon-c4142.web.app

<br>

## **API DOCUMENTATION**

---

### **Models**

> #### **Book**
>
> - title (string)
> - imgUrl (string)
> - author (string)
> - rating (number)

<br>

### **Endpoints**

### List of available endpoints :

- GET `/favorites`
- POST `/favorites`

<br>

> #### **GET** `/favorites`
>
> > #### Get all favorite books data
> >
> > <br>
> >
> > #### **Response**
> >
> > #### 200 - OK
> >
> > - Body
> >
> > ```json
> >  [
> >    {
> >      "_id": "62fe597908ff2a8a8adeb903",
> >      "title": "Introducing GitHub",
> >      "imgUrl": "http://books.google.com/books/content?id=OhdOBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
> >      "author": "Peter Bell,Brent Beer",
> >      "rating": 5
> >    },
> >    ...
> >  ]
> > ```
>
> <br>
>
> #### **POST** `/favorites`
>
> > #### Make new a favorite book data
> >
> > <br>
> >
> > #### **Request**
> >
> > - Body
> >
> > ```json
> > {
> >   "title": "Learning React Native",
> >   "imgUrl": "http://books.google.com/books/content?id=274fCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
> >   "author": "Bonnie Eisenman",
> >   "rating": 0
> > }
> > ```
> >
> > <br>
> >
> > #### **Response**
> >
> > #### 201 - OK
> >
> > - Body
> >
> > ```json
> > {
> >   "title": "Learning React Native",
> >   "imgUrl": "http://books.google.com/books/content?id=274fCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
> >   "author": "Bonnie Eisenman",
> >   "rating": 0,
> >   "_id": "62fe6e5759c27484868190f4",
> >   "__v": 0
> > }
> > ```

<br>

### **Global Error**

> #### **INTERNAL SERVER ERROR**
>
> > #### **Response**
> >
> > #### 500 - Internal Server Error
> >
> > - Body
> >
> > ```json
> > {
> >   "message": "Internal Server Error"
> > }
> > ```

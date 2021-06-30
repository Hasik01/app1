//ՏՆ N1 _Class
class Countrie{
  constructor(name, president, language, capital, age ) {
 this.name = name;
 this.president = president;
 this.language = language;
 this.capital = capital;
 this.age = age;
  }
  showData = function () {
    console.log(this.name, this.president,this.language,this.capital,this.age);
  }   
}
 const a = new Countrie("Armenia","A.Sargsyan","հայերեն","Erevan",6600);
 const b = new Countrie("Brazil","Jair Bolsonaro","Brazilian","Brasília",131);
 const c = new Countrie("Cyprus"," Nicos Anastasiades","Greek","Nicosia",100);
 const d = new Countrie("Dominica","Charles Savarin","English","Roseau",1547);
 const e = new Countrie("Egypt","Abdel Fattah el-Sisi","Egyptian Arabic","Cairo",4500);
 a.showData();
 b.showData();
 c.showData();
 d.showData();
 e.showData();

 //ՏՆ N2 _Prototype (class)
 //1
  class Home {
    constructor(){}
    plase = "Erevan"
  }
 class Countrie extends Home {
   constructor() {
     super()
   }
   countrieName = "Armenia"
 }
 const c = new Countrie();
 console.log(c.plase);
  //2
  class Me {
    constructor(){}
    age =( 17);
    mail = "hasikgyan01@gmail.com"

  }
 class About extends Me {
   constructor() {
     super()
   }
   name = "Hasik"
   lastName = "Gevorgyan"
 }
 const c = new About();
 console.log(c.mail,c.name,c.age);
  //3
  class Car {
    constructor(){}
    type = "BMW";
    seria = "M next vision"

  }
 class About extends Car {
   constructor() {
     super()
   }
   year = (2018)
  
 }
 const c = new About();
 console.log(c.type,c.seria,c.year);
 
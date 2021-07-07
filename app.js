
function checkBrackets(string) {

  let a = '(';
  let b = '{';
  let c = '[';
  let A = ')';
  let B = '}';
  let C = ']';

  let arr = [];

  for(let i = 0; i < string.length; i++) {

    if((arr[arr.length-1] == a && string[i] == A) || (arr[arr.length-1] == b && string[i] == B) || (arr[arr.length-1] == c && string[i] == C) ) {

          arr.pop();

          console.log(arr);

    } else if(string[i] == a || string[i] == b || string[i] == c) {

          arr.push(string[i]);

            console.log(arr);}
      else {
        continue;
      }
        
    
      
    
  }
  return arr.length;
}


  try { if(checkBrackets('{{jhdbk(hcdbkj[kjdhn]dskjb{djhkbc}dkcbj()kbdcbk)}}') == 0){
    console.log("Quantity of brackets are correct!");
    
    
  } }
  catch {
    throw new Error("Quantity of brackets aren't correct!");
  }
  
  
  
  
  
  
  
  
  
  // //ՏՆ N1 _Class
// class Countrie{
//   constructor(name, president, language, capital, age ) {
//  this.name = name;
//  this.president = president;
//  this.language = language;
//  this.capital = capital;
//  this.age = age;
//   }
//   showData = function () {
//     console.log(this.name, this.president,this.language,this.capital,this.age);
//   }   
// }
//  const a = new Countrie("Armenia","A.Sargsyan","հայերեն","Erevan",6600);
//  const b = new Countrie("Brazil","Jair Bolsonaro","Brazilian","Brasília",131);
//  const c = new Countrie("Cyprus"," Nicos Anastasiades","Greek","Nicosia",100);
//  const d = new Countrie("Dominica","Charles Savarin","English","Roseau",1547);
//  const e = new Countrie("Egypt","Abdel Fattah el-Sisi","Egyptian Arabic","Cairo",4500);
//  a.showData();
//  b.showData();
//  c.showData();
//  d.showData();
//  e.showData();

//  //ՏՆ N2 _Prototype (class)
//  //1
//   class Home {
//     constructor(){}
//     plase = "Erevan"
//   }
//  class Countrie extends Home {
//    constructor() {
//      super()
//    }
//    countrieName = "Armenia"
//  }
//  const c = new Countrie();
//  console.log(c.plase);
//   //2
//   class Me {
//     constructor(){}
//     age =( 17);
//     mail = "hasikgyan01@gmail.com"

//   }
//  class About extends Me {
//    constructor() {
//      super()
//    }
//    name = "Hasik"
//    lastName = "Gevorgyan"
//  }
//  const c = new About();
//  console.log(c.mail,c.name,c.age);
//   //3
//   class Car {
//     constructor(){}
//     type = "BMW";
//     seria = "M next vision"

//   }
//  class About extends Car {
//    constructor() {
//      super()
//    }
//    year = (2018)
  
//  }
//  const c = new About();
//  console.log(c.type,c.seria,c.year);
 



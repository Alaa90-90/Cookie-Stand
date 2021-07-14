
`use strict`


let workhours = [`6 am`, `7 am`, `8 am`, `9 am`, `10 am`, `11 am`, `12 am`, `01 pm`, `02 pm`, `03 pm`, `04 pm`, `05 pm`, `06 pm`, `07 pm`, `daily location total`];

let br = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];



// let rest1 = {
//     location1: 'seattle',
//     maxcus1: 65,
//     minicus1: 23,
//     avgpercus1: 6.3,
//     realcus1: [],
//     realsales1: [],

//     real0cus1: function () {

//         for (let i = 0; i < 14; i++) {

//             this.realcus1[i]=(Math.floor(Math.random() * (this.maxcus1 - this.minicus1 + 1)) + this.minicus1
//             );
//         }
//     },

//     real0sales1: function () {

//         for (let i = 0; i < 14; i++) {

//             this.realsales1[i]=Math.floor(this.realcus1[i]*this.avgpercus1)
// };
//     },

//     // this function sponcerd by w3school.com

// totalSales1:function(){

//        this.realsales1.reduce((a, b) => a + b, 0)

//        this.realsales1.push(this.realsales1.reduce((a, b) => a + b, 0));

// }
// };

// rest1.real0cus1();
// rest1.real0sales1();
// rest1.totalSales1();

//   console.log(rest1);

//   let parent= document.getElementById('seattle Sales For Today');
//   let BranchElement=document.createElement('h2');

//   BranchElement.textContent=rest1.location1;

//   parent.appendChild(BranchElement);



//   let ulelement=document.createElement('ul');
//   parent.appendChild(ulelement);

//   for (let i = 0; i < workhours.length; i++) {

//     let workhoursElement=document.createElement('li');
//     workhoursElement.textContent=`${workhours[i]}: ${rest1.realsales1[i]}`;
//     ulelement.appendChild(workhoursElement);

//   }

// console.log(parent);












// let rest2 = {
//     location2: 'tokyo',
//     maxcus2: 24,
//     minicus2: 3,
//     avgpercus2: 1.2,
//     realcus2: [],
//     realsales2: [],

//     real0cus2: function () {

//         for (let i = 0; i < 14; i++) {

//             this.realcus2[i]=(Math.floor(Math.random() * (this.maxcus2 - this.minicus2 + 1)) + this.minicus2
//             );
//         }
//     },

//     real0sales2: function () {

//         for (let i = 0; i < 14; i++) {

//             this.realsales2[i]=Math.floor(this.realcus2[i]*this.avgpercus2)
// };
//     },

//     // this function sponcerd by w3school.com

// total0Sales2:function(){

//        this.realsales2.reduce((a, b) => a + b, 0)

//        this.realsales2.push(this.realsales2.reduce((a, b) => a + b, 0));

// }
// };

// rest2.real0cus2();
// rest2.real0sales2();
// rest2.total0Sales2();

//   console.log(rest2);

//   let parent2= document.getElementById('tokyo Sales For Today');
//   let BranchElement2=document.createElement('h2');

//   BranchElement2.textContent=rest2.location2;

//   parent2.appendChild(BranchElement2);



//   let ulelement2=document.createElement('ul');
//   parent2.appendChild(ulelement2);

//   for (let i = 0; i < workhours.length; i++) {

//     let workhoursElement2=document.createElement('li');
//     workhoursElement2.textContent=`${workhours[i]}: ${rest2.realsales2[i]}`;
//     ulelement2.appendChild(workhoursElement2);

//   }

// console.log(parent2);













function Branches(location, maxcustom, minicustom, avrcustom) {

    this.location = location;
    this.maxcustom = maxcustom;
    this.minicustom = minicustom;
    this.avrcustom = avrcustom;
    this.realcustom = [];
    this.realsale = [];


    Branches.prototype.customers = function () {



        for (let i = 0; i < workhours.length; i++) {

            this.realcustom[i] = (Math.floor(Math.random() * (this.maxcustom - this.minicustom + 1)) + this.minicustom
            );
        }
        console.log(this.realcustom);
    }



   

    Branches.prototype.sales = function () {

        for (let i = 0; i < workhours.length; i++) {

            this.realsale[i] = Math.floor(this.realcustom[i] * this.avrcustom)

        }
        console.log(this.avrcustom);


    }

    Branches.prototype.totalsales = function () {

        // this.totalsales.reduce((a, b) => a + b, 0)

        // this.totalsales.push(this.totalsales.reduce((a, b) => a + b, 0));
    }



};


let seattle = new Branches('seattle', 65, 23, 6.3);
seattle.customers()
seattle.sales()
seattle.totalsales()
seattle.render
console.log(seattle);


let tokyo = new Branches('tokyo', 24, 3, 1.2)
tokyo.customers()
tokyo.sales()
tokyo.totalsales()
console.log(tokyo);

let dubai = new Branches('dubai', 38, 11, 3.7)
dubai.customers()
dubai.sales()
dubai.totalsales()
console.log(dubai);

let paris = new Branches('paris', 38, 20, 2.3)
paris.customers()
paris.sales()
paris.totalsales()
console.log(paris);


let lima = new Branches('lima', 16, 2, 4.6)
lima.customers()
lima.sales()
lima.totalsales()
console.log(lima);






let parent9 = document.getElementById('table of sales');
let table = document.createElement('table');
parent9.appendChild(table);

let headingraw = document.createElement('tr');
table.appendChild(headingraw);


for (let i = 0; i < workhours.length; i++) {
    let thEL = document.createElement('th');
    headingraw.appendChild(thEL);
    thEL.textContent = workhours[i]

}



Branches.prototype.render=function(){

let newraw =document.createElement('tr');
table.appendChild(newraw);
let brname =document.createElement('td');
newraw.appendChild(brname);

brname.textContent=this.location;

 for (let i = 0; i < workhours.length; i++) {
let cookiesEelemnt=document.createElement('tr');
newraw.appendChild(cookiesEelemnt);
cookiesEelemnt.textContent=this.realsale[i];

}





}






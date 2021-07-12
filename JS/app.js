`use strict`


workhours= [`6 am`, `7 am`, `8 am`, `9 am`, `10 am`, `11 am`, `12 am`, `01 pm`, `02 pm`, `03 pm`, `04 pm`, `05 pm`, `06 pm`, `07 pm`,`Total sales this day`];

let rest1 = {
    location1: 'seattle',
    maxcus1: 65,
    minicus1: 23,
    avgpercus1: 6.3,
    realcus1: [],
    realsales1: [],

    real0cus1: function () {

        for (let i = 0; i < 14; i++) {

            this.realcus1[i]=(Math.floor(Math.random() * (this.maxcus1 - this.minicus1 + 1)) + this.minicus1
            );
        }
    },

    real0sales1: function () {

        for (let i = 0; i < 14; i++) {

            this.realsales1[i]=Math.floor(this.realcus1[i]*this.avgpercus1)
};
    },

    // this function sponcerd by w3school.com
    
totalSales1:function(){

       this.realsales1.reduce((a, b) => a + b, 0)
      
       this.realsales1.push(this.realsales1.reduce((a, b) => a + b, 0));

}
};

rest1.real0cus1();
rest1.real0sales1();
rest1.totalSales1();

  console.log(rest1);

  let parent= document.getElementById('seattle Sales For Today');
  let BranchElement=document.createElement('h2');

  BranchElement.textContent=rest1.location1;

  parent.appendChild(BranchElement);



  let ulelement=document.createElement('ul');
  parent.appendChild(ulelement);

  for (let i = 0; i < workhours.length; i++) {

    let workhoursElement=document.createElement('li');
    workhoursElement.textContent=`${workhours[i]}: ${rest1.realsales1[i]}`;
    ulelement.appendChild(workhoursElement);

  }

console.log(parent);












let rest2 = {
    location2: 'tokyo',
    maxcus2: 24,
    minicus2: 3,
    avgpercus2: 1.2,
    realcus2: [],
    realsales2: [],

    real0cus2: function () {

        for (let i = 0; i < 14; i++) {

            this.realcus2[i]=(Math.floor(Math.random() * (this.maxcus2 - this.minicus2 + 1)) + this.minicus2
            );
        }
    },

    real0sales2: function () {

        for (let i = 0; i < 14; i++) {

            this.realsales2[i]=Math.floor(this.realcus2[i]*this.avgpercus2)
};
    },

    // this function sponcerd by w3school.com
    
total0Sales2:function(){

       this.realsales2.reduce((a, b) => a + b, 0)
      
       this.realsales2.push(this.realsales2.reduce((a, b) => a + b, 0));

}
};

rest2.real0cus2();
rest2.real0sales2();
rest2.total0Sales2();

  console.log(rest2);

  let parent2= document.getElementById('tokyo Sales For Today');
  let BranchElement2=document.createElement('h2');

  BranchElement2.textContent=rest2.location2;

  parent2.appendChild(BranchElement2);



  let ulelement2=document.createElement('ul');
  parent2.appendChild(ulelement2);

  for (let i = 0; i < workhours.length; i++) {

    let workhoursElement2=document.createElement('li');
    workhoursElement2.textContent=`${workhours[i]}: ${rest2.realsales2[i]}`;
    ulelement2.appendChild(workhoursElement2);

  }

console.log(parent2);

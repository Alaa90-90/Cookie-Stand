
`use strict`
let workhours = [`6  am `, `7  am `, `8  am `, `9  am `, `10 am`, `11 am`, `12 am`, `01 pm`, `02 pm`, `03 pm`, `04 pm`, `05 pm`, `06 pm`, `07 pm`];
let br = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];


// LAB 06 REQIRED FUNCTIONS FROM LINE 1 -- 345 IN THIS JAVASCRIPT FILE 
// SO YOU CAN COMMENT ENTIRE THE CODE AND KEEP FROM  LINE 1 -- 345 TO CHECK IT


let rest1 = {
    location1: 'Seattle',
    maxcus1: 65,
    minicus1: 23,
    avgpercus1: 6.3,
    realcus1: [],
    realsales1: [],
    totalDaysales1: [],

    real0cus1: function () {

        for (let i = 0; i < 14; i++) {

            this.realcus1[i] = (Math.floor(Math.random() * (this.maxcus1 - this.minicus1 + 1)) + this.minicus1
            );
        }
    },

    real0sales1: function () {

        for (let i = 0; i < 14; i++) {

            this.realsales1[i] = Math.floor(this.realcus1[i] * this.avgpercus1)
        };
    },

    // this function sponcerd by w3school.com

    totalSales1: function () {

        this.totalDaysales1 = this.realsales1.reduce((a, b) => a + b, 0)
    },

    render1: function () {

        let parent = document.getElementById('table of sales');

        let BranchElement = document.createElement('h2');

        BranchElement.textContent = rest1.location1;

        parent.appendChild(BranchElement);

        let ulelement = document.createElement('ul');
        parent.appendChild(ulelement);

        for (let i = 0; i < workhours.length; i++) {

            let workhoursElement = document.createElement('li');
            workhoursElement.textContent = `${workhours[i]}: ${rest1.realsales1[i]} Cookies `;
            ulelement.appendChild(workhoursElement);
        }

        let total1elemnt = document.createElement('li');
        ulelement.appendChild(total1elemnt);
        total1elemnt.textContent = `Total : ${this.totalDaysales1} Cookies `
    }

};

rest1.real0cus1();
rest1.real0sales1();
rest1.totalSales1();
rest1.render1();
console.log(rest1);



let rest2 = {
    location2: 'Tokyo',
    maxcus2: 24,
    minicus2: 3,
    avgpercus2: 1.2,
    realcus2: [],
    realsales2: [],
    totalDaysales2: [],

    real0cus2: function () {

        for (let i = 0; i < 14; i++) {

            this.realcus2[i] = (Math.floor(Math.random() * (this.maxcus2 - this.minicus2 + 1)) + this.minicus2
            );
        }
    },

    real0sales2: function () {

        for (let i = 0; i < 14; i++) {

            this.realsales2[i] = Math.floor(this.realcus2[i] * this.avgpercus2)
        };
    },

    // this function sponcerd by w3school.com

    total0Sales2: function () {

        this.totalDaysales2 = this.realsales2.reduce((a, b) => a + b, 0)
    },

    render2: function () {

        let parent = document.getElementById('table of sales');

        let BranchElement = document.createElement('h2');

        BranchElement.textContent = rest2.location2;

        parent.appendChild(BranchElement);

        let ulelement = document.createElement('ul');

        parent.appendChild(ulelement);

        for (let i = 0; i < workhours.length; i++) {

            let workhoursElement = document.createElement('li');
            workhoursElement.textContent = `${workhours[i]}: ${rest2.realsales2[i]} Cookies `;
            ulelement.appendChild(workhoursElement);
        }

        let total2elemnt = document.createElement('li');
        ulelement.appendChild(total2elemnt);
        total2elemnt.textContent = `Total : ${this.totalDaysales2} Cookies `
    },
};

rest2.real0cus2();
rest2.real0sales2();
rest2.total0Sales2();
rest2.render2();
console.log(rest2);



let rest3 = {
    location3: 'Dubai',
    maxcus3: 38,
    minicus3: 11,
    avgpercus3: 3.7,
    realcus3: [],
    realsales3: [],
    totalDaysales3: [],

    real0cus3: function () {

        for (let i = 0; i < 14; i++) {

            this.realcus3[i] = (Math.floor(Math.random() * (this.maxcus3 - this.minicus3 + 1)) + this.minicus3
            );
        }
    },

    real0sales3: function () {

        for (let i = 0; i < 14; i++) {
            this.realsales3[i] = Math.floor(this.realcus3[i] * this.avgpercus3)
        };
    },

    // this function sponcerd by w3school.com

    total0Sales3: function () {

        this.totalDaysales3 = this.realsales3.reduce((a, b) => a + b, 0)
    },

    render3: function () {

        let parent = document.getElementById('table of sales');

        let BranchElement = document.createElement('h2');

        BranchElement.textContent = rest3.location3;

        parent.appendChild(BranchElement);

        let ulelement = document.createElement('ul');
        parent.appendChild(ulelement);

        for (let i = 0; i < workhours.length; i++) {

            let workhoursElement = document.createElement('li');
            workhoursElement.textContent = `${workhours[i]}: ${rest3.realsales3[i]} Cookies `;
            ulelement.appendChild(workhoursElement);
        }
        let total3elemnt = document.createElement('li');
        ulelement.appendChild(total3elemnt);
        total3elemnt.textContent = `Total : ${this.totalDaysales3} Cookies `
    },
};

rest3.real0cus3();
rest3.real0sales3();
rest3.total0Sales3();
rest3.render3();
console.log(rest3);






let rest4 = {
    location4: 'Paris',
    maxcus4: 38,
    minicus4: 20,
    avgpercus4: 2.3,
    realcus4: [],
    realsales4: [],
    totalDaysales4: [],

    real0cus4: function () {

        for (let i = 0; i < 14; i++) {

            this.realcus4[i] = (Math.floor(Math.random() * (this.maxcus4 - this.minicus4 + 1)) + this.minicus4
            );
        }
    },

    real0sales4: function () {

        for (let i = 0; i < 14; i++) {

            this.realsales4[i] = Math.floor(this.realcus4[i] * this.avgpercus4)
        };
    },

    // this function sponcerd by w3school.com

    total0Sales4: function () {

        this.totalDaysales4 = this.realsales4.reduce((a, b) => a + b, 0)
    },

    render4: function () {

        let parent = document.getElementById('table of sales');

        let BranchElement = document.createElement('h2');

        BranchElement.textContent = rest4.location4;

        parent.appendChild(BranchElement);

        let ulelement = document.createElement('ul');
        parent.appendChild(ulelement);

        for (let i = 0; i < workhours.length; i++) {

            let workhoursElement = document.createElement('li');
            workhoursElement.textContent = `${workhours[i]}: ${rest4.realsales4[i]} Cookies `;
            ulelement.appendChild(workhoursElement);
        }
        let total4elemnt = document.createElement('li');
        ulelement.appendChild(total4elemnt);
        total4elemnt.textContent = `Total : ${this.totalDaysales4} Cookies `
    },
};

rest4.real0cus4();
rest4.real0sales4();
rest4.total0Sales4();
rest4.render4();
console.log(rest4);





let rest5 = {
    location5: 'Lima',
    maxcus5: 16,
    minicus5: 2,
    avgpercus5: 4.6,
    realcus5: [],
    realsales5: [],
    totalDaysales5: [],

    real0cus5: function () {

        for (let i = 0; i < 14; i++) {

            this.realcus5[i] = (Math.floor(Math.random() * (this.maxcus5 - this.minicus5 + 1)) + this.minicus5
            );
        }
    },

    real0sales5: function () {

        for (let i = 0; i < 14; i++) {

            this.realsales5[i] = Math.floor(this.realcus5[i] * this.avgpercus5)
        };
    },

    // this function sponcerd by w3school.com

    total0Sales5: function () {

        this.totalDaysales5 = this.realsales5.reduce((a, b) => a + b, 0)
    },

    render5: function () {

        let parent = document.getElementById('table of sales');

        let BranchElement = document.createElement('h2');

        BranchElement.textContent = rest5.location5;

        parent.appendChild(BranchElement);

        let ulelement = document.createElement('ul');
        parent.appendChild(ulelement);

        for (let i = 0; i < workhours.length; i++) {

            let workhoursElement = document.createElement('li');
            workhoursElement.textContent = `${workhours[i]}: ${rest5.realsales5[i]} Cookies `;
            ulelement.appendChild(workhoursElement);
        }
        let total5elemnt = document.createElement('li');
        ulelement.appendChild(total5elemnt);
        total5elemnt.textContent = `Total : ${this.totalDaysales5} Cookies `
    },
};

rest5.real0cus5();
rest5.real0sales5();
rest5.total0Sales5();
rest5.render5();
console.log(rest5);





// function Branches(location, maxcustom, minicustom, avrcustom) {

//     this.location = location;
//     this.maxcustom = maxcustom;
//     this.minicustom = minicustom;
//     this.avrcustom = avrcustom;
//     this.realcustom = [];
//     this.realsale = [];


//     Branches.prototype.customers = function () {



//         for (let i = 0; i < workhours.length; i++) {

//             this.realcustom[i] = (Math.floor(Math.random() * (this.maxcustom - this.minicustom + 1)) + this.minicustom
//             );
//         }
//         console.log(this.realcustom);
//     }





//     Branches.prototype.sales = function () {

//         for (let i = 0; i < workhours.length; i++) {

//             this.realsale[i] = Math.floor(this.realcustom[i] * this.avrcustom)

//         }
//         console.log(this.avrcustom);


//     }

//     Branches.prototype.totalsales = function () {

//         // this.totalsales.reduce((a, b) => a + b, 0)

//         // this.totalsales.push(this.totalsales.reduce((a, b) => a + b, 0));
//     }



// };


// let seattle = new Branches('seattle', 65, 23, 6.3);
// seattle.customers()
// seattle.sales()
// seattle.totalsales()
// seattle.render
// console.log(seattle);


// let tokyo = new Branches('tokyo', 24, 3, 1.2)
// tokyo.customers()
// tokyo.sales()
// tokyo.totalsales()
// console.log(tokyo);

// let dubai = new Branches('dubai', 38, 11, 3.7)
// dubai.customers()
// dubai.sales()
// dubai.totalsales()
// console.log(dubai);

// let paris = new Branches('paris', 38, 20, 2.3)
// paris.customers()
// paris.sales()
// paris.totalsales()
// console.log(paris);


// let lima = new Branches('lima', 16, 2, 4.6)
// lima.customers()
// lima.sales()
// lima.totalsales()
// console.log(lima);






// let parent9 = document.getElementById('table of sales');
// let table = document.createElement('table');
// parent9.appendChild(table);

// let headingraw = document.createElement('tr');
// table.appendChild(headingraw);


// for (let i = 0; i < workhours.length; i++) {
//     let thEL = document.createElement('th');
//     headingraw.appendChild(thEL);
//     thEL.textContent = workhours[i]

// }



// Branches.prototype.render = function () {

//     let newraw = document.createElement('tr');
//     table.appendChild(newraw);
//     let brname = document.createElement('td');
//     newraw.appendChild(brname);

//     brname.textContent = this.location;

//     for (let i = 0; i < workhours.length; i++) {
//         let cookiesEelemnt = document.createElement('tr');
//         newraw.appendChild(cookiesEelemnt);
//         cookiesEelemnt.textContent = this.realsale[i];

//     }







// }












// let submet = document.getElementById('sbmt');
// addEventListener('click', submitsuggest);

// function submitsuggest() {


//     let restz = {
//         locationz: 'tokyo',
//         maxcusz: 24,
//         minicusz: 3,
//         avgpercusz: 1.2,
//         realcusz: [],
//         realsalesz: [],

//         real0cusz: function () {

//             for (let i = 0; i < workhours; i++) {

//                 this.realcusz[i] = (Math.floor(Math.random() * (this.maxcusz - this.minicusz + 1)) + this.minicusz
//                 );
//             }
//         },

//         real0salesz: function () {

//             for (let i = 0; i < workhours; i++) {

//                 this.realsalesz[i] = Math.floor(this.realcusz[i] * this.avgpercusz)
//             };
//         },

//         // this function sponcerd by w3school.com

//         total0Salesz: function () {

//             this.realsalesz.reduce((a, b) => a + b, 0)

//             this.realsalesz.push(this.realsalesz.reduce((a, b) => a + b, 0));

//         }
//     };

//     restz.real0cusz();
//     restz.real0salesz();
//     restz.total0Salesz();

//     console.log(restz);


// }
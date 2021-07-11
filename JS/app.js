`use strict`

let rest1 = {
    location: 'seattle',
    maxcus: 65,
    minicus: 23,
    avgpercus: 6.3,
    workhours: [`6 am`, `7 am`, `8 am`, `9 am`, `10 am`, `11 am`, `12 am`, `01 pm`, `02 pm`, `03 pm`, `04 pm`, `05 pm`, `06 pm`, `07 pm`,`Total sales this day`],
    realcus: [],
    realsales: [],

    real0cus: function () {

        for (let i = 0; i < 14; i++) {

            this.realcus[i]=(Math.floor(Math.random() * (this.maxcus - this.minicus + 1)) + this.minicus
            );
        }
    },

    real0sales: function () {

        for (let i = 0; i < 14; i++) {

            this.realsales[i]=Math.floor(this.realcus[i]*this.avgpercus)
};
    },
totalSales:function(){

       this.realsales.reduce((a, b) => a + b, 0)
      
       this.realsales.push(this.realsales.reduce((a, b) => a + b, 0));

}
};

rest1.real0cus();
rest1.real0sales();
rest1.totalSales();

  console.log(rest1);

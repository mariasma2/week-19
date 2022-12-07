class Worker {
    constructor(name, surname, rate, days) {
      this.name = name; //имя
      this.surname = surname; //фамилия
          this.rate = rate; //ставка за день работы
          this.days = days; //количество отработанных дней 
    }
    getSalary() {
        console.log(this.rate * this.days);
    }
  }
  
  let worker1 = new Worker('Петр', 'Петров', 30, 15);
  let worker2 = new Worker('Максим', 'Сидоров', 30, 10);

  //console.log(worker1.name);
  //console.log(worker1.surname); 
//console.log(worker1.rate); 
//console.log(worker1.days); 
console.log(worker1.getSalary()); 
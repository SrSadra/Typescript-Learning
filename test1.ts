//function
function addTwo(val : number) : number{
    return val + 2;
}

function toUpper(val: string){
    return val.toUpperCase();
}

function logSth(val: string): void{
    console.log(`my value is ${val}`);
}

function logError(val: string): never{
    throw new Error("ay ay ay of of of")
}

let loginPage = (name:string , email:string , age: number = 1) => {
}

loginPage("sa" , "sa@gmail.com" , 2);
loginPage("sa" , "sa@gmail.com");
console.log(addTwo(22));
console.log(toUpper("2"));

const arr2 : string[] = ["hi" , "howare" , "good" , "bad"];
const arr: number[] = [1 , 2 , 133 ];

arr.map((element: number): string => {
    return `hello to ${element}`
})

//type aliases
type bool = boolean
type User = {
    name : string;
    familystr : string;
    isActive : bool
}

function modifyUser(user : User): User{
    user.name = "asghar"
    return user;
}

let us = modifyUser({name : "sadra" , familystr : "sar" , isActive : true});
// console.log(us.name);

let afrika : bool = true;
// console.log(afrika);


//types
type UserGoogle = {
    readonly _id : number
    name : string
    isPaid : boolean
    creditCard ?: number
}

let myUser : UserGoogle = {
    _id: 1333, 
    name : "sadra",
    isPaid : true
}

let myUserPremium : UserGoogle = {
    _id : 131334,
    name : "akbar",
    isPaid : false, 
    creditCard : 241414140345983
}
type superme = UserGoogle & User


type mytype = {
    readonly myarr : Array<number>
}

let temp : mytype = {
    myarr : [1,2, 3]
}

temp.myarr.push(33);

// temp.myarr = [3 , 44 , 13] // we cant do this!!!


let myarr: Array<number> = []
myarr.push(212);

let superArr : Array<User> = []
superArr.push({name:"sadra" , familystr : "sar" , isActive :true});

// superArr.map((elem) : void => {
//     console.log(elem);
// })

let score: Number | String = 12;

getId("2");
getId(3);

function getId(id : number | string){
    if (typeof id === "string"){
        id.toLowerCase();
    }
    //id.toLowerCase(); error
}

let data1: number[] = [12, 13,66 ,12,4]
let data2: string[] = ["s1" , "31" ];
let data3: (string | number | boolean)[] = [true , "12" , 133, "33"] //important!!

let mydata: "ahmad" | "karim" | 2
mydata = "karim"


let arrData : [string , number]
arrData = ["hi" , 12]
// arrData = [12 , "hi"] // error

const enum myenum {
    num1 = "hi",
    num2 = "whats up",
    num3 = 3
}

interface Temp1 {
    name : string,
    id: number,
    getAge(na: string , ko : number): string ,
    getPrint(): void
}

let sas : Temp1 = {
    name : "mamad",
    id : 40030,
    getAge: (naasad: "ahmad" , koe : 13) => {
        koe +=13;
        return "alo khodeti" + naasad;
    },
    getPrint() {
        console.log("alo hamid");
    }
} 

//interfaces
interface Temp2 extends Temp1 {
    readonly age : number | string | boolean
}

let sasa : Temp2 = {
    name : "akbar",
    id : 12,
    getAge: (naasad: "ahmad" , koe : 13) => {
        koe +=13;
        return "alo khodeti" + naasad;
    },
    getPrint() {
        console.log("alo hamid");
    },
    age : "33"
}

let temp44 : mytype = temp;


let mytemp = myenum.num1;


//classes
class mamad{
    // public name : string;
    // email : string;
    protected courseNumb = 1; // protected keyword is used when you want to acces variable from subclasses but not outside
    private readonly city : number = 12;
    constructor(public name: string ,private email:string){
    }

    hellomamad():void {
        console.log(`my city is ${this.city}`);
    }

    private sayBye(): void {
        console.log(`bye bye ${this.name}`);
    }

    get getcity(): number {
        return this.city;
    }

    set setCourseNumb(courseNumb) { //we dont decleare return type in settter
        if (courseNumb <= 1){
            throw new Error("must be greater than 1");
        }
        else {
            this.courseNumb = courseNumb;
        }
    }
}

class asghar extends mamad{
    isFamily: boolean = true;
    changeCoursecount() : void{
        this.courseNumb = 50;
    }

    sayHowareyou(): void {
        console.log(`how are you ${this.name}`);
    }
}

let samp = new mamad("sadra" , "sr@sr.com");
samp.hellomamad();
samp.setCourseNumb(3);
let samp2 = new asghar("akbar" , "akbari@gmail.com");
samp2.sayHowareyou();

interface Photo {
    size : number,
    name : string,
    isHorizontal : boolean

    takePic(): string;
}

class Instagram implements Photo {
    constructor(public size : number , public name : string ,public isHorizontal : boolean){}
    takePic(): string {
        return `taking pic with size of ${this.size}`;
    }
}

let myId = new Instagram(120 , "karim" , true);
myId.takePic();

 export {}
 
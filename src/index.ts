export class Calculator{
    static add(a: number,b:number){
        return a+b;
    }

    static sub(a:number,b:number){
        if(a>b){
            return a-b;
        }else{
            return b-a;
        }
    }

    static multiply(a:number,b:number){
        return a*b;
    }

    static division(a:number,b:number){
        try {
            if(b==0) throw "B cannot be zero";

            else return a/b;
        } catch (error) {
            return error;
        }
    }

    static mod(a:number,b:number){
        return a|b;
    }
}
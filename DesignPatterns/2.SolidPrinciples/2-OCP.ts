/*

Open-Closed Principle:
 The open-closed principle states that "software entities 
 (classes, modules, functions, etc.) 
 should be open for extension, but closed for modification." .
 
 This means that you should be able to add new features or functionality to a 
 software system without altering the existing code. You can extend the behavior 
 of the object, but you should not modify its
 source code. 

Detailed Explanation:

-> Open for extension: This means that the behavior of a software entity can be extended,
   that is, we should be able to add new features or behavior to the software entity.
-> Closed for modification: This means that once the software entity is developed and 
   it has been reviewed and tested, the code should not be touched 
   (to correct the software entity's behavior or to add new features).

*/

//regular customer -> 5% discount
//premium customer -> 10% discount
// wrong way

class Discount {
    public giveDiscount(customerType: string, amount: number): number {
        if (customerType === 'regular') {
            return amount * 0.05;
        } else if (customerType === 'premium') {
            return amount * 0.1;
        }
        return 0;
    }

}
// this is wrong way because now let say
// we have to add new customer type gold
// then we have to modify the code and
// this is violation of OCP

// correct way

interface Customer {
    giveDiscount(): number;
}

class RegularCustomer implements Customer {
    public giveDiscount(): number {
        return 0.05;
    }
}

class PremiumCustomer implements Customer {
    giveDiscount(): number {
        return 0.1;
    }
}

class Discount1 {
    public giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}


let discount = new Discount1();
let regularCustomer = new RegularCustomer();
let premiumCustomer = new PremiumCustomer();
console.log(discount.giveDiscount(regularCustomer));
console.log(discount.giveDiscount(premiumCustomer));
class GoldCustomer implements Customer {
    giveDiscount(): number {
        return 0.15;
    }
}
let goldCustomer = new GoldCustomer();
discount.giveDiscount(goldCustomer);
//Advantages of OCP:
/*
 1. Reduced Risk of Bugs:
    Existing code is not modified,
    so new features do not introduce bugs in the existing functionality.

 2. Increased Code Reusability:
    Components can be reused independently, encouraging modular design.
 3. Simplified Versioning and Patching:
     New features are isolated to new components,simplifying versioning and patching.
     patching is the process of repairing a vulnerability in a system.
*/

// now say we want to give reward points to the customer
// we can do like:
// we need to understand that we are not modifying the existing code
// we are just adding new code, a class can be changed by adding new code.
interface Customer1 {
    giveDiscount(): number;
    rewardPoints(amountSpent: number): number;
}

class RegularCustomer1 implements Customer1 {
    giveDiscount(): number {
        return 0.05;
    }
    rewardPoints(amountSpent: number): number {
        return amountSpent * 0.01;
    }
}

class PremiumCustomer1 implements Customer1 {
    giveDiscount(): number {
        return 0.1;
    }
    rewardPoints(amountSpent: number): number {
        return amountSpent * 0.02;
    }
}

class GoldCustomer1 implements Customer1 {
    giveDiscount(): number {
        return 0.15;
    }
    rewardPoints(amountSpent: number): number {
        return amountSpent * 0.03;
    }
}

class Discount2 {
    public giveDiscount(customer: Customer1): number {
        return customer.giveDiscount();
    }
    public rewardPoints(customer: Customer1, amountSpent: number): number {
        return customer.rewardPoints(amountSpent);
    }
}


let discount1 = new Discount2();
let regularCustomer1 = new RegularCustomer1();
let premiumCustomer1 = new PremiumCustomer1();
let goldCustomer1 = new GoldCustomer1();
console.log(discount1.giveDiscount(regularCustomer1));
console.log(discount1.giveDiscount(premiumCustomer1));
console.log(discount1.giveDiscount(goldCustomer1));
console.log(discount1.rewardPoints(regularCustomer1, 100));


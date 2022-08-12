let bank = [
    {
        name: "uztelecom",
        tax: 12,
        budget: 200000,
        expensesPerYear: [
            {
                title: "rent",
                total: 13000,
            },
            {
                title: "salaries",
                total: 85000,
            },
            {
                title: "furniture",
                total: 15000,
            },
        ],
    },
    {
        name: "artel",
        tax: 12,
        budget: 500000,
        expensesPerYear: [{
                title: "rent",
                total: 15000,
            },
            {
                title: "salaries",
                total: 150000,
            },
            {
                title: "furniture",
                total: 25000,
            },
        ],
    },
    {
        name: "gm",
        tax: 12,
        budget: 1000000,
        expensesPerYear: [{
                title: "rent",
                total: 30000,
            },
            {
                title: "salaries",
                total: 350000,
            },
            {
                title: "furniture",
                total: 90000,
            }
        ]
    }
]

let xxx = []

for(item of bank){
    item.expensesPerMonth = Math.round(item.expensesPerYear.reduce((a,b) => a + b.total, 0)/12)
    item.nalog = item.budget / 100 * item.tax

    xxx.push(item.nalog)

    item.total = item.budget - item.expensesPerMonth - item.nalog

    item.arr = []
}

let max = Math.max(...xxx)
let min = Math.min(...xxx)

max = bank.find(item => item.nalog == max)
min = bank.find(item => item.nalog == min)


console.log(bank);
console.log(max);
console.log(min);


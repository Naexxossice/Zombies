'use strict';

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

let population = [];

//Méthode pour reset la population quand on le souhaite
function resetPopulation() {
    population = [
        {
            name: "lee",
            isInfected: "",
            age: 18,
            isImmuned: false,
            isDead: false,
            friends: [
                {
                    name: "kim",
                    isInfected: "",
                    age: 25,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "son",
                    isInfected: "",
                    age: 36,
                    isImmuned: false,
                    isDead: false,
                    friends: [
                        {
                            name: "yuan",
                            isInfected: "",
                            age: 18,
                            isImmuned: false,
                            isDead: false,
                            friends: []
                        }
                    ]
                }
            ]
        },
        {
            name: "mamadou",
            isInfected: "",
            age: 78,
            isImmuned: false,
            isDead: false,
            friends: [
                {
                    name: "maryam",
                    isInfected: "",
                    age: 22,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "n'golo",
                    isInfected: "",
                    age: 41,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "oussman",
                    isInfected: "",
                    age: 50,
                    isImmuned: false,
                    isDead: false,
                    friends: [
                        {
                            name: "lelandais",
                            isInfected: "",
                            age: 17,
                            isImmuned: false,
                            isDead: false,
                            friends: []
                        }
                    ]
                },
                {
                    name: "intégrité",
                    isInfected: "",
                    age: 10,
                    isImmuned: false,
                    isDead: false,
                    friends: [
                        {
                            name: "courage",
                            isInfected: "",
                            age: 8,
                            isImmuned: false,
                            isDead: false,
                            friends: [
                                {
                                    name: "audace",
                                    isInfected: "",
                                    age: 81,
                                    isImmuned: false,
                                    isDead: false,
                                    friends: []
                                },
                                {
                                    name: "bravoure",
                                    isInfected: "",
                                    age: 56,
                                    isImmuned: false,
                                    isDead: false,
                                    friends: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "jean-pierre",
            isInfected: "",
            age: 62,
            isImmuned: false,
            isDead: false,
            friends: [
                {
                    name: "Jean-Yves",
                    isInfected: "",
                    age: 68,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "Jean-Edouard",
                    isInfected: "",
                    age: 32,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "Marie-Jeanne",
                    isInfected: "",
                    age: 36,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "Jean-Paul",
                    isInfected: "",
                    age: 41,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                }
            ]
        },
        {
            name: "farouk",
            isInfected: "",
            age: 40,
            isImmuned: false,
            isDead: false,
            friends: [
                {
                    name: "yanis",
                    isInfected: "",
                    age: 40,
                    isImmuned: false,
                    isDead: false,
                    friends: [
                        {
                            name: "ben",
                            isInfected: "",
                            age: 18,
                            isImmuned: false,
                            isDead: false,
                            friends: []
                        },
                        {
                            name: "karim",
                            isInfected: "",
                            age: 10,
                            isImmuned: false,
                            isDead: false,
                            friends: []
                        }
                    ]
                },
                {
                    name: "fatima",
                    isInfected: "",
                    age: 18,
                    isImmuned: false,
                    isDead: false,
                    friends: [
                        {
                            name: "yacine",
                            isInfected: "",
                            age: 17,
                            isImmuned: false,
                            isDead: false,
                            friends: []
                        },
                        {
                            name: "aboubakar",
                            isInfected: "",
                            age: 19,
                            isImmuned: false,
                            isDead: false,
                            friends: [
                                {
                                    name: "Marie",
                                    isInfected: "",
                                    age: 18,
                                    isImmuned: false,
                                    isDead: false,
                                    friends: []
                                }
                            ]
                        },
                        {
                            name: "wafi",
                            isInfected: "",
                            age: 17,
                            isImmuned: false,
                            isDead: false,
                            friends: [
                                {
                                    name: "Marie",
                                    isInfected: "",
                                    age: 81,
                                    isImmuned: "",
                                    isDead: false,
                                    friends: []
                                },
                                {
                                    name: "Sophie",
                                    isInfected: "",
                                    age: 81,
                                    isImmuned: false,
                                    isDead: false,
                                    friends: []
                                },
                                {
                                    name: "Julie",
                                    isInfected: "",
                                    age: 83,
                                    isImmuned: false,
                                    isDead: false,
                                    friends: []
                                },
                                {
                                    name: "Suzanne",
                                    isInfected: "",
                                    age: 85,
                                    isImmuned: false,
                                    isDead: false,
                                    friends: []
                                }
                            ]
                        },
                        {
                            name: "salim",
                            isInfected: "",
                            age: 52,
                            isImmuned: false,
                            isDead: false,
                            friends: []
                        },
                        {
                            name: "nassim",
                            isInfected: "",
                            age: 25,
                            isImmuned: false,
                            isDead: false,
                            friends: []
                        }
                    ]
                }
            ]
        }
    ]
}

function infectZombieA(tree, age) {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].age >= age && !tree[i].isImmuned) {
            tree[i].isInfected = age > 0 ? "32" : "A";
        }
        infectZombieA(tree[i].friends, age);
    }
}

function startZombie32(tree) {
    startZombieB(tree, 32);
    startZombieA(tree, 32);
}


function startZombieA(tree, age = 0) {
    if (tree.filter(p => p.isInfected == (age > 0 ? "32" : "A") && !p.isImmuned).length > 0) {
        infectZombieA(tree, age);
    } else {
        for (let i = 0; i < tree.length; i++) {
            if (tree[i].friends.length > 0) {
                startZombieA(tree[i].friends, age);
            }
        }
    }
}

function startZombieB(tree, age = 0) {
    var res = false;
    for (let i = 0; i < tree.length; i++) {
        if (startZombieB(tree[i].friends, age) || tree[i].isInfected == (age > 0 ? "32" : "B")) {
            res = true;
            for (let y = 0; y < tree.length; y++) {
                if (tree[y].age >= age && !tree[i].isImmuned) {
                    tree[y].isInfected = age > 0 ? "32" : "B";
                }
            }
        }
    }
    return res && tree.filter(p => p.isInfected == (age > 0 ? "32" : "B") && !p.isImmuned).length > 0;
}

function startZombieC(tree) {
    if (tree.filter(p => p.isInfected).length > 0) {
        for (let i = 0; i < tree.length; i++) {
            if (i % 2 == 0 && !tree[i].isImmuned) {
                tree[i].isInfected = "C";
            }
        }
    }
    for (let i = 0; i < tree.length; i++) {
        startZombieC(tree[i].friends);
    }
}

function startUltimateZombie(tree, isFirst = false) {
    let res = false;
    for (let i = 0; i < tree.length; i++) {
        if (startUltimateZombie(tree[i].friends)) {
            res = true;
            if (isFirst && !tree[i].isImmuned) {
                tree[i].isInfected = "U";
            }
        }
    }
    return tree.filter(p => p.isInfected == "U").length > 0 || res;
}

function startVaccinA1(tree) {
    for (let i = 0; i < tree.length; i++) {
        startVaccinA1(tree[i].friends);
        if (tree[i].age <= 30) {
            if(tree[i].isInfected == "32" || tree[i].isInfected == "A"){
                tree[i].isInfected = "";
            }
            tree[i].isImmuned = true;
        }
    }
}

function startVaccinB1(tree) {
    for (let i = 0; i < tree.length; i++) {
        startVaccinB1(tree[i].friends);
        if (i % 2 == 0) {
            tree[i].isDead = true;
        }else if(tree[i].isInfected == "B" || tree[i].isInfected == "C"){
            tree[i].isInfected = false;
        }
    }
}

function startVaccinUltime(tree) {
    for (let i = 0; i < tree.length; i++) {
        startVaccinUltime(tree[i].friends);
        if(tree[i].isInfected == "U"){
            tree[i].isInfected = "";
            tree[i].isImmuned = true;
        }
    }
}

resetPopulation();
startZombieA(population);
console.log(JSON.stringify(population));

resetPopulation();
startZombieB(population);
console.log(JSON.stringify(population));

resetPopulation();
startZombie32(population);
console.log(JSON.stringify(population));

resetPopulation();
startZombieC(population);
console.log(JSON.stringify(population));

resetPopulation();
startUltimateZombie(population, true);
console.log(JSON.stringify(population));

resetPopulation();
startVaccinA1(population);
console.log(JSON.stringify(population));

resetPopulation();
startVaccinB1(population);
console.log(JSON.stringify(population));

resetPopulation();
startVaccinUltime(population);
console.log(JSON.stringify(population));





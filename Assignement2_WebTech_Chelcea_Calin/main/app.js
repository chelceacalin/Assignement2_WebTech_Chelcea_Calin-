function addTokens(input, tokens) {

    if (input.length < 6) {
        throw Error("Input should have at least 6 characters");
    }

    if (!(typeof input === "string")) {
        throw Error("Invalid input");
    }

    if ((tokens instanceof Array)) {
        tokens.forEach((elem) => {
            if (typeof elem === "object") {
                Object.values(elem).forEach((i) => {
                    if (!(typeof i === "string")) {
                        throw Error("Invalid array format");
                    }
                });
            } else {}
        })
    }

    if (input.includes("...")) {
        let cuvinte = input.split(" ");
        let i = 0;
        let myString = "";
        cuvinte.forEach((elem) => {
            if (elem !== "...") {
                myString += elem + " ";
            } else {
                //console.log(tokens[i++].tokenName);
                if (i < tokens.length) {
                    let tempString = tokens[i++].tokenName;
                    myString += "${" + `${tempString}` + "}";
                }
            }
        });
        return myString;
    } else {
        return input;
    }





}

const app = {
    addTokens: addTokens

}


//console.log(addTokens("Inputs", [{ tokenName: 5 }]));
//console.log(addTokens("Inputs ... really ... amazing", [{ tokenName: "are" }]));
//console.log(app.addTokens('Subsemnatul ...', [{ tokenName: 'subsemnatul' }]));
module.exports = app;

//let input = 5
//let tokens = ["unu", "doi", "3"];

//onsole.log(addTokens(input, tokens));
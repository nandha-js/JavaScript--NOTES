let person = {
  firstName: "Nandhakumar",
  lastName: "Perumal",

  newf: function () {
    console.log("newf" + " " + this.firstName + " " + this.lastName);

    var newf2 = function () {
      console.log(
        "this was newf2" + " " + this.firstName + " " + this.lastName
      );
    }.call(this);

    var new3 = function (hobby) {
      console.log("this was new3 " + "my Hoddy was " + hobby + " 😊🙌");
    }.call(this, "Gaming");

    var newf4 = function (title,level) {
      console.log("this was newf4" + " " + "I'm " + title +" title Holder and " + level + "th Level 🫡" )
    }.apply(this,["GrandMaster", "79"]); 

    var newf5 = ()=> { console.log("hiii")}

    newf5()
  },
};

person.newf();

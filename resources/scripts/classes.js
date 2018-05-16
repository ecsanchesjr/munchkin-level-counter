class Modifier {
   constructor(name, value) {
      this.name = name;
      this.value = value;
   }
}

class Player {
   constructor(id, name, level=0, classesAndRaces=["human"]){
      this.id = id;
      this.name = name;
      this.level = level;
      this.gender = false;
      this.classesAndRaces = classesAndRaces;
      this.listOfModifiers = [];
   }

   damage() {
      this.listOfModifiers.reduce( (allModifiers, modifier) => {
         return allModifiers + modifier.value;
      });
      return allModifiers;
   }

   updateModifiers(modifiers) {
      this.listOfModifiers = modifiers;
   }

   toggleGender() {
      this.gender = !this.gender;
   }
}
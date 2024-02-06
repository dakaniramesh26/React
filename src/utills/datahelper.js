export const hoursToGreeting = (hours) => {
    let timeGreeting = "";
    if (hours > 6 && hours < 12) {
      timeGreeting = "Good Morning";
    } else if (hours >= 12 && hours < 16) {
      timeGreeting = "Good Afternoon";
    } else if (hours >= 16 && hours < 20) {
      timeGreeting = "Good Evening";
    } else {
      timeGreeting = "Good Night";
    }

    return timeGreeting
  };

//     export const indexDay=(index)=>{
//     switch(index){
//       case 0:
//         return "sunday"
//       case 1:
//         return "Monday"
//       case 2:
//         return "Tuesday"
//       case 3: 
//       return "Wednesday"
//     case 4:
//       return "Thursday"
//     case 5:
//       return "Friday"
//     case 6:
//       return "Saterday"
//     }
//   }
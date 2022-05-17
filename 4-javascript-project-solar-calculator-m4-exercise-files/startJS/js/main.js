const myFunction = () => {
  let elem = document.getElementById('chooseMe')
  let dateShort = elem.options[elem.selectedIndex].text
  let dayName
  console.log(dateShort)

  //   switch (dateShort) {
  //     case 'U':
  //       dayName = 'Sunday'
  //       break
  //     case 'M':
  //       dayName = 'Monday'
  //       break
  //     case 'T':
  //       dayName = 'Tuesday'
  //       break
  //     case 'W':
  //       dayName = 'Wednesday'
  //       break
  //     case 'R':
  //       dayName = 'Thursday'
  //       break
  //     case 'F':
  //       dayName = 'Friday'
  //       break
  //     case 'S':
  //       dayName = 'Saturday'
  //       break
  //   }

  switch (Number(dateShort)) {
    case 1:
      dayName = 'Sunday'
      break
    case 2:
      dayName = 'Monday'
      break
    case 3:
      dayName = 'Tuesday'
      break
    case 4:
      dayName = 'Wednesday'
      break
    case 5:
      dayName = 'Thursday'
      break
    case 6:
      dayName = 'Friday'
      break
    case 7:
      dayName = 'Saturday'
      break
    default:
      dayName = 'Out of Range'
  } // end of switch

  document.getElementById('feedBack').innerHTML = dayName
}

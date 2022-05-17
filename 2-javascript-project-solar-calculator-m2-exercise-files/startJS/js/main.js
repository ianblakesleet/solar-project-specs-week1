// const test = () => {
//   //   alert('yoo')
//   console.log('yooo!')
// }

// test()

const floor = (diameter) => {
  let radius = diameter / 2
  let floorArea = Math.PI * (radius * radius)
  return floorArea
}

const walls = (diameter, height) => {
  let radius = diameter / 2
  let circumference = 2 * Math.PI * radius
  let wallArea = circumference * height
  return wallArea
}

const materialsNeeded = () => {
  let d = document.getElementById('across').value
  let h = document.getElementById('height').value

  let carpetNeeded = Math.ceil(floor(d))
  let paintNeeded = Math.ceil(walls(d, h))

  console.log(
    'carpet needed is: ' +
      carpetNeeded +
      ' ' +
      'and paint needed is :' +
      paintNeeded
  )
}

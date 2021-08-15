// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(d => d.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, name)=> {
    return drivers.filter(d => name === d.slice(0,name.length))
}


const matchName = (drivers, name) => {
    return drivers.filter(d => d.name === name)
  }




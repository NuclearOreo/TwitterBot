import config from 'config'
import Cities from '../types/cities'

const cities: Cities = config.get('cities')

// Getting random coordinate for a city
const randomCity = (): string => {
  const numberOfCities = 12
  const value = Math.floor(Math.random() * Math.floor(numberOfCities + 1))

  switch (value) {
    case 0: {
      return cities['san_fransico']
    }
    case 1: {
      return cities['new_york']
    }
    case 2: {
      return cities['miami']
    }
    case 3: {
      return cities['los_angeles']
    }
    case 4: {
      return cities['seattle']
    }
    case 5: {
      return cities['los_vegas']
    }
    case 6: {
      return cities['austin']
    }
    case 7: {
      return cities['houston']
    }
    case 8: {
      return cities['boston']
    }
    case 9: {
      return cities['toronto']
    }
    case 10: {
      return cities['london']
    }
    case 11: {
      return cities['chicago']
    }
    default: {
      return cities['new_york']
    }
  }
}

export default randomCity

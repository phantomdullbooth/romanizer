$(() => {

      const months = ['Ianuarius', 'Februarius', 'Martius', 'Aprilis', 'Maius', 'Iunius', 'Iulius', 'Augustus', 'September', 'October', 'November', 'December']
      const numeralOnes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
      const numeralTens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']


      const romanizeDigits = (number) => {
            const digits = number.toString().split('');
            let splitDigits;
            let romanizedDate;

            if (digits.length === 4) {
                  splitDigits = digits.splice(2, 2)
                  romanizedDate = numeralTens[parseInt(splitDigits[0]) - 1] + numeralOnes[parseInt(splitDigits[1]) - 1]
            } else if (digits.length === 2) {
                  splitDigits = digits
                  romanizedDate = numeralTens[parseInt(splitDigits[0]) - 1] + numeralOnes[parseInt(splitDigits[1]) - 1]
            } else if (digits.length === 1) {
                  romanizedDate = numeralOnes[number - 1]
            }

            return romanizedDate
      }

      const getDate = () => {

            const functionalTime = new Date()
            const month = functionalTime.getMonth()
            const date = functionalTime.getDate()
            const year = functionalTime.getFullYear()

            return months[month] + ' ' + romanizeDigits(date) + ', MM' + romanizeDigits(year)
      }

      const $romanDate = $('<h4>').text(getDate()).appendTo('main')


})

// i like music
// check out 'Chilly Wonka' by Melodysheep
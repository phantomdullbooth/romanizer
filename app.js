$(() => {
    console.log('i like music. check out \'Up in Flames\' by Years & Years')

    const months = ['Ianuarius', 'Februarius', 'Martius', 'Aprilis', 'Maius', 'Iunius', 'Iulius', 'Augustus', 'September', 'October', 'November', 'December']
    const numeralOnes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    const numeralTens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']

    // EXCHANGE ARABIC DATES/YEARS FOR ROMAN NUMERALS
    const romanizeDigits = (number) => {
        let digits = number.toString().split('')
        let splitDigits;
        let romanizedDate;

        if (digits.length === 4) {
            splitDigits = digits.splice(2, 2)

            if (parseInt(splitDigits[1]) === 0) {
                romanizedDate = numeralTens[parseInt(splitDigits[0]) - 1]
            } else if (parseInt(splitDigits[1]) !== 0) {
                romanizedDate = numeralTens[parseInt(splitDigits[0]) - 1] + numeralOnes[parseInt(splitDigits[1]) - 1]
            }
        } else if (digits.length === 2) {
            splitDigits = digits

            if (parseInt(splitDigits[1]) === 0) {
                romanizedDate = numeralTens[parseInt(splitDigits[0]) - 1]
            } else if (parseInt(splitDigits[1]) !== 0) {
                romanizedDate = numeralTens[parseInt(splitDigits[0]) - 1] + numeralOnes[parseInt(splitDigits[1]) - 1]
            }
        } else if (digits.length === 1) {
            romanizedDate = numeralOnes[number - 1]
        }
        return romanizedDate
    }

    // RETURN COMPLETE DATE
    const getDate = (format) => {
        const thisDate = new Date()
        const month = thisDate.getMonth()
        const date = thisDate.getDate()
        const year = thisDate.getFullYear()

        if (format === 'UK') {
            return romanizeDigits(date) + ' ' + months[month] + ' MM' + romanizeDigits(year)
        } else {
            return months[month] + ' ' + romanizeDigits(date) + ', MM' + romanizeDigits(year)
        }
    }

    const $romanDate = $('<h1>').text(getDate()).appendTo('main')

    // CHANGE DATA FORMATS
    const $formats = $('<div>').addClass('formats').appendTo('main')

    const $dateFormatUS = $('<p>').text('US').addClass('change-links').click(function() {
        $romanDate.text(getDate('US'))
    }).appendTo($formats)

    const $formatDivider = $('<p>').text(' / ').css('margin', '0 10px').appendTo($formats)

    const $dateFormatUK =  $('<p>').text('UK').addClass('change-links').click(function() {
        $romanDate.text(getDate('UK'))
    }).appendTo($formats)
})
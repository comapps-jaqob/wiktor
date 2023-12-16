module.exports = function({ matchUtilities, theme }) {

    matchUtilities({
        'background': (value) => {
            
            return {
                'background': value
            }
        }
    }, {
        values: theme('backgroundColor'),
        type: [
            'color',
            'any'
        ]
    })

    matchUtilities({
        'type': (value, { modifier }) => {
            
            return {
                'font-size': value,
                "line-height": modifier
            }
        }
    }, {
        values: theme('fontSize'),
        modifiers: theme('lineHeight'),
        modified: theme('fontWeight'),
        type: [
            'absolute-size',
            'relative-size',
            'length',
            'percentage'
        ]
    })

    matchUtilities({
        'width': (value) => {
            
            return {
                'width': value
            }
        },
        'height': (value) => {
            
            return {
                'height': value
            }
        }
    })

    matchUtilities({
        'padding': (value) => {
            
            return {
                'padding-top': value,
                'padding-right': value,
                'padding-bottom': value,
                'padding-left': value
            }
        },
        'padding-top': (value) => {
            
            return {
                'padding-top': value
            }
        },
        'padding-right': (value) => {
            
            return {
                'padding-right': value
            }
        },
        'padding-bottom': (value) => {
            
            return {
                'padding-bottom': value
            }
        },
        'padding-left': (value) => {
            
            return {
                'padding-left': value
            }
        }
    })

    matchUtilities({
        'margin': (value) => {
            
            return {
                'margin-top': value,
                'margin-right': value,
                'margin-bottom': value,
                'margin-left': value
            }
        },
        'margin-top': (value) => {
            
            return {
                'margin-top': value
            }
        },
        'margin-right': (value) => {
            
            return {
                'margin-right': value
            }
        },
        'margin-bottom': (value) => {
            
            return {
                'margin-bottom': value
            }
        },
        'margin-left': (value) => {
            
            return {
                'margin-left': value
            }
        }
    })
}
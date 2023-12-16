module.exports = function({ addUtilities }) {

    addUtilities(
        {
            '.grid-cols-auto': {
                'grid-auto-flow': 'column'
            }
        }
    )
}

    module.exports = (text, color, type, font) => {
        console.log(chalk[color || 'yellow'](
            figlet.textSync(text, {
                horizontalLayout: type || 'default',
                font: font || 'Standard'
            })
        ));
    };


const logger = new Logger();

const computerByDefault = new Computer('Dell', '5000');
const laptopByDefault = new Laptop('Asus', 'VivoBook');

logger.appendObjectPrittier(computerByDefault, 'Computer Dell 5000 (Variables por defecto)');
logger.appendLine(`toString de computer: ${computerByDefault.toString()}`);

logger.appendObjectPrittier(laptopByDefault, 'Laptop Asus VivoBook (Variables por defecto)');
logger.appendLine(`toString de laptop: ${laptopByDefault.toString()}`);


const computer = new Computer('Dell', '10000', 12, 128, 32);
const laptop = new Laptop('Asus', 'VivoBook+', 10, 8, 512, 21);

logger.appendObjectPrittier(computer, 'Computer Dell 10000 (Variables por defecto cambiadas)');
logger.appendLine(`toString de computer: ${computer.toString()}`);

logger.appendObjectPrittier(laptop, 'Laptop Asus VivoBook+ (Variables por defecto cambiadas)');
logger.appendLine(`toString de laptop: ${laptop.toString()}`);
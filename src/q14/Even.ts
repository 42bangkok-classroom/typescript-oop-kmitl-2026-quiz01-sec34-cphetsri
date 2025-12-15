const number = Number(process.argv[2]);
let i = 0;

while (i <= number) {
	console.log(`${i}`);
	i += 2;

	if (i > number) {
		process.exit(0);
	}
}

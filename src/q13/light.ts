const inputLight = process.argv[2];

let light = inputLight.toLowerCase();

switch (light) {
	case "red":
		console.log("Stop");
		break;

	case "yellow":
		console.log("Caution");
		break;

	case "green":
		console.log("Go");
		break;

	default:
		console.log("Unknow");
		break;

}

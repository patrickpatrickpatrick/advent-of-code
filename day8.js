const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6
`;

const buffer = input.split('\n');
let index = 0;
let linesExecuted = 0;
let accumulator = 0;

while (linesExecuted < buffer.length) {
	const currentLine = buffer[index];
	const instruction = currentLine.split(' ')[0];
	const value = currentLine.split(' ')[1];

	console.log(instruction, value)

	 switch(instruction) {
	 	case 'acc':

	 		accumulator += parseInt(accumulator);
	 		index += 1;
	 		break;
	 	case 'jmp':
	 		index += parseInt(value);
	 		break;
	 	default:
	 		index += 1;
	 }

	 linesExecuted += 1;
}

console.log(accumulator);

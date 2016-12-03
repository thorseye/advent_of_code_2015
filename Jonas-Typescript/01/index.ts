import { input } from './input';

export class Santa {
	private map = {
		'(': 1,
		')': -1
	}

	public walk(instructions: string, stopAtBasement = false): [number, number] {
		instructions = instructions.replace(/\s+/, '');
		let floor = 0, c = 0;
		for (; c < instructions.length; c++) {
			const char = instructions.charAt(c);
			if (this.map[char])
				floor += this.map[char];

			if (stopAtBasement && floor < 0)
				break;
		}
		return [floor, c + 1];
	}
}

export const P1 = new Santa().walk(input)[0];
export const P2 = new Santa().walk(input, true)[1];
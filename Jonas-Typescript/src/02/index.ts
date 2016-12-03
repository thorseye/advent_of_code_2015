import { input } from './input';
declare global {
	interface Array<T> {
		sum: () => number;
	}
}

Array.prototype.sum = function (): number {
	return this.reduce((a, b) => a + b, 0);
}

export class Present {
	private sides: number[];
	public ribbonLength: number;
	public paper: number;

	constructor(measures: string) {
		this.sides = measures.split('x').map(s => parseInt(s, 10)).sort();
		this.calculatePaper();

		this.ribbonLength = 2 * (this.sides.sum() - Math.max(...this.sides));
		this.ribbonLength += this.sides.reduce((a, b) => a * b, 1);
	}

	private calculatePaper() {
		const w = this.sides[0];
		const h = this.sides[1];
		const l = this.sides[2];
		const areas = [w * h, w * l, h * l];
		this.paper = 2 * areas.sum() + Math.min(...areas);
	}
}

export class PresentFactory {
	public static make(input: string): Present[] {
		return input
			.split('\n')
			.filter(s => s && s.trim().length)
			.map(s => new Present(s));
	}
}

export const P1 = PresentFactory.make(input).map(p => p.paper).sum();
export const P2 = PresentFactory.make(input).map(p => p.ribbonLength).sum();
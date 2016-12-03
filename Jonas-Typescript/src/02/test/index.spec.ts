import * as assert from 'assert'
import * as mocha from 'mocha'

import { P2, PresentFactory } from '../index'
import { input } from '../input';

describe('day 2', () => {
	describe('day 2, puzzle 1', () => {
		it('should calculate the paper area', () => {
			let presents = PresentFactory.make(input)
			const area = presents.map(p => p.paper).reduce((a, b) => a + b, 0)
			assert.equal(area, 1598415);
		})
	})

	describe('day 2, puzzle 2', () => {
		it('should calculate the ribbon length', () => {
			let presents = PresentFactory.make(`
				2x3x4
				1x1x10
			`)

			// presents = PresentFactory.make(input);
			const length = presents.map(p => p.ribbonLength).reduce((a, b) => a + b, 0)
			assert.equal(length, 48);
			assert.equal(P2, 3812909);
		})
	})
})
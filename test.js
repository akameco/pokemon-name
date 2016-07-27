import test from 'ava';
import fn from './';

test('return ピカチュウ', t => {
	t.is(fn('Pikachu'), 'ピカチュウ');
});

test('throw error', t => {
	t.throws(() => fn('Pokachu'), 'Not exist.');
});

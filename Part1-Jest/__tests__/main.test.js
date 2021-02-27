const vol = require('../assets/scripts/main');

describe('volume icon', () => {
    test('volume level 0', () => {
        expect(vol(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });

    test('volume level 1', () => {
        expect(vol(23)).toBe('./assets/media/icons/volume-level-1.svg');
    });

    test('volume level 2', () => {
        expect(vol(35)).toBe('./assets/media/icons/volume-level-2.svg');
    });

    test('volume level 3', () => {
        expect(vol(67)).toBe('./assets/media/icons/volume-level-3.svg');
    });
});
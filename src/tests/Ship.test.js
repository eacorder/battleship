const ship = require('../factories/Ship')

describe("Test ship functions", () => {

        let shipTest; 
        beforeEach(function () {
            shipTest = new ship(2);
        });

        test('Properly add a hit and not sunk the ship', () => {
            shipTest.hit();
            expect(shipTest.health).toBe(1);
            expect(shipTest.sunk).toBe(false);
        } )

        test('Properly add hits and sunk the ship correctly', () => {
            shipTest.hit();
            shipTest.hit();
            expect(shipTest.health).toBe(0);
            expect(shipTest.sunk).toBe(true);
        } )
    }

)
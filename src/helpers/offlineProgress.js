export function calculateProgress() {
    let stores = {
        count: 1,
        value: 1
    }
    let factories = {
        count: 1,
        value: 1
    };
    let balls = 0;

    let calculate = function(time) {

        let tickDuration = 1000/60;
        let ticks = time/tickDuration;
        console.log("ticks:", ticks, "tick duration:", tickDuration);

        let calculation = 0;
        let storeCount = stores.count;
        let factoriesCount = factories.count;
        let storeProduction = stores.value;
        let factoryProduction = factories.value;

        for(let i = 0; i < ticks; i++) {
            storeCount += (factoriesCount * factoryProduction) * (tickDuration/1000);
            calculation += (storeCount * storeProduction) * (tickDuration/1000);
        }

        return calculation.toFixed(1);
    };

    balls = calculate(2000);
}
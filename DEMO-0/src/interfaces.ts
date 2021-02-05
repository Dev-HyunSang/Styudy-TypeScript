// eslint-disable

interface FruitInformation {
    name: string;
    color: 'orange' | 'green' | 'red';
    type?: string;
    origin: string | null;
}

interface FruitInformationWithPips extends FruitInformation {
    pipCount: number;
}

interface FruitInformationWithSeeds extends FruitInformation {
    seedCount: number;
}

const appleInformation: FruitInformationWithPips = {
    name: 'Apple',
    color: 'red',
    pipCount: 10,
    type: 'Granny Smith',
    origin: "UK"
}

const orangeInformation: FruitInformationWithSeeds = {
    name: 'Orange',
    color: 'orange',
    seedCount: 20,
    origin: null
}

const pearInformation: FruitInformationWithPips = {
    name: 'Pear',
    color: 'green',
    pipCount: 15,
    origin: null
}

const pearColor = pearInformation.color;
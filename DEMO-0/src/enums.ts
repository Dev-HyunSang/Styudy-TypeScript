// eslint-disable

enum ElementType {
    Earth = "brown",
    Wind = "grey",
    Fire = "red",
    Water = "blue"
}

let myFavouriteElementType: ElementType = ElementType.Fire;
myFavouriteElementType = ElementType.Water;

const isWaterMyFavouriteElementType: boolean = myFavouriteElementType === ElementType.Water;

const myFavoriteColour = "blue";

switch (myFavoriteColour) {
    case ElementType.Water:
        console.log("Water matches my favorite colour!");
        break;
    default:
        console.log("This element type does not match my favorite colour.");
        break;
}
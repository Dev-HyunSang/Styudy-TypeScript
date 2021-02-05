// eslint-disable
var ElementType;
(function (ElementType) {
    ElementType["Earth"] = "brown";
    ElementType["Wind"] = "grey";
    ElementType["Fire"] = "red";
    ElementType["Water"] = "blue";
})(ElementType || (ElementType = {}));
var myFavouriteElementType = ElementType.Fire;
myFavouriteElementType = ElementType.Water;
var isWaterMyFavouriteElementType = myFavouriteElementType === ElementType.Water;
var myFavoriteColour = "blue";
switch (myFavoriteColour) {
    case ElementType.Water:
        console.log("Water matches my favorite colour!");
        break;
    default:
        console.log("This element type does not match my favorite colour.");
        break;
}

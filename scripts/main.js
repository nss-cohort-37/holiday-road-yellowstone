import { getEateries } from "./eateries/eateriesComponents/EateryDataProvider.js";
import { EaterySelectListcomponent } from "./eateries/eateriesComponents/EaterySelectComponent.js";
import { EateriesListComponent } from "./eateries/eateriesComponents/EateryListComponent.js";
import { SavedEateryListComponent } from "./eateries/eateriesComponents/EaterySavedListComponent.js";
import { DailogComponent } from "./eateries/dialog/Dialog.js";
import { getParks } from "./parks/ParkProvider.js";
import parksSelect from "./parks/ParkSelect.js";
import parkListComponent from "./parks/ParkList.js";
import parkDialogEvents from "./parks/ParkDialogs.js";
import AttractionsSelect from "./attractions/AttractionsSelect.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { AttractionsListComponent } from "./attractions/AttractionsList.js";
import { LearnMoreButton } from "./attractions/LearnMore.js";
import {ItineraryListComponent } from "./SavedItinerary/SavedItineraryList.js"
// import { getItinerary } from "./SavedItinerary/SavedDataProvider.js";



getEateries()
  .then(EaterySelectListcomponent)
  .then(EateriesListComponent)
  .then(SavedEateryListComponent)
  .then(DailogComponent);

getParks()
  .then(() => parksSelect())
  .then(() => parkListComponent())
  .then(() => parkDialogEvents());

getAttractions()
  .then(AttractionsSelect)
  .then(AttractionsListComponent)
  getItinerary().then(ItineraryListComponent);
  
getAttractions().then(LearnMoreButton);

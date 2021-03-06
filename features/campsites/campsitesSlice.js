import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectCampsiteById = (id) => {
    return CAMPSITES.find(camp => camp.id === id)
}

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find(camp => camp.featured)
}

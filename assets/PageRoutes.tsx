import AppRoutes, { AppRouteId, Route } from "./AppRoutes";
import AllCountsPage from "./pages/AllCountsPage";
import AllVaccinesPage from "./pages/AllVaccinesPage";
import CountsPage from "./pages/CountsPage";
import HomePage from "./pages/HomePage";
import VaccinePage from "./pages/VaccinePage";

export interface RouteWithComponent extends Route {
    component?: React.ComponentType<any>;
}
  
export type PageRoutesType = Partial<
Record<keyof typeof AppRouteId, RouteWithComponent>
>;

const PageRoutes: PageRoutesType = {
    home: {
        component: HomePage,
        ...AppRoutes.home
    },
    allCounts: {
        component: AllCountsPage,
        ...AppRoutes.allCounts
    },
    allVaccines: {
        component: AllVaccinesPage,
        ...AppRoutes.allVaccines
    },
    counts: {
        component: CountsPage,
        ...AppRoutes.counts
    },
    vaccines: {
        component: VaccinePage,
        ...AppRoutes.vaccines
    }
};

export default PageRoutes;

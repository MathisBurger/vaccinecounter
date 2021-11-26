export interface Route {
    path?: string;
    name?: string;
}

export enum AppRouteId {
    home,
    allCounts,
    allVaccines,
    counts,
    vaccines,
};

export type AppRoutesType = Partial<Record<keyof typeof AppRouteId, Route>>;

const AppRoutes: AppRoutesType = {
    home: {
        path: '/home',
        name: 'Home'
    },
    allCounts: {
        path: '/all-counts',
        name: 'AllCounts'
    },
    allVaccines: {
        path: '/all-vaccines',
        name: 'AllVaccines'
    },
    counts: {
        path: '/counts',
        name: 'Counts'
    },
    vaccines: {
        path: '/vaccines',
        name: 'Vaccines'
    }
};

export default AppRoutes;
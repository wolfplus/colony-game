import { Router } from '@angular/router';
export class customRoute {
    constructor(protected router: Router) {}

    hasRoute(route: string) {
        return this.router.url.includes(route);
    }

    getRoute() {
        return this.router.url;
    }
}
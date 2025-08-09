import { useState, useEffect } from 'react';

export interface RouteParams {
  [key: string]: string;
}

export interface Route {
  path: string;
  params: RouteParams;
}

// Simple hash-based router
export class Router {
  private static instance: Router;
  private listeners: ((route: Route) => void)[] = [];

  static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  }

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', this.handleRouteChange.bind(this));
      window.addEventListener('popstate', this.handleRouteChange.bind(this));
      window.addEventListener('load', this.handleRouteChange.bind(this));
    }
  }

  private handleRouteChange() {
    const route = this.getCurrentRoute();
    this.listeners.forEach(listener => listener(route));
  }

  getCurrentRoute(): Route {
    // Check for hash first (for internal navigation)
    const hash = window.location.hash.slice(1);
    if (hash) {
      return this.parseRoute(hash);
    }
    
    // Fall back to pathname for direct visits
    const pathname = window.location.pathname || '/';
    return this.parseRoute(pathname);
  }

  private parseRoute(path: string): Route {
    const segments = path.split('/').filter(Boolean);
    const params: RouteParams = {};

    // Handle different route patterns
    if (segments.length === 0) {
      return { path: '/', params };
    }

    if (segments[0] === 'event' && segments[1]) {
      return { path: '/event/:id', params: { id: segments[1] } };
    }

    if (segments[0] === 'auth') {
      return { path: '/auth', params };
    }

    if (segments[0] === 'payment') {
      return { path: '/payment', params };
    }

    if (segments[0] === 'purchase-info') {
      return { path: '/purchase-info', params };
    }

    // Default to home if no match
    return { path: '/', params };
  }

  navigate(path: string, params?: RouteParams) {
    let fullPath = path;

    // Replace route parameters
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        fullPath = fullPath.replace(`:${key}`, value);
      });
    }

    // Use proper URL navigation with history API
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', fullPath);
      // Manually trigger route change since pushState doesn't fire popstate
      this.handleRouteChange();
    } else {
      // Fallback to hash-based navigation for older browsers
      window.location.hash = fullPath;
    }
  }

  subscribe(listener: (route: Route) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

// React hook for using the router
export function useRouter() {
  const [route, setRoute] = useState<Route>({ path: '/', params: {} });
  const router = Router.getInstance();

  useEffect(() => {
    // Set initial route
    setRoute(router.getCurrentRoute());

    // Subscribe to route changes
    const unsubscribe = router.subscribe(setRoute);
    return unsubscribe;
  }, [router]);

  const navigate = (path: string, params?: RouteParams) => {
    router.navigate(path, params);
  };

  return { route, navigate };
}

// Helper function to match routes
export function matchRoute(currentPath: string, targetPath: string): boolean {
  if (currentPath === targetPath) return true;
  
  const currentSegments = currentPath.split('/').filter(Boolean);
  const targetSegments = targetPath.split('/').filter(Boolean);

  if (currentSegments.length !== targetSegments.length) return false;

  return targetSegments.every((segment, index) => {
    return segment.startsWith(':') || segment === currentSegments[index];
  });
}
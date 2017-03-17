import analytics from '../utils/googleAnalytics';

const googleAnalyticsMiddleware = store => next => action => {
    switch (action.type) {
        case 'ADD_TODO': {
            analytics.event('Todo', 'Add');
            break;
        }

        case 'DELETE_TODO': {
            analytics.event('Todo', 'Delete');
            break;
        }

        case 'TOGGLE_TODO': {
            analytics.event('Todo', 'Toggle');
            break;
        }

        default: {
            break;
        }
    }

    return next(action);
};

export default googleAnalyticsMiddleware;

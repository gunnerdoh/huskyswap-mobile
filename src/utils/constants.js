export const CATEGORIES = [
    { id: 'textbooks', label: 'Textbooks' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'clothing', label: 'Clothing' },
    { id: 'tickets', label: 'Tickets' },
    { id: 'other', label: 'Other' }
  ];
  
  export const LISTING_STATUS = {
    ACTIVE: 'active',
    SOLD: 'sold',
    PENDING: 'pending',
    ARCHIVED: 'archived'
  };
  
  export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  export const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
  export const MAX_IMAGES_PER_LISTING = 5;
  
  export const ERROR_MESSAGES = {
    INVALID_EMAIL: 'Please use your UW email address',
    WEAK_PASSWORD: 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number',
    PASSWORDS_NOT_MATCH: 'Passwords do not match',
    GENERIC_ERROR: 'Something went wrong. Please try again.',
    UNAUTHORIZED: 'You must be logged in to perform this action'
  };
  
  export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    PROFILE: '/profile',
    MESSAGES: '/messages',
    NEW_LISTING: '/new-listing',
    LISTING: '/listing/:id',
    CHAT: '/messages/:chatId'
  };
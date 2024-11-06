export const isValidEmail = (email) => {
    return email && email.endsWith('@uw.edu');
  };
  
  export const isValidPassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  
  export const validateListing = (listing) => {
    const errors = {};
    
    if (!listing.title?.trim()) {
      errors.title = 'Title is required';
    }
    
    if (!listing.price || listing.price <= 0) {
      errors.price = 'Valid price is required';
    }
    
    if (!listing.category) {
      errors.category = 'Category is required';
    }
    
    if (!listing.description?.trim()) {
      errors.description = 'Description is required';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
  
  export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
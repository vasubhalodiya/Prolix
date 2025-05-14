// export const checkSubscription = () => {
//   const isSubscribed = localStorage.getItem("isSubscribed") === "true";
//   const expiry = localStorage.getItem("subscriptionExpiry");

//   if (!isSubscribed || !expiry) return false;

//   const expiryDate = new Date(expiry);
//   const currentDate = new Date();

//   if (currentDate > expiryDate) {
//     // Expired, reset subscription status
//     localStorage.setItem("isSubscribed", "false");
//     localStorage.removeItem("subscriptionExpiry");
//     return false;
//   }

//   return true;
// };
export const checkSubscription = () => {
  const isSubscribed = localStorage.getItem("isSubscribed") === "true";
  const expiry = localStorage.getItem("subscriptionExpiry");

  if (!isSubscribed || !expiry) return false;

  const expiryDate = new Date(parseInt(expiry)); // Convert expiry string to a Date object
  const currentDate = new Date();

  if (currentDate > expiryDate) {
    // Expired
    localStorage.setItem("isSubscribed", "false");
    localStorage.removeItem("subscriptionExpiry");
    return false;
  }

  return true;
};

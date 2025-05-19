export const checkSubscription = () => {
  const isSubscribed = localStorage.getItem("isSubscribed") === "true";
  const expiry = localStorage.getItem("subscriptionExpiry");

  if (!isSubscribed || !expiry) return false;

  const expiryDate = new Date(parseInt(expiry));
  const currentDate = new Date();

  if (currentDate > expiryDate) {
    localStorage.setItem("isSubscribed", "false");
    localStorage.removeItem("subscriptionExpiry");
    return false;
  }

  return true;
};

const analyticsTracking = (eventName) => {
  if (typeof windows !== "undefined") {
    window.ga("send", "event", "social", "click", eventName, {
      noneInteraction: true,
    });
  }
};

export default analyticsTracking;

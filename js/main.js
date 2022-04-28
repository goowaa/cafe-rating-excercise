function trackRatingClick(rating) {

    window.dataLayer.push({
        'event': 'feedbackGiven', 
        'grade': rating
    });
}